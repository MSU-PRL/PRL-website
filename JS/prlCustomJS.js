// SCROLL ANIMATION FOR BACK TO TOP BUTTON

$(function() {
  var btn = $('.prl-back-to-top-btn');
  // Click button
  btn.on('click', function(e) {
  e.preventDefault();
  // Scroll to top of page
  $('html, body').animate({scrollTop: 0}, 2000);
  });
});


// ACCESSIBLE TOOLTIP

document.addEventListener("DOMContentLoaded", function makeTooltipAccessible() {
  // Look for all tooltip elements in document
  const toolTipsList = document.querySelectorAll('.prl-tooltip')
  if(toolTipsList.length > 0) {
    // Look for all tooltip containers in document
    const toolTipInfo = document.querySelectorAll('.prl-tooltip-info');
    toolTipsList.forEach(item => {
      // Generate a random number that will be assigned to both aria-describedby and the child's id attributes
      let randomNumber = Math.random().toString(36).substr(2, 9)
      // Set the aria-describedby value to be the random number
      item.setAttribute("aria-describedby", randomNumber)
      // Look through the toolTipContainer children
      for (i=0; i < item.children.length; i++){
        // Identify the child with the tooltip info, denoted by class name 'prl-tooltip-info'
        if(item.children[i].className === "prl-tooltip-info" || item.children[i].className === "prl-tooltip-info prl-tooltip-info-right"){
          // Assign the same generated number to the child's id attribute
          item.children[i].setAttribute('id', randomNumber)
        }
      }
    })
    // Create a template aria-hidden attribute with value = "true"
    var ariaHiddenAttr = document.createAttribute("aria-hidden")
    ariaHiddenAttr.value = "true"
    // Method, which will be passed in an addEventListener function, sets aria-hidden to be true
    const setAriaHiddenFalse = (item) => {
      item.setAttribute('aria-hidden', 'false')
    }
    // Method, which will be passed in an addEventListener function, sets aria-hidden to be false
    const setAriaHiddenTrue = (item) => {
      item.setAttribute('aria-hidden', 'true')
    }
    // For each tooltip in document
    toolTipInfo.forEach((item, i) => {
      // If the element does not have an aria-hidden attribute
      if(!item.getAttribute('aria-hidden')) {
        // Add the attribute to this element
        item.setAttributeNode(ariaHiddenAttr.cloneNode(true)) 
        console.warn('Tooltips need to have an aria-hidden attribute. One has been generated for this element', item)
      }
      const toolTipNode = toolTipInfo[i].parentNode
      // Event listeners for mouse hover and focus events to set aria-hidden to false
      toolTipNode.addEventListener('mouseenter', function(e) {setAriaHiddenFalse(item)}, false);
      toolTipNode.addEventListener('focus', function(e) {setAriaHiddenFalse(item)}, false);
        // Event listeners for mouse leave and blut events to set aria-hidden to true
      toolTipNode.addEventListener('mouseleave', function(e) {setAriaHiddenTrue(item)}, false);
      toolTipNode.addEventListener('blur', function(e) {setAriaHiddenTrue(item)}, false);
    })
  }
});


// ACCESSIBLE ACCORDION

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
        flex-shrink: 0;
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
    if(first) {
      first.parentNode.insertBefore(buttons, first)
    }

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

// STICKY/FLOATING, MENU COMPONENT

