const emojies = [
  '<i class="bxr  bx-dog-alt"></i>',
  '<i class="bxr  bx-dog-alt"></i>',

  '<i class="bxr  bx-bitcoin"></i>',
  '<i class="bxr  bx-bitcoin"></i>',

  '<i class="bxr  bx-football"></i>',
  '<i class="bxr  bx-football"></i>',

  '<i class="bxr  bx-happy-heart-eyes"></i>',
  '<i class="bxr  bx-happy-heart-eyes"></i>',

  '<i class="bxr  bx-happy-alt"></i>',
  '<i class="bxr  bx-happy-alt"></i>',

  '<i class="bxr  bx-fish-alt"></i>',
  '<i class="bxr  bx-fish-alt"></i>',

  '<i class="bxr  bx-heart-circle"></i>',
  '<i class="bxr  bx-heart-circle"></i>',

  '<i class="bxr  bx-cool"></i>',
  '<i class="bxr  bx-cool"></i>',
];

const shuffled = emojies.sort(() => Math.random() - 0.5);

shuffled.forEach((element, index) => {
  let box = document.createElement("div");
  box.classList = "item";
  box.innerHTML = shuffled[index];

  box.onclick = function () {
    this.classList.add("box-open");

    let allOpenBoxes = document.querySelectorAll(".box-open");

    setTimeout(() => {
      if (allOpenBoxes.length === 2) {
        if (allOpenBoxes[0].innerHTML === allOpenBoxes[1].innerHTML) {
          allOpenBoxes[0].classList.add("box-match");
          allOpenBoxes[1].classList.add("box-match");

          allOpenBoxes[0].classList.remove("box-open");
          allOpenBoxes[1].classList.remove("box-open");

          if (
            document.querySelectorAll(".box-match").length === shuffled.length
          ) {
            document.querySelector("h4").style.opacity = 1;
          }
        } else {
          allOpenBoxes[1].classList.remove("box-open");
          allOpenBoxes[0].classList.remove("box-open");
        }
      }
    }, 600);
  };

  document.querySelector(".board").appendChild(box);
});
