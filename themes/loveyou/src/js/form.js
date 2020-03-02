/**
 * AJAX Vanilla
 */

// Form 'submit' listeners
function listenFormSubmit(ajaxRequest) {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', ajaxRequest, false);
  })
}

// Success messages (called after AJAX Success)
function indicateSuccess(formId) {
  var parent = document.querySelector(formId).parentNode; // get form parent element
  var elementSuccess =  parent.querySelectorAll('.js-form-success'); // select child elements
  // display messages
  elementSuccess.forEach(form => {
    form.style.display = 'block';
  });
  // hide messages after x time
  setTimeout(function(){
    elementSuccess.forEach(form => {
      form.style.display = 'none';
    });
  }, 4000); 
}

function indicateError(formId) {
  var parent = document.querySelector(formId).parentNode; // get form parent element
  var elementSuccess =  parent.querySelectorAll('.js-form-error'); // select child elements
  // display messages
  elementSuccess.forEach(form => {
    form.style.display = 'block';
  });
}

function indicators(formId, className, action) {
  var parent = document.querySelector(formId).parentNode; // get form parent element
  var elementSuccess =  parent.querySelectorAll(className); // select child elements
  // display messages
  elementSuccess.forEach(form => {
    form.style.display = action;
  });
}

function ajaxRequest(event) {
  event.preventDefault(); // stop submit so input values do not get cleared before being able to act on them
  const formId = '#' + event.currentTarget.id; // returns id without preceeding #
  const form = document.querySelector(formId);
  let url = "";
  // Serialize form as string (could also be json?):
  // name=Jimmy Flash&phone=999.555.1212&email=jimmy@flash.com&message=Hey, how are you doing?&template=contactDefault& etc...
  // ie11 cannot use Object.values and babel is not transpiling it
  var formData = Object.values(form).reduce((string, field) => { 
    if (field.name == 'actionUrl') {
      url = field.value;
    }
    string += field.name + '=' + field.value + '&'; 
    return string;
  }, '');

  // Ajax Request Object
  var xhr = new XMLHttpRequest();
  // initiate request = onloadstart
  xhr.onloadstart = function() {
//    indicateRequestStart(formId); 
    indicators(formId, '.js-form-progress', 'block'); 
  }
  // error returned with response = onerror
  xhr.onerror = function () {
    //indicateError(formId); 
    indicators(formId); 
  }
  // successful response = onload
  xhr.onload = function() {
    var res = JSON.parse(xhr.response); // response is string, so convert to json
    // if urlRedirect value is 'false' do not redirect, otherwise redirect to url
    if (res.data.redirect !== 'false') { // compare 'false' as string b/c not proper boolean
      window.location.href = res.data.redirect;
    } else {
      indicators(formId, '.js-form-progress', 'none'); 
      indicateSuccess(formId);
    }
  }

  // Send Request
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(formData);
}

document.onload = listenFormSubmit(ajaxRequest);
