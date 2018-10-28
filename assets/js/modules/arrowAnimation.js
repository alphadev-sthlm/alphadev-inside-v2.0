function arrowAnimation() {
  const arrow = window.document.getElementById("cover-arrow");
  arrow.classList.add('cover__arrow--anim');

  setTimeout(() => {
    arrow.classList.add('cover__arrow--bounce');
  }, 3000);

  new Waypoint({
    element: document.getElementById("cover"),
    handler: (direction) => {
      if (direction === "down") {
        arrow.classList.add("cover__arrow--remove");
      } else {
        arrow.classList.remove("cover__arrow--remove");
      }
    },
    offset: -window.innerHeight / 2
  });
}

export default arrowAnimation;