addProgressBarElement = () => {
  progressBar = document.createElement('div');
  progressBar.className = ('prl-progress-bar');
  progressBar.setAttribute('aria-hidden', 'true');
  document.body.prepend(progressBar)
}

// Approach 1. Scroll method (currently calculates entire)
// window.onload = () => { addProgressBarElement() }
// window.onscroll = () => { progressBarProgression() }
// window.onresize = () => { progressBarProgression() }

// progressBarProgression = (event) => {
//   progressBar = document.body.querySelector('.prl-progress-bar');
//   pixelsScrolled = window.scrollY;
//   totalDocumentHeight = document.body.scrollHeight;
//   viewportHeight = window.innerHeight
//   currentScrollPosition = (pixelsScrolled / (totalDocumentHeight - viewportHeight))*100
//   progressBar.style.width = currentScrollPosition + "%"
// }

// Approach 2. Intersection observer method
calculateProgressBarProgression = () => {
  const progressBar = document.body.querySelector('.prl-progress-bar');
  const articleParts = Array.from(document.querySelectorAll('article > .prl-narrow-container > *'))
  console.log(articleParts)

  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.intersectionRatio === 1){
        articlePartsIndex = articleParts.indexOf(entry.target) + 1
        percentageScrolled = (articlePartsIndex / articleParts.length)*100
        progressBar.style.width = percentageScrolled + "%"
      }
    })
  }, {threshold: 1});
  
  articleParts.forEach(part => observer.observe(part))
}

window.onload = () => { addProgressBarElement(), calculateProgressBarProgression() }
window.onresize = () => { calculateProgressBarProgression() }

   
// Todo:
// DONE Listen to page scroll
// DONE Determine document position on page scroll
// DONE Add progress bar to document on page load
// DONE Style progress bar in CSS
// DONE Change progress bar width in relation to doc
// DONE Add code to Codepen
