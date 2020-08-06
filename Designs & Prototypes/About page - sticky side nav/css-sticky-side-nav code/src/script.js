(function populateStickySideMenu() {
  const headerTags = document.getElementsByTagName('h2');
  const prlStickyMenuInner = document.querySelector('.prl-sticky-nav-inner');
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
      const anchorAttributeName = i.textContent.toLowerCase().replace(/\s+/g, '-')

      listItem.addEventListener('focusin', menuLinkOnFocus);
      listItem.addEventListener('focusout', menuLinkOnBlur);
      div.textContent = i.textContent
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
      anchorTarget.textContent = i.textContent
      oldNode = i.childNodes[0]
      i.replaceChild(anchorTarget, oldNode)
    }
  };
  
  // ANIMATE SCROLL

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

  // MENU LISTENERS

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
    event.path[2].lastElementChild === event.currentTarget// If current link is last link in menu
    || event.path[2].firstElementChild === event.currentTarget // Or if current link is first link in menu
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

  // WINDOW LISTENER TOGGLES MENU VISBILITY

  window.onscroll = () => { toggleMenuVisibility() }

  const toggleMenuVisibility = () => {
    const textStartPosition = document.querySelector('article').firstElementChild.offsetTop;
    const windowCoords = document.body.getBoundingClientRect().top;
    const aside = document.getElementById('prl-sticky-nav')
    // Detect if window is close to where text starts, side menu becomes visible
    if (Math.abs(windowCoords) > textStartPosition - 200){
      aside.classList.add('aside-visible');
      aside.classList.remove('aside-hidden');
      aside.setAttribute('aria-hidden', false)
      detectBrowserSession(); // ensures aside helper text appears once during browser session
    }
    // Detect if window object close to page top, menu disappears
    else if (Math.abs(windowCoords) < textStartPosition - 200) {
      aside.classList.add('aside-hidden');
      aside.classList.remove('aside-visible');
      aside.setAttribute('aria-hidden', true);
      // If menu is focused, remove focus and close menu
      prlStickyMenuInner.classList.remove('prl-sticky-nav-inner-focused'); // If a menu is expanded on focus interaction, close it when it disappears
      const focusedLink = document.querySelector('.li-focused');
      focusedLink ? focusedLink.classList = '' : null
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

  return createMenu(), toggleMenuVisibility()

}());

   
// Todo:
// DONE Add <h2> with anchors
// DONE Style menu
// DONE autopopulate menu
// DONE <h2> autopopulate with anchor tag
// DONE Scroll between sections
// DONE Inject aside when reaching top of body content
// DONE accessibility: added aria-hidden property 
// DONE accesibility: added menu expan on focus interaction
/* Remove visibility on disappear and on mobile screens,
  otherwise component remains interactive on touchscreens */
