let colors = [
  { back: "rgb(255,241,240)", text: "rgb(203, 69, 80)" },
  { back: "rgb(255,242,232)", text: "rgb(196, 96, 66)" },
  { back: "rgb(255,247,230)", text: "rgb(206, 107, 36)" },
  { back: "rgb(255,251,230)", text: "rgb(196, 144, 54)" },
  { back: "rgb(252,255,230)", text: "rgb(117, 151, 36)" },
  { back: "rgb(246,255,237)", text: "rgb(131, 176, 109)" },
  { back: "rgb(230,255,251)", text: "rgb(71, 159, 161)" },
  { back: "rgb(230,244,255)", text: "rgb(64, 121, 212)" },
  { back: "rgb(240,245,255)", text: "rgb(93, 110, 197)" },
  { back: "rgb(255,240,246)", text: "rgb(192, 75, 143)" }
];

let input = document.getElementById("input");
let tags = document.querySelector(".tags");

document.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    if (input.value) {
      let tag = document.createElement("div");

      tag.className = "tag";
      tag.insertAdjacentHTML("beforeend", input.value);

      let close = document.createElement("span");
      close.className = "material-icons";
      close.innerHTML = "close";

      tag.insertAdjacentElement("beforeend", close);

      let colorValues = colors[Math.floor(Math.random() * colors.length)];

      tag.style.color = colorValues.text;
      tag.style.background = colorValues.back;

      tags.append(tag);

      close.addEventListener("click", (e) => {
        tag.remove();
      });
    }
  }
});