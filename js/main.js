function setHeight() {
  var tm_imgHeight = document.querySelector(".tm_img").offsetHeight;
  document.querySelectorAll(".slick-arrow")[0].style.top =
    tm_imgHeight / 2 + "px";
  document.querySelectorAll(".slick-arrow")[1].style.top =
    tm_imgHeight / 2 + "px";
}

window.onresize = setHeight;
window.onload = setHeight;
