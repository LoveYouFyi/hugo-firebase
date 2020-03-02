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
function successNotice(formId) {
  var parent = document.querySelector(formId).parentNode; // get form parent element
  var elementSuccess =  parent.querySelectorAll('.js-success-form'); // select child elements
  // display messages
  elementSuccess.forEach(form => {
    form.style.display = 'block';
  });
  // hide messages after x time
  setTimeout(function(){
    elementSuccess.forEach(form => {
      form.style.display = 'none';
    });
  }, 5000); 
}


function ajaxRequest(event) {
  event.preventDefault(); // stop submit so input values do not get cleared
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

  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var res = JSON.parse(xhr.response); // response is string, so convert to json
    // if urlRedirect value is 'false' do not redirect, otherwise redirect to url
    if (res.data.redirect !== 'false') { // compare 'false' as string b/c not proper boolean
      window.location.href = res.data.redirect;
    } else {
      successNotice(formId);
    }
  }

  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(formData);
}

document.onload = listenFormSubmit(ajaxRequest);