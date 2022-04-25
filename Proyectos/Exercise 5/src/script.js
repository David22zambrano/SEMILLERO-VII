function validateEmail(email) {
  let emailError = document.getElementsByTagName("h2");

  var expReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  var validate = expReg.test(email);
  if (validate == true) {
    emailError[0].innerText = "correct"; 
  } else {
    emailError[0].innerText = "Invalid";
  }
}
