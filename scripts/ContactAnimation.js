document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".contact__right__img");
  
    if (!target) {
      console.warn("Элемент .contact__right__img не найден");
      return;
    }
  
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const visibleRatio = entry.intersectionRatio;
  
        if (visibleRatio >= 0.5) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      },
      {
        threshold: buildThresholdList(0, 1, 0.01),
      }
    );
  
    observer.observe(target);
  });
  
  function buildThresholdList(start, end, step) {
    const thresholds = [];
    for (let i = start; i <= end; i += step) {
      thresholds.push(parseFloat(i.toFixed(2)));
    }
    return thresholds;
  }
  