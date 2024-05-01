try {
  const showButton = document.querySelector(".show-button");
  const hide = document.getElementById("hide");
  const remove = document.getElementById("remove-menu");
  const main = document.getElementById("main-index");
  showButton.addEventListener("click", () => {
    hide.style.display = "flex";
    showButton.style.display = "none";
    main.style.display = "none";
  });
  remove.addEventListener("click", () => {
    hide.style.display = "none";
    showButton.style.display = "block";
    main.style.display = "block";
  });
} catch (error) {
  alert(error);
}
function createImage() {
  const pictureMain = document.getElementById("photos");
  const photo = [];
  // for (let i = 18;)
  const range = (start, end, step) =>
    Array.from(
      { length: (end - start) / step + 1 },
      (_, i) => start + i * step
    );
  for (num of range(18, 67, 1)) {
    photo.push(`IMG-20240426-WA00${num}.jpg`);
  }
  // console.log(photo);
  let element;
  let image;
  let download;
  let logo;
  let title;
  let element2;
  let link;
  let para;
  let down;
  let text;
  photo.map((source) => {
    element = document.createElement("div");
    pictureMain.appendChild(element);
    element2 = document.createElement("div");
    element2.id = "profile";
    link = document.createElement("a");
    link.href = "about.html";
    element2.appendChild(link);
    logo = document.createElement("img");
    logo.src = "./images/images_styling/pas.jpg";
    logo.setAttribute("width", "30");
    logo.setAttribute("height", "auto");
    logo.alt = "logo";
    link.appendChild(logo);
    title = document.createElement("p");
    title.innerText = "Mtesh Jey";
    link.appendChild(title);
    element.appendChild(element2);
    image = document.createElement("img");
    image.src = `./images/images_page/${source}`;
    image.setAttribute("alt", "photo");
    image.setAttribute("id", `./images/images_page/${source}`);
    image.setAttribute("class", "img");

    if (photo.indexOf(source) < 4) {
      element.className = "Food";
      image.setAttribute("title", "Food");
    } else if (photo.indexOf(source) < 10 && photo.indexOf(source) > 3) {
      element.className = "Nature";
      image.setAttribute("title", "Nature");
    } else if (photo.indexOf(source) < 39 && photo.indexOf(source) > 9) {
      element.className = "Adventure";
      image.setAttribute("title", "Adventure");
    } else if (photo.indexOf(source) < 44 && photo.indexOf(source) > 38) {
      element.className = "Awards";
      image.setAttribute("title", "Awards");
    } else if (photo.indexOf(source) < 49 && photo.indexOf(source) > 43) {
      element.className = "Happiness";
      image.setAttribute("title", "Family-Hapiness");
    } else {
      element.className = "Latest-pic";
      image.setAttribute("title", "Latest-pic");
    }

    element.appendChild(image);
    download = document.createElement("a");
    download.setAttribute("href", `./images/images_page/${source}`);
    download.setAttribute("download", "Photo by Mtesh Jey");
    text = document.createElement("p");
    text.innerText = `Download`;
    download.appendChild(text);
    down = document.createElement("img");
    down.src = "./images/images_styling/down.png";
    down.alt = "download-icon";
    download.appendChild(down);
    para = document.createElement("div");
    para.id = "para";
    para.appendChild(download);
    element.appendChild(para);
  });
}
createImage();

let button = document.getElementById("top");
/* on scroll display button */
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};
// click button scroll to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  console.log("clicked");
  button.style.display = "none";
}
// filtering

//capture parent
const element = document.getElementById("photos");
// capture clicks
const hotDish = document.getElementById("food");
const ture = document.getElementById("nature");
const venture = document.getElementById("adventure");
const happ = document.getElementById("happiness");
const awad = document.getElementById("awards");
const latest = document.getElementById("latest-pic");
// const hotDish = document.getElementById('food')

