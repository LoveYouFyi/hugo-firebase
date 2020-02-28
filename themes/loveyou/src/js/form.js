/*!
 * Serialize all form data into a query string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   form The form to serialize
 * @return {String}      The serialized form data
 */
var serialize = function (form) {

	// Setup our serialized data
	var serialized = [];

	// Loop through each field in the form
	for (var i = 0; i < form.elements.length; i++) {

		var field = form.elements[i];

		// Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
		if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

		// If a multi-select, get all selections
		if (field.type === 'select-multiple') {
			for (var n = 0; n < field.options.length; n++) {
				if (!field.options[n].selected) continue;
				serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
			}
		}

		// Convert field data to a query string
		else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
			serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
		}
	}

	return serialized.join('&');

};

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
  var me = Object.values(form).reduce((string, field) => { 
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
  // name=hi&phone=8&email=hi%40hi.com&message=hi&__unique_form_id__=uGzCUH4i736nVE2Llagx&form-nonce=4b7729d1b665f20936568384d0238fb0&app=AJAXMGCXSg6fbLgteaWDLnTwL2EC3Kj7y4kDWqGU4Vzcq8UQKAzfZvJ4xkjTv8GjXKvdEs6BHGjU&template=contactDefault&webformId=contact1
  xhr.send(me);
}

listenFormSubmit('#contact', ajaxRequest);


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
//
// listenForm('#contact', submitFormContact);
//

//
//
// END: Contact Form: Submit to database to send on to email address
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

