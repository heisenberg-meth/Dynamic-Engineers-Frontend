const togglerbtn = document.querySelector(".toggler");
const navlinks = document.querySelector(".navlinks");
togglerbtn.addEventListener("click", () => {
  navlinks.classList.toggle("responsive");
});
function myFunction(x) {
  x.classList.toggle("change");
}
const links = document.querySelectorAll(".navlink");
links.forEach(function (link) {
  link.addEventListener("click", function () {
    links.forEach(function (a) {
      a.classList.remove("active");
    });
    link.classList.add("active");
  });
});
const cards = document.querySelectorAll(".card");
const displayNumber = document.querySelector(".cardnumber");
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const index = Array.from(cards).indexOf(entry.target) + 1;
        displayNumber.textContent = index.toString().padStart(2, "0");
      }
    });
  },
  {
    root: document.querySelector(".scroll-container"),
    threshold: 1,
  }
);
cards.forEach((card) => observer.observe(card));