(function populateStickySideMenu() {
  // This script looks for an HTML div element with class name 'prl-sticky-nav'
  // in order to build the menu
  const prlStickyMenuInner = document.querySelector('.prl-sticky-nav-inner');

  if(prlStickyMenuInner) {
    const headerTags = document.querySelectorAll('.mainContent__mainCol h1, .mainContent__mainCol h2');
    const aside = document.getElementById('prl-sticky-nav')
    const ul = document.createElement('ul')
    prlStickyMenuInner.appendChild(ul)
    const prlStickyMenuList = document.querySelector('.prl-sticky-nav-inner ul');
    // CREATE MENU
  
    const createMenu = () => {
      for (i of headerTags) {
        // Create menu links based on h2 tags in document
        const listItem = document.createElement('li');
        const div = document.createElement('div');
        const span = document.createElement('span');
        const anchor = document.createElement('a');
        const anchorAttributeName = i.textContent.toLowerCase().replace(/[^èéòàùì\w]/gi, '') + 'link'
  
        listItem.addEventListener('focusin', menuLinkOnFocus);
        listItem.addEventListener('focusout', menuLinkOnBlur);

        // Truncate menu item name if longer than 19 characters
        i.textContent.length > 19 
          ? div.textContent = i.textContent.slice(0,19) + '...'
          : div.textContent = i.textContent
          
        // If menu item is linked to the page title, text says 'Top'
        i.className.includes('pageTitle') ? div.textContent = 'Top' : null
        
        div.className = 'text'
        anchor.appendChild(div)
        anchor.appendChild(span)
        anchor.addEventListener('click', menuLinkClick);
        anchor.href = '#' + anchorAttributeName
        listItem.appendChild(anchor)
        prlStickyMenuList.append(listItem)
  
        // Create corresponding h2 anchor targets in document body
        const anchorTarget = document.createElement('a')
        anchorTarget.id = anchorAttributeName;
        anchorTarget.name = anchorAttributeName;
        // Inline styles to override default anchor styles
        anchorTarget.style.cssText = "border-bottom: none;text-decoration: none;color: inherit;font-weight: inherit;" 
        anchorTarget.textContent = i.textContent
        oldNode = i.childNodes[0]
        i.replaceChild(anchorTarget, oldNode)
      }
    };
    // animate the scroll effect
  
    const menuLinkClick = (event) => {
      // Use smooth scroll function when clicking on link
      smoothScroll(event) 
    } 
  
    const smoothScroll = (event) => {
      // Smooth scroll function
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href");
      const targetPosition = document.querySelector(targetId).offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start = null;
  
      const scrollAnimation = (timestamp) => {
        if (!start) {
          start = timestamp
        };
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(scrollAnimation);
      }
  
      const easeInOutCubic = (t, b, c, d) => {
        // Timing of scroll function
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
      };
      
      return window.requestAnimationFrame(scrollAnimation);
  
    } 
  
    // sticky menu listeners
  
    const menuLinkOnFocus = (event) => {
      // On focus, open menu and change link color
      event.currentTarget.classList.add('li-focused')
      !prlStickyMenuInner.classList.contains('prl-sticky-nav-inner-focused') 
      ? prlStickyMenuInner.classList.add('prl-sticky-nav-inner-focused')
      : undefined;
    }
  
    const menuLinkOnBlur = (event) => {
      // On blur, close menu
      event.currentTarget.removeAttribute('class');
      event.composedPath()[2].lastElementChild === event.currentTarget// If current link is last link in menu
      || event.composedPath()[2].firstElementChild === event.currentTarget // Or if current link is first link in menu
      ? prlStickyMenuInner.classList.remove('prl-sticky-nav-inner-focused') // Remove focus class 
      : null;
    }
  
    const menuOnMouseLeave = (event) => {
      // Close menu and remove focused stylings when mouse leaves menu
      focused = document.querySelector('.li-focused')
      focused
      ? focused.removeAttribute('class')
      : null
  
      prlStickyMenuInner.classList.remove('prl-sticky-nav-inner-focused') // Remove focus class 
    };
    prlStickyMenuInner.addEventListener('mouseleave', menuOnMouseLeave);
  
    // window listener toggles menu visibility on scroll
  
    window.onscroll = () => { toggleMenuVisibility(largeScreenSize) }
    const largeScreenSize = window.matchMedia("(min-width: 768px)")
  
    const toggleMenuVisibility = (largeScreenSize) => {
      const textStartPosition = document.querySelector('.mainContent__mainCol').offsetTop;
      const windowCoords = Math.abs(document.body.getBoundingClientRect().top);
      const distanceFromTop = textStartPosition - 200;
  
      // Detect if window is close to where text starts, side menu becomes visible
      if (windowCoords > distanceFromTop && largeScreenSize.matches){
        aside.classList.add('aside-visible');
        aside.classList.remove('aside-hidden');
        aside.setAttribute('aria-hidden', 'false');
        detectBrowserSession(); // ensures aside helper text appears once during browser session
      }
  
      // Detect if window object close to page top, menu disappears
      else if (windowCoords < distanceFromTop && largeScreenSize.matches) {
        aside.classList.add('aside-hidden');
        aside.classList.remove('aside-visible');
        aside.setAttribute('aria-hidden', 'true');
        // If menu is focused, remove focus and close menu
        prlStickyMenuInner.classList.remove('prl-sticky-nav-inner-focused'); // If a menu is expanded on focus interaction, close it when it disappears
        const focusedLink = document.querySelector('.li-focused');
        focusedLink ? focusedLink.classList = '' : null
      }
  
      // Remove aria-hidden attribute on small screen sizes
      else if (!largeScreenSize.matches) {
        aside.removeAttribute('aria-hidden');
      }
  
  
    }
  
    const detectBrowserSession = () => {
      const asideHelper = document.body.querySelector('.aside-helper');
      // hover helper text appears only once per browser session
      if(window.sessionStorage.getItem('first view') === null) {
        window.sessionStorage.setItem('first view', true) 
        asideHelper.classList.add('aside-appear');
      }
      else if (window.sessionStorage.getItem('first view') === true) {
        asideHelper.classList.remove('aside-appear');
      }
    }
    
    return createMenu()
  }

}());


