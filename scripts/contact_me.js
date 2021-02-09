
// Below Function Executes On Form Submit
function Validate() {
  // Storing Field Values In Variables
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  // Regular Expression For Email
  var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
  // Conditions
  if (name != '' && email != '' && message != '') {
    if (!email.match(emailReg)) {
      alert("Invalid Email Address...!!!");
      return false;
    }
  } else {
    alert("All fields are required.....!");
    return false;
  }
}
