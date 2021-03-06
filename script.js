// Buttons
const textFlipsBtn = document.createElement("button");
textFlipsBtn.innerHTML = "display20Flips()";
const imageFlipsBtn = document.createElement("button");
imageFlipsBtn.innerHTML = "display20Images()";
const resetBtn = document.createElement("button");
resetBtn.innerHTML = "Reset Page";
document.body.appendChild(textFlipsBtn);
document.body.appendChild(imageFlipsBtn);
document.body.appendChild(resetBtn);
// DOM Shortcuts
const parent = document.body
// Object with Embedded DOM Mutations
let coin = {
  state: 0,
  flip: function () {
    if (Math.random() > 0.5) {
      this.state = 1;
    } else {
      this.state = 0;
    }
  },
  toString: function () {
    let string = document.createElement("li");
    if (this.state === 1) {
      string.innerHTML = "Heads";
      parent.appendChild(string);
    } else {
      string.innerHTML = "Tails";
      parent.appendChild(string);
    }
    return string;
  },
  toHTML: function () {
    let image = document.createElement("img");
    image.width = 144;
    image.height = 144;
    if (this.state === 1) {
      image.src = "./images/heads.jpg";
      image.alt = "Heads";
      parent.appendChild(image);
    } else {
      image.src = "./images/tails.jpg";
      image.alt = "Tails";
      parent.appendChild(image);
    }
    return image;
  },
};
// Named Functions
function display20Flips() {
  for (i = 0; i < 20; i++) {
    coin.flip();
    coin.toString();
  }
}
function display20Images() {
  for (i = 0; i < 20; i++) {
    coin.flip();
    coin.toHTML();
  }
}
function resetPage() {
  let textFlipsAll = document.querySelectorAll("li");
  let imageFlipsAll = document.querySelectorAll("img");
  for (i = 0; i < textFlipsAll.length; i++) {
    textFlipsAll[i].remove();
  }
  for (j = 0; j < imageFlipsAll.length; j++) {
    imageFlipsAll[j].remove();
  }
}
// User Invoked Functions
textFlipsBtn.addEventListener("click", function () {
  return display20Flips();
});
imageFlipsBtn.addEventListener("click", function () {
  return display20Images();
});
resetBtn.addEventListener("click", function () {
  return resetPage();
});
