function addDotMenuHandler() {
  const viewportHeight = window.innerHeight;
  const dotMenu = document.getElementById('dot_menu');

  if (document.body.scrollTop > viewportHeight || document.documentElement.scrollTop > viewportHeight) {
    dotMenu.classList.add('dotstyle-menu--scrolled');
  }

  window.onscroll = function() {
    // console.log(dotMenu.getBoundingClientRect());
    if (document.body.scrollTop > viewportHeight || document.documentElement.scrollTop > viewportHeight) {
        dotMenu.classList.add('dotstyle-menu--scrolled');
    } else {
        dotMenu.classList.remove('dotstyle-menu--scrolled');
    }
  }
}

export default addDotMenuHandler;
