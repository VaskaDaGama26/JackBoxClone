document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("signupModal");
  const closeBtn = modal.querySelector(".modal__close");
  const openButtons = document.querySelectorAll("a.signup, .overlay__button");

  openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
