
// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

const themeToggleInput = document.querySelector(".switch__input");
const rootElement = document.documentElement;
const switchIcon = document.querySelector("#SwitchIcon");
const THEME_KEY = "portfolio-theme";

function applyTheme(isLight) {
  if (isLight) {
    rootElement.classList.add("light-mode");
    rootElement.classList.remove("dark-mode");
    if (themeToggleInput) themeToggleInput.checked = true;
    if (switchIcon) {
      switchIcon.style.backgroundImage =
        "radial-gradient(circle, hsl(168, 76%, 48%) 60%, transparent 100%)";
    }
  } else {
    rootElement.classList.remove("light-mode");
    rootElement.classList.add("dark-mode");
    if (themeToggleInput) themeToggleInput.checked = false;
    if (switchIcon) switchIcon.style.backgroundImage = "none";
  }
}

function getPreferredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  const hour = new Date().getHours();
  return hour >= 8 && hour < 18 ? "light" : "dark";
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(getPreferredTheme() === "light");

  if (themeToggleInput) {
    themeToggleInput.addEventListener("change", () => {
      const isLight = themeToggleInput.checked;
      localStorage.setItem(THEME_KEY, isLight ? "light" : "dark");
      applyTheme(isLight);
    });
  }
});

let interactionsInitialized = false;

function initSparkles() {
  /* Ambient background is CSS-only */
}

function initTestimonialsModal() {
  const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");
  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  if (!modalContainer || modalContainer.dataset.modalInit) return;
  modalContainer.dataset.modalInit = "true";

  const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
      testimonialsModalFunc();
    });
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  if (overlay) overlay.addEventListener("click", testimonialsModalFunc);
}

function initProjectFilters() {
  const select = document.querySelector("[data-select]");
  const selectValue = document.querySelector("[data-select-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");
  const filterItems = document.querySelectorAll("[data-filter-item]");

  if (select && !select.dataset.filterInit) {
    select.dataset.filterInit = "true";
    select.addEventListener("click", function () { elementToggleFunc(this); });
  }

  const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
      if (selectedValue === "all") {
        filterItems[i].classList.add("active");
      } else if (selectedValue === filterItems[i].dataset.category) {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    }
  };

  if (filterBtn.length && selectValue && !selectValue.dataset.filterInit) {
    selectValue.dataset.filterInit = "true";
    let lastClickedBtn = filterBtn[0];

    for (let i = 0; i < filterBtn.length; i++) {
      filterBtn[i].addEventListener("click", function () {
        const selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);
        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
      });
    }
  }
}

function initCoreInteractions() {
  if (interactionsInitialized) return;
  interactionsInitialized = true;

  initSparkles();
  initTestimonialsModal();

  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  if (form && formBtn) {
    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].addEventListener("input", function () {
        if (form.checkValidity()) {
          formBtn.removeAttribute("disabled");
        } else {
          formBtn.setAttribute("disabled", "");
        }
      });
    }
  }

  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
      for (let j = 0; j < pages.length; j++) {
        if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
          pages[j].classList.add("active");
          navigationLinks[j].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[j].classList.remove("active");
          navigationLinks[j].classList.remove("active");
        }
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", initCoreInteractions);
document.addEventListener("portfolio:rendered", initProjectFilters);
