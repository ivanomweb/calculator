const keys = document.querySelectorAll(".key");
const display = document.querySelector(".display");
display.textContent = "0";

keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (display.textContent == "0") {
      console.log(key.textContent);
      display.textContent = "";
      display.textContent += key.textContent;
    } else {
      console.log(key.textContent);
      display.textContent += key.textContent;
    }
  });
});
