// Responsive navigation menu
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu after selecting a navigation link.
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
