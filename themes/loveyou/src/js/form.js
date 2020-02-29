/**
 * AJAX Vanilla
 */

 // Success Message Function (called after AJAX Success)
function successNotice(jsClass) {
  let elementSuccess = document.querySelectorAll(jsClass);
  $(elementSuccess).show(0); // to hide after 5 seconds append .delay(5000).hide(0)
}

function listenFormSubmit(ajaxRequest) {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener("submit", ajaxRequest, false);
  })
}

function ajaxRequest(event) {
  event.preventDefault(); // stop submit so input values do not get cleared
  const formId = "#" + event.currentTarget.id;
  const form = document.querySelector(formId);
  let url = "";
  // Serialize form, format must be string:
  // name=Jimmy Flash&phone=999.555.1212&email=jimmy@flash.com&message=Hey, how are you doing?&template=contactDefault& etc...
  // ie11 cannot use Object.values and babel is not transpiling it
  var formData = Object.values(form).reduce((string, field) => { 
    if (field.name == 'actionUrl') {
      url = field.value;
    }
    string += field.name + '=' + field.value + "&"; 
    return string;
  }, '');
  
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    successNotice(".js-success.contact");
  }

  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // Format must be as:
  xhr.send(formData);
}

listenFormSubmit(ajaxRequest);