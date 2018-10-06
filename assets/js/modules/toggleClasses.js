function toggleHidePeeps(hide) {
  Array.from(document.getElementsByClassName('family-member')).forEach(function (trashMonkey, i) {
    if (hide) {
      if (i > 3) {
        trashMonkey.classList.add('family-member--hide');
      }
    } else {
      trashMonkey.classList.remove('family-member--hide');
    }
  });
}

export default toggleHidePeeps