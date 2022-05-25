mybutton = document.getElementById("scrollToTop"); // gets the class containing button img

window.onscroll = function () { // when the user scrolls down 20px from the top of the document, show the button
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { // if scrolling is more than 20 or if scrolling is more than 20 in the document
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


function topFunction() { // when the user clicks on the button, scroll to the top of the document
  document.documentElement.scrollTop = 0;
}

const userName = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const message = document.getElementById("message");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  userName.classList.remove("errorMessage");   // removes error message class if error is no longer present
  phoneNumber.classList.remove("errorMessage"); // removes error message class if error is no longer present
  email.classList.remove("errorMessage"); // removes error message class if error is no longer present
  message.classList.remove("errorMessage"); // removes error message class if error is no longer present
  e.preventDefault();
  
  if (!userName.value.trim()) { // trim removes whitespace from the beginning and end of the string
  userName.placeholder = "Please, fill out your name."; // changes the place holder text
  userName.classList.add("errorMessage"); // adds a class to the element
  return;
  }
  
  if (!email.value.trim() && !phoneNumber.value.trim()) { // if and only if both phone number and email values are empty, return error message
  email.placeholder = "Please enter an email or a phone #";
  phoneNumber.placeholder = "Please enter an email or a phone #";
  email.classList.add("errorMessage");
  phoneNumber.classList.add("errorMessage");
  return;
  }
  
  if (!message.value.trim()) { // if message input is empty, return error message
  message.placeholder = "You didn't write any message!";
  message.classList.add("errorMessage");
  return;
  }
  
  form.submit(); // submits the form
  });

