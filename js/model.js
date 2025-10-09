document.addEventListener("DOMContentLoaded", function () {
  const modelViewer = document.querySelector("model-viewer");
  const buttons = document.querySelectorAll(".d-btns button");
  const loading = document.getElementById("loading");

  if (buttons.length > 0) buttons[0].classList.add("btn-active");

  modelViewer.addEventListener("load", () => {
    loading.style.opacity = "0";
    setTimeout(() => (loading.style.display = "none"), 500);
    modelViewer.classList.remove("fade");
  });

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      loading.style.display = "block";
      loading.style.opacity = "1";
      modelViewer.classList.add("fade");

      const modelName = btn.textContent.trim();
      const newSrc = `./modal/glb/${modelName}.glb`;

      console.log("Loading model:", newSrc);

      modelViewer.setAttribute("src", newSrc);
      buttons.forEach((b) => b.classList.remove("btn-active"));
      btn.classList.add("btn-active");
    });
  });
});
