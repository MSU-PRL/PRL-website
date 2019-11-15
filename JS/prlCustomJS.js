$(function() {
  // Back to top button. Appears only on small screens
  var btn = $('.prl-back-to-top-btn');
  // Click button
  btn.on('click', function(e) {
  e.preventDefault();
  // Scroll to top of page
  $('html, body').animate({scrollTop: 0}, 2000);
  });

  // Accessible accordion
  // Check for <template> support
  if ('content' in document.createElement('template')) {
    const tmpl = document.createElement('template')

    // Create the web component's template
    // featuring a <slot> for the Light DOM content
    tmpl.innerHTML = `
      <h2>
        <button aria-expanded="false">
          <svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">
            <rect class="vert" height="8" width="2" y="1" x="4"/>
            <rect height="2" width="8" y="4" x="1"/>
          </svg>
        </button>
      </h2>
      <div class="content" hidden>
        <slot></slot>
      </div>
      <style>
        h2 {
          margin: 0;
          color: #2E4D4D;
        }

        h2 button {
          all: inherit;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0.5em 0;
        }

        h2 button:focus svg {
          outline: 2px solid;
        }

        button svg {
          height: 1em;
          margin-left: 0.5em;
        }

        [aria-expanded="true"] .vert {
          display: none;
        }

        [aria-expanded] rect {
          fill: currentColor;
        }
      </style>
    `
    // Check for latest Shadow DOM syntax support
    if (document.head.attachShadow) {
      class PRLAccordion extends HTMLElement {
        constructor() {
          super()

          // Make the host element a region
          this.setAttribute('role', 'region')

          // Create a 'shadowRoot' and populate from template
          this.attachShadow({ mode: 'open' })
          this.shadowRoot.appendChild(tmpl.content.cloneNode(true))

          // Assign the toggle button
          this.btn = this.shadowRoot.querySelector('h2 button')

          // Get the first element in Light DOM
          const oldHeading = this.querySelector(':first-child')
          // and cast its heading level (which should, but may not, exist)
          let level = parseInt(oldHeading.tagName.substr(1))
          // Then take its 'id' (may be null)
          let id = oldHeading.id
          
          // Get the Shadow DOM <h2>
          this.heading = this.shadowRoot.querySelector('h2')

          // If 'id' exists, apply it
          if (id) {
            this.heading.id = id
          }

          // If there is no level, there is no heading.
          // Add a warning.
          if (!level) {
            console.warn('The first element inside each <prl-accordion-section> should be a heading of an appropriate level.')
            
            // If the level is a real integer but not 2
            // set 'aria-level' accordingly
            if (level && level !==2) {
              this.heading.setAttribute('aria-level', level)
            }
          }

          // Add the Light DOM heading label to the innerHTML of the toggle button
          // and remove the now unwanted Light DOM heading
          this.btn.innerHTML = oldHeading.textContent + this.btn.innerHTML
          oldHeading.parentNode.removeChild(oldHeading)
          
          // The main state switching function
          this.switchState = () => {
            let expanded = this.getAttribute('open') === 'true' || false

            // Toggle 'aria-expanded'
            this.btn.setAttribute('aria-expanded', expanded)
            // Toggle the '.content' element's visibility
            this.shadowRoot.querySelector('.content').hidden = !expanded
          }

          this.btn.onclick = () => {
            // Change the component's 'open' attribute value on click
            let open = this.getAttribute('open') === 'true' || false
            this.setAttribute('open', open ? 'false' : 'true')

            // Update the hash if the collapsible section's
            // heading has an 'id' and we are opening, not closing
            if (this.heading.id && !open) {
              history.pushState(null, null, '#' + this.heading.id)
            }
          }
        }

        connectedCallback() {
          if (window.location.hash.substr(1) === this.heading.id) {
            this.setAttribute('open', 'true')
            this.btn.focus()
          }
        }

        // Identify just the 'open' attribute as an observed attribute
        static get observedAttributes() {
          return ['open']
        }

        // When 'open' changes value, execute switchState()
        attributeChangedCallback(name) {
          if (name === 'open') {
            this.switchState()
          }
        }
      }

      // Add our new custom element to the window for use
      window.customElements.define('prl-accordion-section', PRLAccordion)

      // Define the expand/collapse all template
      const buttons = document.createElement('div')
      buttons.innerHTML = `
        <ul class="controls" aria-label="section controls">
          <li><button id="expand">expand all</button></li>
          <li><button id="collapse">collapse all</button></li>
        </ul>
        `

      // Get the first 'prl-accordion-section' on the page
      // and all toggle sections as a node list
      const first = document.querySelector('prl-accordion-section')
      const all = document.querySelectorAll('prl-accordion-section')

      // Insert the button controls before the first <prl-accordion-section>
      first.parentNode.insertBefore(buttons, first)

      // Place the click on the parent <ul>...
      buttons.addEventListener('click', (e) => {
        // ...then determine which button was the target
        let expand = e.target.id === 'expand' ? true : false

        // Iterate over the toggle sections to switch
        // each one's state uniformly
        Array.prototype.forEach.call(all, (t) => {
          t.setAttribute('open', expand)
        })
      })
    }
  }
});
