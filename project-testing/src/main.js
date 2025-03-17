import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
const profileBtn = document.getElementById("profileBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

// Toggle dropdown on click
profileBtn.addEventListener("click", function (event) {
  dropdownMenu.classList.toggle("show");
  event.stopPropagation(); // Prevent click event from closing immediately
});

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  if (
    !profileBtn.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.remove("show");
  }
});
