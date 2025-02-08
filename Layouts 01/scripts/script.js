import Header from "./Header.js";
import Offer from "./Offer.js";
import Gift from "./Gift.js";
import Combo from "./Combo.js";

new Header();
new Offer();
new Gift();
new Combo();

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-section");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    section.classList.add("hidden-section");
    observer.observe(section);
  });
});
