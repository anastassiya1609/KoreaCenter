let toggleNavbarButton = document.querySelector(".toggle-menu-button");
let navBar = document.querySelector(".nav__mobile");
let popupForm = document.getElementById("form_popup")
let mainForm = document.getElementById("form_main")

toggleNavbarButton.addEventListener("click", function () {
  navBar.classList.toggle("nav__opened");
  toggleNavbarButton.classList.toggle("toggle-menu-button__touched");
});

mainForm.addEventListener("submit", function (event) {
    event.preventDefault();
    sendForm(event.target);
  });

popupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    sendForm(event.target);
  });

function sendForm(form) {
  let formFields = form.elements;
  let successMessage = form.querySelector(".form_success-message");
  let errorMessage = form.querySelector(".form_error-message");
  let submitFormButton = form.querySelector(".form_submit");
  
 
  const data = {
    username: formFields.username.value,
    email: formFields.email.value,
    messenger: formFields.messenger.value,
    number: formFields.tel.value,
    place: formFields.place.value,
  };
  
   

  fetch("/", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(
      (r) => successMessage.innerText =  "Ваша завка в обработке. Мы свяжемся с вами в ближайшее время."
          )
    .catch((e) => {
      errorMessage.innerText = "Данные введены неверно!"
      submitFormButton.disabled = true
    }
    );
}




// Надо найти по найденной форме ее детей (child): Сообщение об ошибке по классу .form_error-message, а также кнопку .form_send-button
// Example: form.children

function enableFormByInputChange(form) {
  let inputs = form.querySelectorAll("input");
  let errorMessage = form.querySelector(".form_error-message");
  let submitFormButton = form.querySelector(".form_submit");
       
       
  

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function(event) {
      if (errorMessage.innerText) {
        errorMessage.innerText = null;
      }

      if (submitFormButton.disabled === true) {
        submitFormButton.disabled = false;
      }
       
    });
  }
}

enableFormByInputChange(mainForm);
enableFormByInputChange(popupForm);


const details = document.querySelectorAll("details");

[...details].forEach((targetDetail) => {
  targetDetail.addEventListener("click", (_) => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});


let popupBg = document.getElementById("popup_bg");
let openPopupButtons = document.querySelectorAll(".popup_open");
let closePopup = document.getElementById("popup_close");

openPopupButtons.forEach((openPopupButton) => {
  openPopupButton.addEventListener("click", function (event) {
    popupBg.classList.add("active");
  });
});

closePopup.addEventListener("click", function (event) {
  popupBg.classList.remove("active");
});

document.addEventListener("click", function (event) {
  if (event.target === popupBg) {
    popupBg.classList.remove("active");
  }
});

const header = document.getElementById("header_scroll");
const headerHeightPx = 150;

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > headerHeightPx ||
    document.documentElement.scrollTop > headerHeightPx
  ) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});



const reviews = document.querySelectorAll(".review");
let currentReview = 0;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

for (let i = 0; i < reviews.length; i++) {
  reviews[currentReview].style.display = "block";
}
//Previous Review Function
function prevReview() {
  for (let i = 0; i < reviews.length; i++) {
    reviews[currentReview].style.display = "none";
  }
  //currentReview Update
  currentReview -= 1;
  if (currentReview === -1) {
    currentReview = reviews.length - 1;
  }

  for (let i = 0; i < reviews.length; i++) {
    reviews[currentReview].style.display = "block";
  }
}
//Next Review Function
function nextReview() {
  for (let i = 0; i < reviews.length; i++) {
    reviews[currentReview].style.display = "none";
  }
  //currentReview Update
  currentReview += 1;
  if (currentReview === reviews.length) {
    currentReview = 0;
  }

  for (let i = 0; i < reviews.length; i++) {
    reviews[currentReview].style.display = "block";
  }
}

prev.addEventListener("click", prevReview);
next.addEventListener("click", nextReview);