// all pics
let food = document.querySelectorAll(".Food");
let nature = document.querySelectorAll(".Nature");
let adventure = document.querySelectorAll(".Adventure");
let awards = document.querySelectorAll(".Awards");
let happiness = document.querySelectorAll(".Happiness");
let latestPic = document.querySelectorAll(".Latest-pic");
const buttn = document.getElementById("butHome");
function fud() {
  for (const pic of food) {
    pic.style.display = "block";
  }
  for (const natue of nature) {
    natue.style.display = "none";
  }
  for (const natue of adventure) {
    natue.style.display = "none";
  }
  for (const natue of awards) {
    natue.style.display = "none";
  }
  for (const natue of latestPic) {
    natue.style.display = "none";
  }
  for (const natue of happiness) {
    natue.style.display = "none";
  }
  buttn.style.display = "block";
}
function natur() {
  for (const pic of nature) {
    pic.style.display = "block";
  }
  for (const natue of food) {
    natue.style.display = "none";
  }
  for (const natue of adventure) {
    natue.style.display = "none";
  }
  for (const natue of awards) {
    natue.style.display = "none";
  }
  for (const natue of latestPic) {
    natue.style.display = "none";
  }
  for (const natue of happiness) {
    natue.style.display = "none";
  }
  buttn.style.display = "block";
}
function adventur() {
  for (const pic of adventure) {
    pic.style.display = "block";
  }
  for (const natue of nature) {
    natue.style.display = "none";
  }
  for (const natue of food) {
    natue.style.display = "none";
  }
  for (const natue of awards) {
    natue.style.display = "none";
  }
  for (const natue of latestPic) {
    natue.style.display = "none";
  }
  for (const natue of happiness) {
    natue.style.display = "none";
  }
  buttn.style.display = "block";
}
function award() {
  for (const pic of awards) {
    pic.style.display = "block";
  }
  for (const natue of nature) {
    natue.style.display = "none";
  }
  for (const natue of adventure) {
    natue.style.display = "none";
  }
  for (const natue of food) {
    natue.style.display = "none";
  }
  for (const natue of latestPic) {
    natue.style.display = "none";
  }
  for (const natue of happiness) {
    natue.style.display = "none";
  }
  buttn.style.display = "block";
}
function happines() {
  for (const pic of happiness) {
    pic.style.display = "block";
  }
  for (const natue of nature) {
    natue.style.display = "none";
  }
  for (const natue of adventure) {
    natue.style.display = "none";
  }
  for (const natue of awards) {
    natue.style.display = "none";
  }
  for (const natue of latestPic) {
    natue.style.display = "none";
  }
  for (const natue of food) {
    natue.style.display = "none";
  }
  buttn.style.display = "block";
}
function latestPc() {
  for (const pic of latestPic) {
    pic.style.display = "block";
  }

  for (const natue of nature) {
    natue.style.display = "none";
  }
  for (const natue of adventure) {
    natue.style.display = "none";
  }
  for (const natue of awards) {
    natue.style.display = "none";
  }
  for (const natue of food) {
    natue.style.display = "none";
  }
  for (const natue of happiness) {
    natue.style.display = "none";
  }
  buttn.style.display = "block";
}

function btn() {
  for (const pic of latestPic) {
    pic.style.display = "block";
  }

  for (const natue of nature) {
    natue.style.display = "block";
  }
  for (const natue of adventure) {
    natue.style.display = "block";
  }
  for (const natue of awards) {
    natue.style.display = "block";
  }
  for (const natue of food) {
    natue.style.display = "block";
  }
  for (const natue of happiness) {
    natue.style.display = "block";
  }
  buttn.style.display = "none";
}
function btnColor() {
  setInterval(() => {
    buttn.style.color = "white";
    buttn.style.backgroundColor = "rgb(4, 59, 85)";
  }, 50);
  setInterval(() => {
    buttn.style.color = "aqua";
    buttn.style.backgroundColor = "#333";
  }, 100);
  setInterval(() => {
    buttn.style.color = "rgb(246, 247, 199)";
    buttn.style.backgroundColor = "rgb(19, 196, 137)";
  }, 200);
  setInterval(() => {
    buttn.style.color = "yellow";
    buttn.style.backgroundColor = "rgb(168, 16, 161)";
  }, 300);
  setInterval(() => {
    buttn.style.color = "rgb(255, 38, 0)";
    buttn.style.backgroundColor = "rgb(0, 128, 28)";
  }, 350);
}
btnColor();
