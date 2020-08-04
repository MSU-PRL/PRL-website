(function populateStickySideMenu() {
  const headerTags = document.getElementsByTagName('h2');
  const prlStickyMenuInner = document.querySelector('.prl-sticky-nav-inner');
  const ul = document.createElement('ul')
  prlStickyMenuInner.appendChild(ul)
  const prlStickyMenu = document.querySelector('.prl-sticky-nav-inner ul');
    
  const createMenuAnchors = () => {
    for (i of headerTags) {
    // Create menu links based on h2 tags in document
    const listItem = document.createElement('li');
    const div = document.createElement('div');
    const span = document.createElement('span');
    const anchor = document.createElement('a');
    const anchorAttributeName = i.textContent.toLowerCase().replace(/\s+/g, '-')
    div.textContent = i.textContent
    div.className = 'text'
    anchor.appendChild(div)
    anchor.appendChild(span)
    anchor.addEventListener('click', menuLinkClick);
    anchor.href = '#' + anchorAttributeName
    listItem.appendChild(anchor)
    prlStickyMenu.append(listItem)

    // Create corresponding h2 anchor targets in document body
    const anchorTarget = document.createElement('a')
    anchorTarget.id = anchorAttributeName;
    anchorTarget.name = anchorAttributeName;
    anchorTarget.textContent = i.textContent
    oldNode = i.childNodes[0]
    i.replaceChild(anchorTarget, oldNode)
  }
};
  
const menuLinkClick = (event) => {
  smoothScroll(event) // Use smooth scroll function when clicking on link
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
  // From here on 
  window.onscroll = function(){toggleSideMenuVisibility()}
  const toggleSideMenuVisibility = () => {
    const textStartPosition = document.querySelector('article').firstElementChild.offsetTop;
    const windowCoords = document.body.getBoundingClientRect().top;
    const aside = document.getElementById('#prl-sticky-nav')
    const asideHelper = document.body.querySelector('.aside-helper');

    if (Math.abs(windowCoords) > textStartPosition - 200){
      // Detect if window is close to where text starts, side menu becomes visible
      aside.classList.add('aside-visible'); 
      if(window.sessionStorage.getItem('first view') === null) {
        // hover helper text appears only once per browser session
        window.sessionStorage.setItem('first view', true) 
        asideHelper.style.animationName = 'aside-helper-disappear'
      }
      else if (window.sessionStorage.getItem('first view') === true) {
        asideHelper.removeAttribute("style");
      }
    }
    else if (Math.abs(windowCoords) < textStartPosition - 200) {
      aside.classList.remove('aside-visible')
      aside.removeAttribute("class")
    }
  }

  return createMenuAnchors(), toggleSideMenuVisibility()

}());




  
// Todo:
// DONE Add <h2> with anchors
// DONE Style menu
// DONE autopopulate menu
// DONE <h2> autopopulate with anchor tag
// DONE Scroll between sections
// DONE Inject aside when reaching top of body content