// PROGRESS BAR FOR NEWS ARTICLES AND OTHER SELECTED PAGES


(function addProgressBar() {
  // Target pages to add progress bar
  // Currently the pages are "Web Components Demo" or any news article
  const page = document.querySelector('.web-components-demo') || document.querySelector('.newsArticle.depth-3');
  if(page) {
    const addProgressBarElement = () => {
      progressBar = document.createElement('div');
      progressBar.className = ('prl-progress-bar');
      progressBar.setAttribute('aria-hidden', 'true');
      progressBar.style.width = '0%';
      document.body.prepend(progressBar)
    }
  
    const calculateProgressBarProgression = () => {
      const progressBar = document.body.querySelector('.prl-progress-bar');
      
      if(document.querySelector('.newsArticle .prl-narrow-container')) {
        // This class is added in a custom component for news stories
        var pageParts = Array.from(document.querySelectorAll('.mainContent__mainCol h1, .prl-narrow-container h2, .prl-narrow-container h3, .prl-narrow-container p, .prl-narrow-container img'))
      } else {
        var pageParts = Array.from(document.querySelectorAll('.mainContent__mainCol h1, .mainContent__mainCol h2, .mainContent__mainCol h3, .mainContent__mainCol p, .mainContent__mainCol code, .mainContent__mainCol img'))
      }

      console.log('page progress bar sections', pageParts)
  
      let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.intersectionRatio === 1){
            pagePartsIndex = pageParts.indexOf(entry.target) + 1
            percentageScrolled = (pagePartsIndex / pageParts.length)*100
            progressBar.style.width = percentageScrolled + "%"
          }
        })
      }, {threshold: 1});
      
      pageParts.forEach(part => observer.observe(part))
    }
    
    window.onload = () => { addProgressBarElement(), calculateProgressBarProgression() }
    window.onresize = () => { calculateProgressBarProgression() }

  }
}());


// TEMP SCRIPT FOR 'RETURN TO WORK' PAGES

(function updateSideNavTitle() {
  signInOutSection = document.getElementsByTagName('body')
  // Check if body id element is 'prlsigninout'
  if (signInOutSection[0].id === 'prlsigninout'){
    // This function changes the sideNav <h2> title
    sideNav = document.getElementsByClassName('mainContent__sideNav');
    sideNav[0].children[0].textContent = "Resources";
    delete sideNav
  };
  delete signInOutSection
}());