//Login Form
let loginForm = document.querySelector('.login-form-pr');
document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
}


//Scroll up button
var mybutton = document.getElementById("myBtnpr");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}