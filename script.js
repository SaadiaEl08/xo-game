let div = document.getElementById("container");
let controllerFc = document.querySelector("#controller").firstElementChild;
let container = document.querySelector(".container");
let oneplayer = document.querySelector("#oneplayer");
let twoplayers = document.querySelector("#twoplayes");
let restart = document.querySelector("#restart");
let mode;
let content = [];

function modeRegle() {
  scrollTo({ top: 400, left: 0, behavior: "smooth" });
  oneplayer.classList.add("disabled");
  twoplayers.classList.add("disabled");
  restart.classList.remove("hidden");
  container.classList.remove("disabled");
}
oneplayer.onclick = function () {
  mode = "oneplayer";
  modeRegle();
};
twoplayers.onclick = function () {
  mode = "twoplayers";
  modeRegle();
};
let i = 1;
div.addEventListener("click", (e) => {
  if (e.target.innerText == "" && mode == "twoplayers") {
    if (i % 2 == 0) {
      e.target.innerText = "X";
      controllerFc.innerText = "O";
      contentFill();
      i++;
    } else {
      e.target.innerText = "O";
      controllerFc.innerText = "X";
      contentFill();
      i++;
    }
  } else if (e.target.innerText == "" && mode == "oneplayer") {
    e.target.innerText = "X";
    controllerFc.innerText = "X";
    i++;

    if (i < 9) {
      onePlayerRoles();
      i++;
    }
  }
  if (i >= 6) {
    contentFill();
    test();
  }
});

function contentFill() {
  let divs = document.querySelectorAll(".xo");
  content = [];
  for (let i = 0; i < divs.length; i++) {
    content.push(divs[i].innerText);
  }
}

function test() {
  contentFill();
  if (
    ((content[4] == content[2] && content[4] == content[6]) ||
      (content[4] == content[0] && content[4] == content[8]) ||
      (content[4] == content[1] && content[4] == content[7]) ||
      (content[4] == content[3] && content[4] == content[5])) &&
    content[4] != ""
  ) {
    end(4);
  } else if (
    ((content[0] == content[1] && content[0] == content[2]) ||
      (content[0] == content[3] && content[0] == content[6])) &&
    content[0] != ""
  ) {
    end(0);
  } else if (
    content[2] == content[5] &&
    content[2] == content[8] &&
    content[2] != ""
  ) {
    end(2);
  } else if (
    content[8] == content[7] &&
    content[8] == content[6] &&
    content[8] != ""
  ) {
    end(8);
  } else if (i == 10) {
    controllerFc.innerText = "Score is tied! let's try again";
    setTimeout(function () {
      location.reload();
    }, 1000);
  }
}

