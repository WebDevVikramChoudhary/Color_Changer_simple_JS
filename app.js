let simple_color = [
  "#0CF2BF",
  "#E2D322",
  "#31A8C2",
  "#D9F2F1",
  "#986BCA",
  "#839C1A",
  "#A6906F"
];

let btn_generat_color = document.querySelector("#generat_color");
let color_code_generated = document.querySelector("#color_code_generated");

btn_generat_color.addEventListener("click", function (e) {
  let random_color_generated = Math.floor(Math.random() * simple_color.length);
  document.body.style.backgroundColor = simple_color[random_color_generated];
  color_code_generated.innerHTML = simple_color[random_color_generated];
});
