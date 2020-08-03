(function populateStickySideMenu() {
  const headerTags = document.getElementsByTagName('h2');
  const prlStickyMenu = document.querySelector('.prl-sticky-nav-inner ul');
    
  const createMenuAnchors = () => {
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
  
const menuLinkClick = (event) => {
  smoothScroll(event) // Use smooth scroll function
} 

const smoothScroll = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const 
  console.log(targetId)
} 

  return createMenuAnchors()
  
}());


  
// Todo:
// DONE Add <h2> with anchors
// DONE Style menu
// DONE autopopulate menu
// DONE <h2> autopopulate with anchor tag
// Scroll between sections
// NEW FORK: Tentative: inject aside with JS, add hover when reaching component location
