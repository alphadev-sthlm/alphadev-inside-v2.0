function arrowAnimation() {
  const topArrow = window.document.getElementById("cover-arrow");
  const bottomArrow = window.document.getElementById("job-arrow");

  if (topArrow) {
    animateTopArrow(topArrow);
  }

  if (bottomArrow) {
    animateBottomArrow(bottomArrow);
  }
}

function animateTopArrow(arrowElement) {
  arrowElement.classList.add('cover__arrow--anim');

  setTimeout(() => {
    arrowElement.classList.add('cover__arrow--bounce');
  }, 3000);

  new Waypoint({
    element: document.getElementById("cover"),
    handler: (direction) => {
      if (direction === "down") {
        arrowElement.classList.add("cover__arrow--remove");
      } else {
        arrowElement.classList.remove("cover__arrow--remove");
      }
    },
    offset: -window.innerHeight / 2
  });
}

function animateBottomArrow(arrowElement) {
  new Waypoint({
    element: document.getElementById("job-opportunity"),
    handler: (direction) => {
      if (direction === "down") {
        arrowElement.classList.add("job-opportunity__link-arrow--anim");
      } else {
        arrowElement.classList.remove("job-opportunity__link-arrow--anim");
      }
    },
    offset: window.innerHeight
  });
}

export default arrowAnimation;
