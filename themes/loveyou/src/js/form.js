/**
 * AJAX Vanilla
 */

// Form listeners 'submit'
function listenFormSubmit(ajaxRequest) {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', ajaxRequest, false);
  })
}

// Alerts (client-side)
function alert(formId, action, delay, message) {
  var parent = document.querySelector(formId).parentNode; // get form parent element
  var elements =  parent.querySelectorAll('.js-form-alerts'); // select child elements
  // set elements innerHTML
  elements.forEach(e => {
    e.innerHTML = message;
  });
  // show/hide elements
  setTimeout(function(){
    elements.forEach(e => {
      e.style.display = action;
    });
  }, delay); 
}

// Clear Form Values
function formValuesClear(formId) {
  var parent = document.querySelector(formId).parentNode; // get form parent element
  var elements =  parent.querySelectorAll('input, textarea'); // select child elements
  // set elements innerHTML to empty string
  elements.forEach(e => {
    e.value = '';
  });
}

function ajaxRequest(event) {
  event.preventDefault(); // stop submit so input values do not get cleared before being able to act on them
  const formId = '#' + event.currentTarget.id; // returns id without preceeding #
  const form = document.querySelector(formId);
  let formUrlAction = form.querySelector('[name=urlAction]').value;
  // Serialize form as string (could also be json?):
  // name=Jimmy Flash&phone=999.555.1212&email=jimmy@flash.com&message=Hey, how are you doing?&template=contactDefault& etc...
  // ie11 cannot use Object.values and babel is not transpiling it
  var formData = Object.values(form).reduce((string, field) => { 
    if (field.name == 'urlAction') {
      formUrlAction = field.value;
    }
    string += field.name + '=' + field.value + '&'; 
    return string;
  }, '');

  // Ajax Request Object
  var xhr = new XMLHttpRequest();
  // initiate request = onloadstart
  xhr.onloadstart = function() {
    alert(formId, 'block', 0, 'Processing...'); 
  }
  // error returned with response = onerror
  xhr.onerror = function () {
    alert(formId, 'block', 0, 'Error: Apologies, something went wrong. Please try again.'); 
  }
  // successful response = onload
  xhr.onload = function() {
    var res = JSON.parse(xhr.response); // response is string, so convert to json
    // if urlRedirect value is 'false' do not redirect, otherwise redirect to url
    if (res.data.redirect !== 'false') { // compare 'false' as string b/c not proper boolean
      window.location.href = res.data.redirect;
    } else {
      formValuesClear(formId);
      alert(formId, 'none', 4000, 'Message Received!'); 
    }
  }

  // Send Request
  xhr.open('POST', formUrlAction);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(formData);
}

document.onload = listenFormSubmit(ajaxRequest);
