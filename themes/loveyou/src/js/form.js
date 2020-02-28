
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Contact Form: Submit to database to send on to email address
//
//

// Form Listener Function called 1) on page load and 2) again after AJAX Success
function listenForm(formID, submitFormFunction) {
  var formID = document.querySelector(formID);
  if(formID.addEventListener){
    formID.addEventListener("submit", submitFormFunction, false);  //Modern browsers
  }
}

// Success Message Function (called after AJAX Success)
function successMessage(jsClass) {
  let elementSuccess = document.querySelectorAll(jsClass);
  $(elementSuccess).show(0).delay(5000).hide(0);
}

// Submit Contact Form via AJAX
// https://us-central1-earring-happiness.cloudfunctions.net/contactFormSubmit
// http://localhost:5001/earring-happiness/us-central1/contactFormSubmit

function submitFormContact(formContact){
  formContact.preventDefault();
  $.ajax({
    url:'https://us-central1-loveyou-forms.cloudfunctions.net/formHandler',
    type:'post',
    data:$('#contact').serialize(),
    success:function(data){
    // Show/Hide success message via function call
    successMessage(".js-success.contact");
    // Clear inputs and textarea of content
    $("#contact .form-item, #contact .form-textarea").val("");
    }
  });
}

// Contact Form: Function Call
// first parameter selects form to listen to, second parameter is function to attach to form
listenForm('#contact', submitFormContact);

//
//
// END: Contact Form: Submit to database to send on to email address
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

