function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.email.focus();
window.location.href = 'index.html';
return true;
}
else
{
alert("You have entered an invalid email address!");
window.location.href = 'index.html';
return false;
}
}

  function menuAnimation(x) {
    x.classList.toggle("change");
    var element = document.getElementById("slideNav");
    element.classList.toggle("navSlide");
    var textFade = document.getElementById("sideBarText");
    textFade.classList.toggle("textFadeIn");
  }

smoothScroll.init();