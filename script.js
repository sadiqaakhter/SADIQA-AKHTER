const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const year = document.querySelector("[data-year]");

if (window.lucide) {
  window.lucide.createIcons();
}

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

menuButton.addEventListener("click", () => {
  header.classList.toggle("is-open");
});

document.querySelectorAll(".nav-toggle").forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const item = toggle.closest(".nav-item");
    const isOpen = item.classList.contains("is-open");

    document.querySelectorAll(".nav-item.is-open").forEach((openItem) => {
      openItem.classList.remove("is-open");
      openItem.querySelector(".nav-toggle")?.setAttribute("aria-expanded", "false");
    });

    item.classList.toggle("is-open", !isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    document.querySelectorAll(".nav-item.is-open").forEach((item) => {
      item.classList.remove("is-open");
      item.querySelector(".nav-toggle")?.setAttribute("aria-expanded", "false");
    });
  });
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".nav-item")) {
    return;
  }

  document.querySelectorAll(".nav-item.is-open").forEach((item) => {
    item.classList.remove("is-open");
    item.querySelector(".nav-toggle")?.setAttribute("aria-expanded", "false");
  });
});

year.textContent = new Date().getFullYear();

document.querySelectorAll("img:not(.hero-image)").forEach((image) => {
  image.loading = "lazy";
  image.decoding = "async";
});

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

document
  .querySelectorAll(
    ".impact-grid article, .audience-grid article, .positioning-grid, .positioning-cards article, .reach-grid article, .proof-grid article, .credential-grid article, .brand-card, .gallery-grid, .contact-panel, .page-hero, .timeline article, .service-grid article, .feature-row, .process-list article, .mini-gallery img, .portfolio-grid article, .blog-grid article, .contact-pathways article"
      + ", .portfolio-statement article, .portfolio-intro, .featured-project, .portfolio-hero-board"
      + ", .speaking-hero-media, .speaker-positioning, .speaking-topic-grid article, .speaker-format-grid article, .speaker-proof, .speaker-proof-gallery img, .speaker-cta"
      + ", .work-proof, .work-proof-gallery img"
  )
  .forEach((item) => item.classList.add("reveal-item"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal-item").forEach((item) => revealObserver.observe(item));

document.querySelectorAll("[data-marquee]").forEach((track) => {
  const items = [...track.children];

  items.forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);
  });
});

document.querySelectorAll("[data-cert-marquee]").forEach((track) => {
  const items = [...track.children];

  items.forEach((item) => {
    const clone = item.cloneNode(true);
    clone.classList.remove("reveal-item");
    clone.classList.add("is-visible");
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);
  });
});

const carousels = document.querySelectorAll("[data-carousel]");

carousels.forEach((carousel, carouselIndex) => {
  const slides = [...carousel.querySelectorAll("img")];

  if (slides.length < 2) {
    return;
  }

  let currentSlide = 0;

  window.setInterval(() => {
    slides[currentSlide].classList.remove("is-active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("is-active");
  }, 5000 + carouselIndex * 180);
});
