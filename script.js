const slideShow = document.getElementById("slideshow");
const brandLogo = document.getElementById("brand-logo");
const gallery = document.getElementById("gallery");
const paintingSlide = document.getElementById("painting-slide");

brandLogo.addEventListener("click", function () {
  gallery.classList.remove("hidden");
  paintingSlide.classList.add("hidden");
  slideShow.innerText = `Start Slideshow`;
});

slideShow.addEventListener("click", function () {
  if (slideShow.innerText.includes("START")) {
    slideShow.innerText = `Stop Slideshow`;
    gallery.classList.add("hidden");
    paintingSlide.classList.remove("hidden");

    getData();
  } else {
    slideShow.innerText = `Start Slideshow`;
  }
});

async function getData() {
  let response = await fetch("./data.json");
  let data = await response.json();
  console.log(data);

  let currentIndex = 0;

  for (let i = 0; i < data.length; i++) {
    let currentSLide = data[currentIndex];
    console.log(currentSLide.name);

    paintingSlide.innerHTML = `
    <section class="painting-info">
      <article class="the-artbox">
        <img
          src=${currentSLide.images.hero.large}
          alt="Starry night by Vincent"
          value =${currentSLide.name}
        />
        <button class="modal-button">
          <img
            src="./assets/shared/icon-view-image.svg"
            alt="view image"
          />
          VIEW IMAGE
        </button>
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
        <a href=${currentSLide.source} class="art-source">
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
      <article class="buttons-slide">
        <button class="prev-slide btn" id='prev-slide'>
          <img src="./assets/shared/icon-back-button.svg" alt="previous slide" />
        </button>
        <button class="next-slide btn" id='next-slide'>
          <img src="./assets/shared/icon-next-button.svg" alt="next slide" />
        </button>
      </article>
    </div>;
  `;
  }
}
