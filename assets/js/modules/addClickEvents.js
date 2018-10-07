import toggleHidePeeps from "./toggleClasses"

function addClickEvents() {
  console.log("adding click events");
  addShowAllButton();
  addDisplayFamilyMemberDetails();
}

function addShowAllButton() {
  const arrow = document.getElementById('show-all-arrow');
  arrow.addEventListener('click', function (event) {
    if (Array.from(arrow.classList).indexOf('arrow--active') === -1) {
      arrow.classList.add("arrow--active");
      setTimeout(function () {
        toggleHidePeeps(false);
      }, 300);
    } else {
      arrow.classList.remove("arrow--active");
      setTimeout(function () {
        toggleHidePeeps(true);
      }, 300);
      document.getElementById('family').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    }
  });
}

function addDisplayFamilyMemberDetails() {
  let allMembers = Array.from(document.getElementsByClassName('family-member'));
  allMembers.forEach(function (member) {
    member.addEventListener('click', function (event) {
      Array.from(document.getElementsByClassName('details-clone')).forEach(function (clone) {
        clone.parentNode.removeChild(clone);
      });

      // const allDetails = Array.from(document.getElementsByClassName('family-member-details'));
      // allDetails.forEach(function (detail) {
      //   detail.classList.add('family-member-details--hide');
      // });
      let original = member.getElementsByClassName('family-member-details').item(0);

      if (original.classList.contains('active')) {
        original.classList.remove('active');
      } else {
        original.classList.add('active');
        const clone = original.cloneNode(true);

        clone.classList.remove('family-member-details--hide');
        clone.classList.add('details-clone');
        member.parentNode.insertBefore(clone, member.nextSibling);
      }
    })
  })
}


export default addClickEvents;