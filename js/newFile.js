window.addEventListener("scroll", () => {
  const y = window.pageYOffset;
  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.y <= y && rect.y + rect.height > y) {
      let sectionId = section.id;
      console.log(sectionId);

      // дизактивируем все активные ссылки
      document
        .querySelector(".menu .menu__link--active")
        .classList.remove("menu__link--active");
      // активируем текущую
      document
        .querySelector(`[href*=${sectionId}]`)
        .classList.add("menu__link--active");
    }
  }
});
