//Get the button:
mybutton = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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

function validateForm() {
    var inputName = document.forms["contactForm"]["fname"].value.trim();
    if (inputName == "") {
      alert("Please, fill out your name.");
      return;
    }

    var inputEmail = document.forms["contactForm"]["femail"].value.trim();
    var inputNumber = document.forms["contactForm"]["fnumber"].value.trim();
    if(inputEmail == "" && inputNumber == "") {
        alert("Please enter either an email or a phone number, so I can get back to you!");
        return;
    }

    var input = document.forms["contactForm"]["fmessage"].value.trim();
    if (input == "") {
      alert("You didn't write any message!");
      return;
    }

  }