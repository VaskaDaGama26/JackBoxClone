document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".menu");
  const close = document.querySelector(".close");
  const menu = document.querySelector(".nav__mobile");
  const bg = document.querySelector(".bg__mobile");

  if (!burger || !menu || !bg) return;

  const toggleMenu = () => {
    menu.classList.toggle("open");
    bg.classList.toggle("open");
  };

  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  close?.addEventListener("click", toggleMenu);

  document.addEventListener("click", (e) => {
    if (
      !menu.contains(e.target) &&
      !burger.contains(e.target) &&
      !close?.contains(e.target)
    ) {
      menu.classList.remove("open");
      bg.classList.remove("open");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      menu.classList.remove("open");
      bg.classList.remove("open");
    }
  });
});
