/**
 * AJAX Form Submissions (Vanilla JS)
 */

// Form listeners 'submit'
let listenFormSubmit = ajaxRequest => {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', ajaxRequest, false);
  })
}

// Alerts (client-side)
let alert = (formId, action, delay, message) => {
  let parent = document.querySelector(formId).parentNode; // get form parent element
  let elements =  parent.querySelectorAll('.js-form-alerts'); // select child elements
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

// Clear form values
let formValuesClear = formId => {
  let parent = document.querySelector(formId).parentNode; // get form parent element
  let elements =  parent.querySelectorAll('input, textarea'); // select child elements
  // set elements innerHTML to empty string
  elements.forEach(e => {
    e.value = '';
  });
}

// Serialize form for submit (longform because babel does not convert Object.values w/ 'reduce' for ie11)
let serializeForm = form => {
	// Setup our serialized data
	let serialized = [];
	// Loop through each field in the form
	for (let i = 0; i < form.elements.length; i++) {
		let field = form.elements[i];
		// Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
    if (!field.name || field.disabled || field.type === 'file' || 
      field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue; // 'continue 'jumps over' one iteration in the loop, here, it skips the element if not of this type
		// If a multi-select, get all selections
		if (field.type === 'select-multiple') {
			for (let n = 0; n < field.options.length; n++) {
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

// Ajax request
let ajaxRequest = event => {
  event.preventDefault(); // stop submit so input values do not get cleared before being able to act on them
  let formId = '#' + event.currentTarget.id; // returns id without preceeding #
  let form = document.querySelector(formId);
  let formUrlAction = form.querySelector('[name=urlAction]').value;
  let formData = serializeForm(form);
  // Ajax Request Object
  let xhr = new XMLHttpRequest();
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
    let res = JSON.parse(xhr.response); // response is string, so convert to json
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
