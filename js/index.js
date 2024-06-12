const btns = document.querySelectorAll(".btn");
const x = document.querySelector(".x");
const o = document.querySelector(".o");
const result = document.querySelector("#result");
const play = document.querySelector(".play button");
const reStart = document.querySelector("#start");
let birinchiHarf = "X";
let oyinTamom = false;
x.style.backgroundColor = "blue";
btns.forEach((btn) => {
  btn.innerHTML = "";
  btn.addEventListener("click", () => {
    if (!oyinTamom && btn.innerHTML === "") {
      btn.innerHTML = birinchiHarf;
      harfAlmashish();
      kimYutishi();
      tenglik();
    }
  });
});
function harfAlmashish() {
  if (birinchiHarf == "X") {
    birinchiHarf = "O";
    o.style.backgroundColor = "blue";
    x.style.backgroundColor = "";
  } else {
    birinchiHarf = "X";
    x.style.backgroundColor = "blue";
    o.style.backgroundColor = "";
  }
}
function kimYutishi() {
  let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < arr.length; i++) {
    let v0 = btns[arr[i][0]].innerHTML;
    let v1 = btns[arr[i][1]].innerHTML;
    let v2 = btns[arr[i][2]].innerHTML;
    console.log(v0);
    if (v0 != "" && v0 === v1 && v0 === v2) {
      oyinTamom = true;
      birinchiHarf == "O"
        ? (result.innerHTML = `<p>X yutdi</p>`)
        : (result.innerHTML = `<p>O yutdi</p>`);
      x.style.backgroundColor = "";
      o.style.backgroundColor = "";
      play.style.display = "inline";
      for (let j = 0; j < 3; j++) {
        btns[arr[i][j]].style.backgroundColor = "red";
      }
    }
  }
}
function tenglik() {
  if (!oyinTamom) {
    let teng = true;
    btns.forEach((e) => {
      if (e.innerHTML === "") teng = false;
    });
    if (teng) {
      oyinTamom = true;
      result.innerHTML = "<p>Tenglik</p>";
      play.style.display = "inline";
    }
  }
}
function start() {
  oyinTamom = false;
  birinchiHarf = "X";
  result.innerHTML = "";
  play.style.display = "none";
  btns.forEach((e) => {
    e.innerHTML = "";
    e.style.background = "";
  });
  x.style.backgroundColor = "blue";
  o.style.backgroundColor = "";
}
reStart.addEventListener("click", start);
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && play.style.display == "inline") {
    start();
  }
});
