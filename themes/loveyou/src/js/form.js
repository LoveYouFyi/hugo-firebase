/**
 * AJAX Form Submissions (Vanilla JS)
 */

// Form listeners 'submit'
const listenFormSubmit = ajaxRequest => {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', ajaxRequest, false);
  });
}

// Radio listeners and check/uncheck
const radiosChecked = () => {
  // check/uncheck
  let radioCheck = event => {
    // uncheck all
    let grandParent = event.target.parentNode.parentNode; // get form parent element
    grandParent.querySelectorAll('.radio').forEach(e => {
      e.removeAttribute('checked');
    });
    // check selected
    event.target.setAttribute('checked', "true");
  };
  // Listeners (after above since need access to radioCheck)
  document.querySelectorAll('.radio').forEach(e => {
    e.addEventListener('click', radioCheck);
  });
}

// Notice (client-side)
const notice = (formId, action, delay, message) => {
  let parent = document.querySelector(formId).parentNode; // get form parent element
  let elements =  parent.querySelectorAll('.js-form-notice'); // select child elements
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

// Reset form values
const formReset = formId => {
  let parent = document.querySelector(formId).parentNode; // get form parent element
  let elements =  parent.querySelectorAll('input:not([type="hidden"]):not([type="radio"]), select, textarea'); // all <input>'s except hidden
  // set elements innerHTML to empty string
  elements.forEach(e => {
    e.value = '';
  });
}

// Serialize form for submit (longform because babel does not convert Object.values w/ 'reduce' for ie11)
const serializeForm = form => {
	// Setup our serialized data
	let serialized = {};
	// Loop through each field in the form
	for (let i = 0; i < form.elements.length; i++) {
		let field = form.elements[i];
    // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
    if (!field.name 
      || field.disabled 
      || field.type === 'file' 
      || field.type === 'reset' 
      || field.type === 'submit' 
      || field.type === 'button'
    ) continue; // 'continue 'jumps over' one iteration in the loop, here, it skips the element if not of this type
		// If a multi-select, get all selections
		if (field.type === 'select-multiple') {
			for (let n = 0; n < field.options.length; n++) {
				if (!field.options[n].selected) continue;
				let name = encodeURIComponent(field.name);
				let value = encodeURIComponent(field.options[n].value);

        let obj = { [field.name]: { type: field.type, value: field.options[n].value }};
        // serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
        serialized[obj];
			}
		}
		// Convert field data to a query string
		else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
      let name = encodeURIComponent(field.name);
      let type = encodeURIComponent(field.type);
      let value = encodeURIComponent(field.value);

      let obj = { [name]: { type, value }};
      // serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
      console.log("obj: ", obj);
      serialized[obj];
    }
  }
  console.log("serialized: ", serialized);
  return serialized;
//	return serialized.join('&');
};

// Ajax request
const ajaxRequest = event => {
  event.preventDefault(); // stop submit so input values do not get cleared before being able to act on them
  /**
   * Form data
   */
  let formId = '#' + event.currentTarget.id; // returns id without preceeding #
  let form = document.querySelector(formId);
  let formUrlAction = form.querySelector('[name=urlAction]').value;
  let formData = serializeForm(form);

  /**
   * Ajax Request Object
   */
  let xhr = new XMLHttpRequest();
  // initiate request = onloadstart
  xhr.onloadstart = function() {
    notice(formId, 'block', 0, 'Processing...'); 
  }
  // error sending request (not error returned with response)
  xhr.onerror = function () {
    notice(formId, 'block', 0, 'Error: Sorry, please try again or contact us by phone.'); 
  }
  // successful response = onload (any response from application including error)
  xhr.onload = function(event) {
    let res = event.target.response; // responseType set to json
    // error handling
    // ECMAScript 2020 check if property defined with '?' res?.message?.error because if undefined will error
    if (res?.message?.error) { 
      notice(formId, 'block', 0, 'Error: Sorry, please try again or contact us by phone.');
      console.error(res.message.error);
    }
    // if urlRedirect
    else if (res?.data?.redirect && res.data.redirect !== 'false') { // compare 'false' as string b/c not proper boolean
      window.location.href = res.data.redirect;
    } 
    // if no urlRedirect
    else {
      formReset(formId);
      notice(formId, 'none', 4000, 'Message Received!'); 
    } 
  }
  // Send Request
  xhr.open('POST', formUrlAction);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.responseType = 'json';
  xhr.send(formData);
}

document.onload = listenFormSubmit(ajaxRequest);
document.onload = radiosChecked();