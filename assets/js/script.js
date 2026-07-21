/*
 * Viajes Chile
 * JavaScript propio + jQuery 3.7.1 + Bootstrap 5.3.8
 * Autor: Nicolás Escudero Cabello
 */

(() => {
  "use strict";

  const navbar = document.querySelector("#mainNav");
  const navbarMenu = document.querySelector("#navbarMenu");
  const contactForm = document.querySelector("#contactForm");
  const messageModalElement = document.querySelector("#messageModal");
  const destinationModalElement = document.querySelector("#destinationModal");
  const destinationModalTitle = document.querySelector("#destinationModalTitle");
  const destinationModalText = document.querySelector("#destinationModalText");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const updateNavbar = () => {
    navbar.classList.toggle("navbar-scrolled", window.scrollY > 24);
  };

  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });

  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((element) => {
    new bootstrap.Tooltip(element);
  });

  new bootstrap.ScrollSpy(document.body, {
    target: "#mainNav",
    offset: 90,
  });

  document.querySelectorAll("#navbarMenu .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarMenu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navbarMenu, { toggle: false }).hide();
      }
    });
  });

  $("a[href^='#']").on("click", function (event) {
    const targetId = $(this).attr("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const $target = $(targetId);

    if ($target.length !== 1) {
      return;
    }

    event.preventDefault();
    const destination = Math.max(0, $target.offset().top - navbar.offsetHeight + 1);

    if (reduceMotion.matches) {
      window.scrollTo(0, destination);
    } else {
      $("html, body").stop(true).animate({ scrollTop: destination }, 650);
    }
  });

  const destinationDescriptions = {
    "Torres del Paine": "Explora senderos con vistas a macizos de granito, lagos turquesa y fauna patagónica en una experiencia adaptable a distintos niveles.",
    "Lagunas altiplánicas": "Recorre lagunas de altura rodeadas de volcanes y observa flamencos en uno de los paisajes más singulares del desierto de Atacama.",
    "Salares y volcanes": "Descubre amplias planicies minerales, pueblos andinos y cielos despejados en una ruta por el norte grande de Chile.",
    "Bosques del sur": "Camina bajo árboles nativos y helechos gigantes mientras conoces ríos, humedales y la biodiversidad de la selva valdiviana.",
  };

  const destinationModal = new bootstrap.Modal(destinationModalElement);

  document.querySelectorAll(".destination-details").forEach((button) => {
    button.addEventListener("click", () => {
      const destination = button.dataset.destination;
      destinationModalTitle.textContent = destination;
      destinationModalText.textContent = destinationDescriptions[destination];
      destinationModal.show();
    });
  });

  const messageModal = new bootstrap.Modal(messageModalElement);

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!contactForm.checkValidity()) {
      contactForm.classList.add("was-validated");
      contactForm.querySelector(":invalid")?.focus();
      return;
    }

    messageModal.show();
    contactForm.reset();
    contactForm.classList.remove("was-validated");
  });
})();
