console.log("Webflow-Dev-Env is connected...");

import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", { perPage: 3 }).mount();
});
