function arrowAnimation() {
  const arrow = window.document.getElementById("cover-arrow");
  arrow.classList.add('cover__arrow--anim');

  setTimeout(() => {
    arrow.classList.add('cover__arrow--bounce');
  }, 3000);

  window.document.addEventListener("scroll", () => {
    const animationPosition = window.innerHeight / 2;

    if (window.scrollY > animationPosition) {
      arrow.classList.add("cover__arrow--remove");
    } else {
      arrow.classList.remove("cover__arrow--remove");
    }
  });
}

export default arrowAnimation