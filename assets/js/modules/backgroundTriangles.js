function addParallaxEffect() {
  const triangleGreen = window.document.getElementById("bg-triangle-green");
  const triangleBlue = window.document.getElementById("bg-triangle-blue");
  const triangleBlueSmall = window.document.getElementById("bg-triangle-blue-small");
  // const triangleOrange = window.document.getElementById("bg-triangle-orange");


  addEventListener("scroll", () => {
    const positionGreen = window.scrollY / 20;
    const positionBlue = window.scrollY / 40;
    // const positionOrange = window.scrollY / 20;
    const positionBlueSmall = window.scrollY / 5;
    triangleGreen.style.top = `-${Math.round(positionGreen)}px`;
    triangleBlueSmall.style.bottom = `${Math.round(positionBlueSmall)}px`;
    triangleBlue.style.bottom = `${Math.round(positionBlue)}px`;
    // triangleOrange.style.bottom = `${Math.round(positionOrange)}px`; 
  });
}

function backgroundTriangles() {
  const triangleGreen = window.document.getElementById("bg-triangle-green");

  const isDisplayed = triangleGreen.offsetHeight > 0;
  if (isDisplayed) addParallaxEffect();  
}

export default backgroundTriangles;