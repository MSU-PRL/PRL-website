(function returnToTopButton() {
  const button = document.querySelector('.prl-back-to-top-btn')

  // ANIMATE SCROLL

  const buttonClick = (event) => {
    // Use smooth scroll function when clicking on link
    smoothScroll(event) 
  } 

  const smoothScroll = (event) => {
    // Smooth scroll function
    event.preventDefault();
    const targetPosition = document.documentElement.clientTop;
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
  button.addEventListener('click', buttonClick);

  // WINDOW LISTENER TOGGLES BUTTON VISBILITY ON SCROLL

  window.onload = () => { toggleButtonVisibility() }
  window.onscroll = () => { toggleButtonVisibility() }

  const toggleButtonVisibility = () => {
    const windowCoords = Math.abs(document.body.getBoundingClientRect().top);
    const distanceFromTop = 200;
    
    // If window is far enough from top, button becomes visible
    if (windowCoords > distanceFromTop){
      button.classList.remove('prl-back-to-top-btn-hide');
      button.classList.add('prl-back-to-top-btn-show');
    }
    // If window close to page top, button disappears
    else {
      button.classList.add('prl-back-to-top-btn-hide');
      button.classList.remove('prl-back-to-top-btn-show');

    }

  }

}());

