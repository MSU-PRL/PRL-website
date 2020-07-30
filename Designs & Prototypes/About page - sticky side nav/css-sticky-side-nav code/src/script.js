(function populateStickySideMenu() {
  const h2Tags = document.getElementsByTagName('h2')
  const prlStickyMenu = document.querySelector('.prl-sticky-nav-inner ul')
  const h2Titles = () => {
    for (i of h2Tags) {
      // Create menu links
      var listItem = document.createElement('li');
      var div = document.createElement('div');
      var span = document.createElement('span');
      var anchor = document.createElement('a');
      var anchorAttributeName = i.textContent.toLowerCase().replace(/\s+/g, '-')
      div.textContent = i.textContent
      div.className = 'text'
      anchor.appendChild(div)
      anchor.appendChild(span)
      anchor.href = '#' + anchorAttributeName
      listItem.appendChild(anchor)
      prlStickyMenu.append(listItem)
  
      // Create corresponding h2 anchor targets
      var anchorTarget = document.createElement('a')
      anchorTarget.id = anchorAttributeName;
      anchorTarget.name = anchorAttributeName;
      anchorTarget.textContent = i.textContent
      oldNode = i.childNodes[0]
      i.replaceChild(anchorTarget, oldNode)
    }
  }
  return h2Titles()
}());


  
// Todo:
// DONE Add <h2> with anchors
// DONE Style menu
// DONE JS autopopulate menu feature
// Scroll between sections
// NEW FORK: Tentative: inject aside with JS, inject anchors by scrubbing <h2> text nodes
