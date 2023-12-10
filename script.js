const slideShow = document.getElementById("slideshow");
const brandLogo = document.getElementById("brand-logo");
const gallery = document.getElementById("gallery");

brandLogo.addEventListener("click", function () {
  gallery.classList.remove("hidden");
  slideShow.innerText = `Start Slideshow`;
});

slideShow.addEventListener("click", function () {
  if (slideShow.innerText.includes("START")) {
    slideShow.innerText = `Stop Slideshow`;
    gallery.classList.add("hidden");
  } else {
    slideShow.innerText = `Start Slideshow`;
  }
});

async function getData() {
  let response = await fetch("./data.json");
  let data = await response.json();
  console.log(data);

  data.forEach((element) => {
    console.log(element.name);
  });

  // <div class="painting-slide">
  //   <section class="painting-info">
  //     <article class="the-artbox">
  //       <img
  //         src="Assets/assets/starry-night/hero-large.jpg"
  //         alt="Starry night by Vincent"
  //       />
  //       <button class="modal-button">
  //         <img
  //           src="Assets/assets/shared/icon-view-image.svg"
  //           alt="view image"
  //         />
  //         VIEW IMAGE
  //       </button>
  //     </article>
  //     <article class="the-artpainter">
  //       <div class="the-artName">
  //         <h1>Starry Night</h1>
  //         <p>Vincent van Gogh</p>
  //       </div>
  //       <div class="the-painter">
  //         <img
  //           src="Assets/assets/starry-night/artist.jpg"
  //           alt="Vincent van Gogh"
  //         />
  //       </div>
  //     </article>
  //     <article class="the-artdetails">
  //       <div>
  //         <span class="display">1889</span>
  //         <p class="about-art">
  //           Although The Starry Night was painted during the day in Van Gogh's
  //           ground-floor studio, it would be inaccurate to state that the
  //           picture was painted from memory. The view has been identified as the
  //           one from his bedroom window, facing east, a view which Van Gogh
  //           painted variations of no fewer than twenty-one times, including The
  //           Starry Night. "Through the iron-barred window," he wrote to his
  //           brother, Theo, around 23 May 1889, "I can see an enclosed square of
  //           wheat ... above which, in the morning, I watch the sun rise in all
  //           its glory."
  //         </p>
  //       </div>
  //       <a href="#" class="art-source">
  //         go to source
  //       </a>
  //     </article>
  //   </section>
  //   <div class="slider-bar">
  //     <div class="slider"></div>
  //   </div>
  //   <div class="details-slide">
  //     <article class="current-painting">
  //       <h3>Starry Night</h3>
  //       <small>Vincent van Gogh</small>
  //     </article>
  //     <article class="buttons-slide">
  //       <button class="prev-slide btn">
  //         <img src="Assets/assets/shared/icon-back-button.svg" alt="" />
  //       </button>
  //       <button class="next-slide btn">
  //         <img src="Assets/assets/shared/icon-next-button.svg" alt="" />
  //       </button>
  //     </article>
  //   </div>
  // </div>;
}

getData();
