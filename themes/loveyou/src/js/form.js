/**
 * AJAX Vanilla
 */

function listenFormSubmit(formID, request) {
  var form = document.querySelector(formID);
  if (form.addEventListener) {
    form.addEventListener("submit", request, false);
  }
}

// Success Message Function (called after AJAX Success)
function successNotice(jsClass) {
  let elementSuccess = document.querySelectorAll(jsClass);
  $(elementSuccess).show(0).delay(5000).hide(0);
}

function ajaxRequest(event) {
  event.preventDefault(); // stop submit so input values do not get cleared
  // FIXME make form id dynamic 
  var form = document.querySelector('#contact');
  //  var formData = serialize(form);
  // Serialize form, format must be:
  // name=Jimmy Flash&phone=999.555.1212&email=jimmy@flash.com&message=Hey, how are you doing?&template=contactDefault& etc...
  // ie11 cannot use Object.values and babel is not transpiling it
  var formData = Object.values(form).reduce((string, field) => { 
    string += field.name + '=' + field.value + "&"; 
    return string;
  }, '');
  
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    successNotice(".js-success.contact");
  }

  xhr.open("POST", 'https://us-central1-loveyou-forms.cloudfunctions.net/formHandler');
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // Format must be as:
  xhr.send(formData);
}

listenFormSubmit('#contact', ajaxRequest);