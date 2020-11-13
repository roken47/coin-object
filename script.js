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
      document.body.appendChild(string);
    } else {
      string.innerHTML = "Tails";
      document.body.appendChild(string);
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
      document.body.appendChild(image);
    } else {
      image.src = "./images/tails.jpg";
      image.alt = "Tails";
      document.body.appendChild(image);
    }
    return image;
  },
};
let textFlipsBtn = document.createElement("button");
textFlipsBtn.innerHTML = "display20Flips()";
let imageFlipsBtn = document.createElement("button");
imageFlipsBtn.innerHTML = "display20Images()";
document.body.appendChild(textFlipsBtn);
document.body.appendChild(imageFlipsBtn);

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
textFlipsBtn.addEventListener("click", function () {
  return display20Flips();
});
imageFlipsBtn.addEventListener("click", function () {
  return display20Images();
});
