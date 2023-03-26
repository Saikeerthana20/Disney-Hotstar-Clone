let movies = [
  {
    name: "falcon and the winter solider",
    des:
      "The Falcon and the Winter Soldier[a] is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on Marvel Comics featuring the characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.",
    image: "slider 2.PNG"
  },
  {
    name: "loki",
    des:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta fugiat laudantium culpa sapiente nesciunt rem ratione ut quae mollitia! Non eos voluptates beatae quos minus porro ipsa doloremque repellendus neque.",
    image: "slider 1.PNG"
  },
  {
    name: "wanda vision",
    des:
      "WandaVision is an American television miniseries created by Jac Schaeffer for the streaming service Disney+, based on Marvel Comics featuring the characters Wanda Maximoff / Scarlet Witch and Vision.",
    image: "slider 3.PNG"
  },
  {
    name: "raya and the last dragon",
    des:
      "Raya and the Last Dragon (/ˈraɪ.ə/ RYE-ə) is a 2021 American computer-animated fantasy action-adventure film produced by Walt Disney Animation Studios and distributed by Walt Disney Studios Motion Pictures.",
    image: "slider 4.PNG"
  },
  {
    name: "luca",
    des:
      "Luca is a 2021 American computer-animated coming-of-age fantasy film produced by Pixar Animation Studios for Walt Disney Pictures.",
    image: "slider 5.PNG"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const creatSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  creatSlide();
}
setInterval(() => {
  creatSlide();
}, 3000);

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
