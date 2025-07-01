document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("body, img, h1, p, a, audio");

  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transition = "opacity 1.5s ease-in-out";
  });

  setTimeout(() => {
    elements.forEach(el => {
      el.style.opacity = 1;
    });
  }, 300);
});
