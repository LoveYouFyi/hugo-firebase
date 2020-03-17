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

// Messages (client-side)
const message = (formId, action, delay, message) => {
  let parent = document.querySelector(formId).parentNode; // get form parent element
  let elements =  parent.querySelectorAll('.js-form-message'); // select child elements
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
  // all <input>'s except hidden and radio
  let elements =  parent.querySelectorAll('input:not([type="hidden"]):not([type="radio"]), select, textarea'); 
  // Inputs, selects, and textareas: set elements innerHTML to empty string
  elements.forEach(e => {
    e.value = '';
  });
  // Radios: select first radio of group
  let radios =  parent.querySelectorAll('[love-wrapper="radio"] .radio'); 
  console.log("radios: ", radios);
  radios.forEach(e => {
    e.removeAttribute('checked');
  });
  radios[0].setAttribute('checked', "true");
  radios[0].click(); // Only way to visually show the first item as clicked;
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
		// Convert field data to a query string
		if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
      serialized[field.name] = { type: field.type, value: field.value };
    }
  }
  serialized = JSON.stringify(serialized);
  return serialized;
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
    message(formId, 'block', 0, 'Processing...'); 
  }
  // error sending request (not error returned with response)
  xhr.onerror = function () {
    message(formId, 'block', 0, 'Error: Sorry, please try again or contact us by phone?'); 
  }
  // successful response = onload (any response from application including error)
  xhr.onload = function(event) {
    let res = event.target.response; // responseType set to json
    // error handling
    // ECMAScript 2020 check if property defined with '?' res?.message?.error because if undefined will error
    if (res?.error?.message) { 
      message(formId, 'block', res.error.message.timeout, res.error.message.text);
      console.error(res.error.message.text);
    }
    // if urlRedirect
    else if (res?.data?.redirect && res.data.redirect !== 'false') { // compare 'false' as string b/c not proper boolean
      formReset(formId);
      window.location.href = res.data.redirect;
    } 
    // if no urlRedirect
    else {
      formReset(formId);
      message(formId, 'none', res.data.message.timeout, res.data.message.text);
    } 
  }
  // Send Request
  xhr.open('POST', formUrlAction);
  xhr.setRequestHeader('Content-Type', 'text/plain');
  xhr.responseType = 'json';
  xhr.send(formData);
}

document.onload = listenFormSubmit(ajaxRequest);
document.onload = radiosChecked();