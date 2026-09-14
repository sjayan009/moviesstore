const DEMO_VIDEO_URL = "";

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

if (DEMO_VIDEO_URL) {
  const demoLink = document.getElementById("demo-video-link");
  demoLink.href = DEMO_VIDEO_URL;
  demoLink.hidden = false;
  document.querySelector(".video-card strong").textContent = "Watch the project walkthrough";
  document.querySelector(".video-card small").hidden = true;
}

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
