function addDotMenuHandler() {
  const anchorProps = {};
  const dotMenuListItems = document.getElementsByClassName("dotstyle-menu__list-item");
  const sections = document.getElementsByClassName("section");
  const viewportHeight = window.innerHeight;
  const dotMenu = document.getElementById('dot_menu');

  setupSmoothScrolling();
  setupDotmenuTriggers();


  function setupDotmenuTriggers() {
    // show and hide dotmenu via waypoint triggers
    new Waypoint({
      element: document.getElementById("one_of_us"),
      handler: (direction) => {
        if (direction === "down") {
          dotMenu.classList.add('dotstyle-menu--scrolled');
        } else {
          dotMenu.classList.remove('dotstyle-menu--scrolled');
        }
      },
      offset: window.innerHeight / 2
    });

    // change current class of dotmenu when scrolling through sections via
    // waypoint triggers
    Array.prototype.slice.call(sections).forEach((listItem) => {
      const id = listItem.id;
      const anchorListItem = document.querySelector(`[data-hash='#${id}']`);

      // down waypoint trigger
      new Waypoint({
        element: listItem,
        handler: function(direction) {
          if (direction === "down") {
            history.pushState(null, null, `#${id}`);
            toggleCurrentClass();
          }
        },
        offset: window.innerHeight / 2
      });

      // up waypoint trigger
      new Waypoint({
        element: listItem,
        handler: function(direction) {
          if (direction === "up") {
            history.pushState(null, null, `#${id}`);
            toggleCurrentClass();
          }
        },
        offset: "-5%"
      });
    });
  }

  function setupSmoothScrolling() {
    const scroll = new SmoothScroll('a[href*="#"]');
    document.addEventListener('scrollStop', () => {
      toggleCurrentClass();
    }, false);
  }

  function toggleCurrentClass() {
    const hash = window.location.hash;

    [].slice.call(dotMenuListItems).forEach((listItem) => {
      if (hash === listItem.dataset.hash) {
        listItem.classList.add("dotstyle-menu__list-item--current");
        return;
      }

      listItem.classList.remove("dotstyle-menu__list-item--current");
    })
  }
}

export default addDotMenuHandler;
