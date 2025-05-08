document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".about__img, .about__mobile__img");

  if (!targets) {
    console.warn("Элемент about__img, .about__mobile__img не найден");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const visibleRatio = entry.intersectionRatio;

        if (visibleRatio >= 0.99) {
          entry.target.classList.add("animate");
        }
        if (visibleRatio === 0) {
          entry.target.classList.remove("animate");
        }
      });
    },
    {
      threshold: buildThresholdList(0, 1, 0.01),
    }
  );

  targets.forEach((target) => observer.observe(target));
});

function buildThresholdList(start, end, step) {
  const thresholds = [];
  for (let i = start; i <= end; i += step) {
    thresholds.push(parseFloat(i.toFixed(2)));
  }
  return thresholds;
}
