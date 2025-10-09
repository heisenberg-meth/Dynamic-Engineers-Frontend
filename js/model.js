document.addEventListener("DOMContentLoaded", function () {
  const modelViewer = document.querySelector("model-viewer");
  const buttons = document.querySelectorAll(".d-btns button");

  if (buttons.length > 0) {
    buttons[0].classList.add("btn-active");
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modelName = btn.textContent.trim().toLowerCase();
      const formattedName = modelName
        .replace(/\s+/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      const newSrc = `./modal/glb/${formattedName}.glb`;
      modelViewer.setAttribute("src", newSrc);
      buttons.forEach((b) => b.classList.remove("btn-active"));
      btn.classList.add("btn-active");
    });
  });
});