function end(num) {
  controllerFc.innerText = `the winner is ${content[num]}`;
  container.classList.add("disabled");
  setInterval(function () {
    controllerFc.innerText += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}

function onePlayerRoles() {
  contentFill();

  let divs = document.querySelectorAll(".xo");
  if (content[4] == content[0] && content[4] == "O" && content[8] == "") {
    divs[8].innerText = "O";
  } else if (content[4] == content[8] &&content[4] == "O" &&content[0] == "") {
    divs[0].innerText = "O";
  } else if (content[8] == content[0] &&content[0] == "O" &&content[4] == "" ) {
    divs[4].innerText = "O";
  } else if (content[4] == content[3] &&content[3] == "O" &&content[5] == "") {
    divs[5].innerText = "O";
  } else if (content[4] == content[5] &&content[5] == "O" &&content[3] == "") {
    divs[3].innerText = "O";
  } else if (content[5] == content[3] &&content[3] == "O" &&content[4] == "") {
    divs[4].innerText = "O";
  } else if (content[4] == content[2] &&content[2] == "O" &&content[6] == "") {
    divs[6].innerText = "O";
  } else if (content[4] == content[6] &&content[2] == "O" &&content[2] == "") {
    divs[2].innerText = "O";
  } else if (content[6] == content[2] &&content[2] == "O" &&content[4] == "") {
    divs[4].innerText = "O";
  } else if (content[4] == content[1] &&content[1] == "O" &&content[7] == "") {
    divs[7].innerText = "O";
  } else if (content[4] == content[7] &&content[4] == "O" &&content[1] == "") {
    divs[1].innerText = "O";
  } else if (content[7] == content[1] &&content[1] == "O" &&content[4] == "") {
    divs[4].innerText = "O";
  } else if (content[0] == content[1] &&content[1] == "O" &&content[2] == "") {
    divs[2].innerText = "O";
  } else if (content[0] == content[2] &&content[2] == "O" &&content[1] == "") {
    divs[1].innerText = "O";
  } else if (content[1] == content[2] &&content[1] == "O" &&content[0] == "") {
    divs[0].innerText = "O";
  } else if (content[0] == content[3] &&content[3] == "O" &&content[6] == "") {
    divs[6].innerText = "O";
  } else if (content[0] == content[6] &&content[6] == "O" &&content[3] == "") {
    divs[3].innerText = "O";
  } else if (content[6] == content[3] &&content[3] == "O" &&content[0] == "") {
    divs[0].innerText = "O";
  } else if (content[6] == content[7] &&content[7] == "O" &&content[8] == "") {
    divs[8].innerText = "O";
  } else if (content[6] == content[8] &&content[6] == "O" &&content[7] == "") {
    divs[7].innerText = "O";
  } else if (content[8] == content[7] &&content[7] == "O" &&content[6] == "") {
    divs[6].innerText = "O";
  } else if (content[2] == content[5] &&content[5] == "O" &&content[8] == "") {
    divs[8].innerText = "O";
  } else if ( content[2] == content[8] && content[2] == "O" && content[5] == "") {
    divs[5].innerText = "O";
  } else if (content[8] == content[5] && content[5] == "O" && content[2] == "") {
    divs[2].innerText = "O";
  } else if (content[4] == content[0] && content[4] != "" && content[8] == "") {
    divs[8].innerText = "O";
  } else if (content[4] == content[8] && content[4] != "" && content[0] == "") {
    divs[0].innerText = "O";
  } else if (content[8] == content[0] && content[0] != "" && content[4] == "") {
    divs[4].innerText = "O";
  } else if (content[4] == content[3] && content[3] != "" && content[5] == "") {
    divs[5].innerText = "O";
  } else if (content[4] == content[5] && content[5] != "" && content[3] == "") {
    divs[3].innerText = "O";
  } else if (content[5] == content[3] && content[3] != "" && content[4] == "") {
    divs[4].innerText = "O";
  } else if (content[4] == content[2] && content[2] != "" && content[6] == "") {
    divs[6].innerText = "O";
  } else if (content[4] == content[6] && content[2] != "" && content[2] == "") {
    divs[2].innerText = "O";
  } else if (content[6] == content[2] && content[2] != "" && content[4] == "") {
    divs[4].innerText = "O";
  } else if (content[4] == content[1] && content[1] != "" && content[7] == "") {
    divs[7].innerText = "O";
  } else if (content[4] == content[7] && content[4] != "" && content[1] == "") {
    divs[1].innerText = "O";
  } else if (content[7] == content[1] && content[1] != "" && content[4] == "") {
    divs[4].innerText = "O";
  } else if (content[0] == content[1] && content[1] != "" && content[2] == "") {
    divs[2].innerText = "O";
  } else if (content[0] == content[2] && content[2] != "" && content[1] == "") {
    divs[1].innerText = "O";
  } else if (content[1] == content[2] && content[1] != "" && content[0] == "") {
    divs[0].innerText = "O";
  } else if (content[0] == content[3] && content[3] != "" && content[6] == "") {
    divs[6].innerText = "O";
  } else if (content[0] == content[6] && content[6] != "" && content[3] == "") {
    divs[3].innerText = "O";
  } else if (content[6] == content[3] && content[3] != "" && content[0] == "") {
    divs[0].innerText = "O";
  } else if (content[6] == content[7] && content[7] != "" && content[8] == "") {
    divs[8].innerText = "O";
  } else if (content[6] == content[8] && content[6] != "" && content[7] == "") {
    divs[7].innerText = "O";
  } else if (content[8] == content[7] && content[7] != "" && content[6] == "") {
    divs[6].innerText = "O";
  } else if (content[2] == content[5] && content[5] != "" && content[8] == "") {
    divs[8].innerText = "O";
  } else if (content[2] == content[8] && content[2] != "" && content[5] == "") {
    divs[5].innerText = "O";
  } else if (content[8] == content[5] && content[5] != "" && content[2] == "") {
    divs[2].innerText = "O";
  } else {
    let emptyP = Array.from(divs).filter((e) => e.innerText == "");
    let div = emptyP[Math.floor(Math.random() * emptyP.length)];
    div.innerText = "O";
  }
}
