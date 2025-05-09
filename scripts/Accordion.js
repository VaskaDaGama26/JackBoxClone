const questions = document.querySelectorAll(".question__wrapper");

questions.forEach((question) => {
  const answer = question.querySelector(".answer");
  const icon = question.querySelector(".question__icon");

  question.addEventListener("click", (e) => {
    if (e.target.closest(".answer")) return;

    answer.classList.toggle("open");
    icon.classList.toggle("open");
  });
});
