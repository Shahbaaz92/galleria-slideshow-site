const slideShow = document.getElementById("slideshow");

slideShow.addEventListener("click", function () {
  if (slideShow.innerText.includes("START")) {
    slideShow.innerText = `Stop Slideshow`;
  } else {
    slideShow.innerText = `Start Slideshow`;
  }
});
