const texts = document.querySelectorAll("p, li, h1, h2, h3, strong");

texts.forEach(el => {
  el.addEventListener("mouseenter", () => {
    el.style.color = "#eef525";
  });

  el.addEventListener("mouseleave", () => {
    el.style.color = "";
  });
});
