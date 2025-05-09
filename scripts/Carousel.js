document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const carouselItems = document.querySelectorAll(".carousel__item");
    const prevButton = document.querySelector(".controls__button.left");
    const nextButton = document.querySelector(".controls__button.right");
    const dots = document.querySelectorAll(".controls__dot");
    let currentIndex = 0;
  
    const scrollToSlide = (index) => {
      const targetSlide = carouselItems[index];
      if (targetSlide) {
        carousel.scrollTo({
          left: targetSlide.offsetLeft,
          behavior: "smooth",
        });
      }
    };
  
    const updateCarousel = () => {
      // Сброс классов
      carouselItems.forEach((item, index) => {
        item.classList.remove("active", "inactive");
        dots[index].classList.remove("active");
      });
  
      // Активный слайд и точка
      carouselItems[currentIndex].classList.add("active");
      dots[currentIndex].classList.add("active");
  
      // Неактивные слайды
      carouselItems.forEach((item, index) => {
        if (index !== currentIndex) {
          item.classList.add("inactive");
        }
      });
  
      // Обновление кнопок
      prevButton.classList.toggle("active", currentIndex > 0);
      nextButton.classList.toggle("active", currentIndex < carouselItems.length - 1);
  
      // Прокрутка к текущему слайду
      scrollToSlide(currentIndex);
    };
  
    // Слушатели кнопок
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    nextButton.addEventListener("click", () => {
      if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    // Слушатели точек
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
    });
  
    // Автосмена слайдов
    setInterval(() => {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      updateCarousel();
    }, 3000);
  
    // Инициализация
    updateCarousel();
  });
  