//Get the button:
mybutton = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function myFunction() {
  var x = document.getElementById("mobileMenuLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const userName = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const message = document.getElementById("message");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!userName.value.trim()) {
    userName.placeholder = "Please, fill out your name.";
    userName.classList.add("errorMessage");
  }

  if (!email.value && !phoneNumber.value) {
    email.placeholder = "Please enter an email or a phone #";
    phoneNumber.placeholder = "Please enter an email or a phone #";
    email.classList.add("errorMessage");
    phoneNumber.classList.add("errorMessage");
  }

  if (!message.value) {
    message.placeholder = "You didn't write any message!";
    message.classList.add("errorMessage");
  }
});
