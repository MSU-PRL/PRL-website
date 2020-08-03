(function populateStickySideMenu() {
  var headerTags = document.getElementsByTagName('h2');
  var prlStickyMenuInner = document.querySelector('.prl-sticky-nav-inner');
  var ul = document.createElement('ul')
  prlStickyMenuInner.appendChild(ul)
  var prlStickyMenu = document.querySelector('.prl-sticky-nav-inner ul');
    
  var createMenuAnchors = () => {
    for (i of headerTags) {
    // Create menu links based on h2 tags in document
    var listItem = document.createElement('li');
    var div = document.createElement('div');
    var span = document.createElement('span');
    var anchor = document.createElement('a');
    var anchorAttributeName = i.textContent.toLowerCase().replace(/\s+/g, '-')
    div.textContent = i.textContent
    div.className = 'text'
    anchor.appendChild(div)
    anchor.appendChild(span)
    anchor.addEventListener('click', menuLinkClick);
    anchor.href = '#' + anchorAttributeName
    listItem.appendChild(anchor)
    prlStickyMenu.append(listItem)

    // Create corresponding h2 anchor targets in document body
    var anchorTarget = document.createElement('a')
    anchorTarget.id = anchorAttributeName;
    anchorTarget.name = anchorAttributeName;
    anchorTarget.textContent = i.textContent
    oldNode = i.childNodes[0]
    i.replaceChild(anchorTarget, oldNode)
  }
};
  
var menuLinkClick = (event) => {
  smoothScroll(event) // Use smooth scroll function
} 

var smoothScroll = (event) => {
  event.preventDefault();
  var targetId = event.currentTarget.getAttribute("href");
  var targetPosition = document.querySelector(targetId).offsetTop;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var duration = 1000;
  let start = null;

  var scrollAnimation = (timestamp) => {
    if (!start) {
      start = timestamp
    };
    var progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(scrollAnimation);
  }


  var easeInOutCubic = (t, b, c, d) => {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
  };
  
  return window.requestAnimationFrame(scrollAnimation);

} 
  
  window.onscroll = function(){appearUnderHeroImage()}
  var appearUnderHeroImage = () => {
    var textStartPosition = document.querySelector('article').firstElementChild.offsetTop;
    var windowCoords = document.body.getBoundingClientRect().top;
    var aside = document.getElementById('#prl-sticky-nav')
    var asideHelper = document.body.querySelector('.aside-helper');

    if (Math.abs(windowCoords) > textStartPosition - 200){
      aside.classList.add('aside-visible'); 
      if(window.sessionStorage.getItem('first view') === null) {
        window.sessionStorage.setItem('first view', true) 
        asideHelper.style.animationName = 'aside-helper-disappear' // hover helper text appears once per session
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

  return createMenuAnchors(), appearUnderHeroImage()

}());




  
// Todo:
// DONE Add <h2> with anchors
// DONE Style menu
// DONE autopopulate menu
// DONE <h2> autopopulate with anchor tag
// DONE Scroll between sections
// DONE Inject aside when reaching top of body content