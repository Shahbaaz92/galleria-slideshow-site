const slideShow = document.getElementById("slideshow");
const brandLogo = document.getElementById("brand-logo");
const gallery = document.getElementById("gallery");
const paintingSlide = document.getElementById("painting-slide");
const nextSlide = document.getElementById("next-slide");
const prevSlide = document.getElementById("prev-slide");
const paintingSlideSub = document.getElementById("painting-currentSlide");
const paintings = document.querySelectorAll(".painting");
console.log(window.innerWidth);
brandLogo.addEventListener("click", function () {
  gallery.classList.remove("hidden");
  paintingSlide.classList.add("hidden");
  slideShow.innerText = `Start Slideshow`;
  currentIndex = 0;
});

slideShow.addEventListener("click", function () {
  if (slideShow.innerText.includes("START")) {
    nextSlide.removeAttribute("disabled");
    prevSlide.removeAttribute("disabled");
    slideShow.innerText = `Stop Slideshow`;
    gallery.classList.add("hidden");
    paintingSlide.classList.remove("hidden");

    getData();
  } else {
    slideShow.innerText = `Start Slideshow`;
    nextSlide.setAttribute("disabled", true);
    prevSlide.setAttribute("disabled", true);
  }
});

let currentIndex = 0;

nextSlide.addEventListener("click", function () {
  currentIndex++;
  getData();
});
prevSlide.addEventListener("click", function () {
  currentIndex--;
  getData();
});

async function getData() {
  let response = await fetch("./data.json");
  let data = await response.json();

  for (let i = 0; i < data.length; i++) {
    let currentSLide = data[currentIndex];
    paintingSlideSub.innerHTML = `
    <section class="painting-info">
      <article class="the-artbox">
        <img
          src=${currentSLide.images.hero.large}
          alt="Starry night by Vincent"
          value =${currentSLide.name}
          class='artbox-image'
        />
        <button data-open-modal class="modal-button"  id='modal-button'>
          <img
            src="./assets/shared/icon-view-image.svg"
            alt="view image"
          />
          VIEW IMAGE
        </button>
        <dialog data-modal class='modal' data-close-modal>    
          <img src=${
            window.innerWidth < 725
              ? currentSLide.images.thumbnail
              : currentSLide.images.hero.small
          } >
          </dialog>   
      </article>
      <article class="the-artpainter">
        <div class="the-artName">
          <h1>${currentSLide.name}</h1>
          <p>${currentSLide.artist.name}</p>
        </div>
        <div class="the-painter">
          <img
            src=${currentSLide.artist.image}
            alt=${currentSLide.artist.name}
          />
        </div>
      </article>
      <article class="the-artdetails">
        <div>
          <span class="display">${currentSLide.year}</span>
          <p class="about-art">
            ${currentSLide.description}
          </p>
        </div>
        <a href=${currentSLide.source} class="art-source" target=_blank>
          go to source
        </a>
      </article>
    </section>
    <div class="slider-bar">
      <div class="slider"></div>
    </div>
    <div class="details-slide">
      <article class="current-painting">
        <h3>${currentSLide.name}</h3>
        <small>${currentSLide.artist.name}</small>
      </article>
    </div>
  `;

    const modalOpenBtn = document.querySelector("[data-open-modal]");
    const modal = document.querySelector("[data-modal]");
    const modalcloseBtn = document.querySelector("[data-close-modal]");
    modalOpenBtn.addEventListener("click", function () {
      modal.showModal();
    });
    modalcloseBtn.addEventListener("click", function () {
      modal.close();
    });
  }
}

for (let i = 0; i < paintings.length; i++) {
  paintings[i].addEventListener("click", function () {
    currentIndex = i;

    nextSlide.removeAttribute("disabled");
    prevSlide.removeAttribute("disabled");
    slideShow.innerText = `Stop Slideshow`;
    gallery.classList.add("hidden");
    paintingSlide.classList.remove("hidden");
    getData();
  });
}
