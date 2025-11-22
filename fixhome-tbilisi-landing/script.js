document.querySelectorAll(".language-switch .lang").forEach(lang => {
  lang.addEventListener("click", () => {
    document.querySelector(".language-switch .active")?.classList.remove("active");
    lang.classList.add("active");
  });
});
