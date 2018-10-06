import toggleHidePeeps from "./toggleClasses"

function addClickEvents() {
  console.log("adding click events");
  addShowAllButton();
}

function addShowAllButton() {
  const arrow = document.getElementById('show-all-arrow');
  arrow.addEventListener('click', function (event) {
    if (Array.from(arrow.classList).indexOf('arrow--active') === -1) {
      arrow.classList.add("arrow--active");
      toggleHidePeeps(false);
    } else {
      arrow.classList.remove("arrow--active");
      toggleHidePeeps(true);
      document.getElementById('family').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    }
  });
}


export default addClickEvents;