
// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

const themeToggleInput = document.querySelector(".switch__input");
const rootElement = document.documentElement;
const switchIcon = document.querySelector("#SwitchIcon");

themeToggleInput.addEventListener("change", () => {
  if (themeToggleInput.checked) {
    rootElement.classList.add("light-mode");
    switchIcon.style.backgroundImage = 'radial-gradient(circle, rgba(255, 223, 0, 1) 60%, rgba(255, 223, 0, 0) 100%)';
  } else {
    rootElement.classList.remove("light-mode");
    switchIcon.style.backgroundImage = 'none';
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (rootElement.classList.contains("light-mode")) {
    themeToggleInput.checked = true;
    switchIcon.style.backgroundImage = 'radial-gradient(circle, rgba(255, 223, 0, 1) 60%, rgba(255, 223, 0, 0) 100%)';
  }
});


const sparkleContainer = document.querySelector('.sparkling-background');

// Generate Sparkles
for (let i = 0; i < 50; i++) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');

  // Randomly position sparkles
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.left = `${Math.random() * 100}%`;

  // Randomize animation duration and delay
  sparkle.style.animationDuration = `${2 + Math.random() * 3}s`;
  sparkle.style.animationDelay = `${Math.random() * 2}s`;

  sparkleContainer.appendChild(sparkle);
}


// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

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

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


// Function to set the mode based on local time
function setModeBasedOnTime() {
  const hour = new Date().getHours(); // Get current hour
  const isLightMode = hour >= 8 && hour < 18; // 6 AM to 6 PM for light mode

  if (isLightMode) {
    rootElement.classList.add("light-mode");
    rootElement.classList.remove("dark-mode");
    themeToggleInput.checked = true;
    switchIcon.style.backgroundImage =
      'radial-gradient(circle, rgba(255, 223, 0, 1) 60%, rgba(255, 223, 0, 0) 100%)';
  } else {
    rootElement.classList.add("dark-mode");
    rootElement.classList.remove("light-mode");
    themeToggleInput.checked = false;
    switchIcon.style.backgroundImage = 'none';
  }
}

// Initialize mode based on local time
document.addEventListener("DOMContentLoaded", () => {
  setModeBasedOnTime();
  themeToggleInput.addEventListener("change", () => {
    if (themeToggleInput.checked) {
      rootElement.classList.add("light-mode");
      rootElement.classList.remove("dark-mode");
      switchIcon.style.backgroundImage =
        'radial-gradient(circle, rgba(255, 223, 0, 1) 60%, rgba(255, 223, 0, 0) 100%)';
    } else {
      rootElement.classList.remove("light-mode");
      rootElement.classList.add("dark-mode");
      switchIcon.style.backgroundImage = 'none';
    }
  });
});

// Optional: Reapply mode at the top of each hour
setInterval(setModeBasedOnTime, 60 * 60 * 1000);
