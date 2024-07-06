/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`.trim();
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

/**
* Resets the entire form
* @name resetForm
* @param {scope} globals
*/
function resetForm(globals) {
    globals.functions.dispatchEvent(globals.form, 'reset');
}
/**
 * Fetches response from www.adobe.com, base64 decodes it, and sets it in the text input field.
 * @name fetchAndDecodeResponse
 * @param {scope} globals
 */
function fetchAndDecodeResponse(globals) {
    fetch('https://www.adobe.com')
        .then(response => response.text())
        .then(text => {
            const decodedText = atob(text);
            const textField = globals.form.textinput1720105123939;
            globals.functions.setProperty(textField, {value: decodedText});
            console.log("SUCCESS!!!")
        })
        .catch(error => {
            console.error('Error fetching or decoding response:', error);
        });
}
/**
* Reloads the page with specified query parameters.
* @name reloadWithQueryParams
* @param {scope} globals
*/
function reloadWithQueryParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
/**
* Reloads the page with specified query parameters.
* @name reloadWithCustomQueryParams
* @param {scope} globals
*/
function reloadWithCustomQueryParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
/**
 * Reloads the page with predefined query parameters.
 * @name reloadWithPredefinedParams
 * @param {scope} globals
 */
function reloadWithPredefinedParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
function generateFunction() {
 window.alert("Hello World"); 
}
/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`.trim();
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

/**
* Resets the entire form
* @name resetForm
* @param {scope} globals
*/
function resetForm(globals) {
    globals.functions.dispatchEvent(globals.form, 'reset');
}
/**
 * Fetches response from www.adobe.com, base64 decodes it, and sets it in the text input field.
 * @name fetchAndDecodeResponse
 * @param {scope} globals
 */
function fetchAndDecodeResponse(globals) {
    fetch('https://www.adobe.com')
        .then(response => response.text())
        .then(text => {
            const decodedText = atob(text);
            const textField = globals.form.textinput1720105123939;
            globals.functions.setProperty(textField, {value: decodedText});
            console.log("SUCCESS!!!")
        })
        .catch(error => {
            console.error('Error fetching or decoding response:', error);
        });
}
/**
* Reloads the page with specified query parameters.
* @name reloadWithQueryParams
* @param {scope} globals
*/
function reloadWithQueryParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
/**
* Reloads the page with specified query parameters.
* @name reloadWithCustomQueryParams
* @param {scope} globals
*/
function reloadWithCustomQueryParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
/**
 * Reloads the page with predefined query parameters.
 * @name reloadWithPredefinedParams
 * @param {scope} globals
 */
function reloadWithPredefinedParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
function generateFunction() {
 window.alert("Hello World"); 
}
/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`.trim();
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

/**
* Resets the entire form
* @name resetForm
* @param {scope} globals
*/
function resetForm(globals) {
    globals.functions.dispatchEvent(globals.form, 'reset');
}
/**
 * Fetches response from www.adobe.com, base64 decodes it, and sets it in the text input field.
 * @name fetchAndDecodeResponse
 * @param {scope} globals
 */
function fetchAndDecodeResponse(globals) {
    fetch('https://www.adobe.com')
        .then(response => response.text())
        .then(text => {
            const decodedText = atob(text);
            const textField = globals.form.textinput1720105123939;
            globals.functions.setProperty(textField, {value: decodedText});
            console.log("SUCCESS!!!")
        })
        .catch(error => {
            console.error('Error fetching or decoding response:', error);
        });
}
/**
* Reloads the page with specified query parameters.
* @name reloadWithQueryParams
* @param {scope} globals
*/
function reloadWithQueryParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
/**
* Reloads the page with specified query parameters.
* @name reloadWithCustomQueryParams
* @param {scope} globals
*/
function reloadWithCustomQueryParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
/**
 * Reloads the page with predefined query parameters.
 * @name reloadWithPredefinedParams
 * @param {scope} globals
 */
function reloadWithPredefinedParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
function generateFunction() {
 window.alert("Hello World"); 
}
/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`.trim();
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

/**
* Resets the entire form
* @name resetForm
* @param {scope} globals
*/
function resetForm(globals) {
    globals.functions.dispatchEvent(globals.form, 'reset');
}
/**
 * Fetches response from www.adobe.com, base64 decodes it, and sets it in the text input field.
 * @name fetchAndDecodeResponse
 * @param {scope} globals
 */
function fetchAndDecodeResponse(globals) {
    fetch('https://www.adobe.com')
        .then(response => response.text())
        .then(text => {
            const decodedText = atob(text);
            const textField = globals.form.textinput1720105123939;
            globals.functions.setProperty(textField, {value: decodedText});
            console.log("SUCCESS!!!")
        })
        .catch(error => {
            console.error('Error fetching or decoding response:', error);
        });
}
/**
* Reloads the page with specified query parameters.
* @name reloadWithQueryParams
* @param {scope} globals
*/
function reloadWithQueryParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
/**
* Reloads the page with specified query parameters.
* @name reloadWithCustomQueryParams
* @param {scope} globals
*/
function reloadWithCustomQueryParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
/**
 * Reloads the page with predefined query parameters.
 * @name reloadWithPredefinedParams
 * @param {scope} globals
 */
function reloadWithPredefinedParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
function generateFunction() {
 window.alert("Hello World"); 
}
/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`.trim();
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

/**
* Resets the entire form
* @name resetForm
* @param {scope} globals
*/
function resetForm(globals) {
    globals.functions.dispatchEvent(globals.form, 'reset');
}
/**
 * Fetches response from www.adobe.com, base64 decodes it, and sets it in the text input field.
 * @name fetchAndDecodeResponse
 * @param {scope} globals
 */
function fetchAndDecodeResponse(globals) {
    fetch('https://www.adobe.com')
        .then(response => response.text())
        .then(text => {
            const decodedText = atob(text);
            const textField = globals.form.textinput1720105123939;
            globals.functions.setProperty(textField, {value: decodedText});
            console.log("SUCCESS!!!")
        })
        .catch(error => {
            console.error('Error fetching or decoding response:', error);
        });
}
/**
* Reloads the page with specified query parameters.
* @name reloadWithQueryParams
* @param {scope} globals
*/
function reloadWithQueryParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
/**
* Reloads the page with specified query parameters.
* @name reloadWithCustomQueryParams
* @param {scope} globals
*/
function reloadWithCustomQueryParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
/**
 * Reloads the page with predefined query parameters.
 * @name reloadWithPredefinedParams
 * @param {scope} globals
 */
function reloadWithPredefinedParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
function generateFunction() {
 window.alert("Hello World"); 
}
/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`.trim();
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

/**
* Resets the entire form
* @name resetForm
* @param {scope} globals
*/
function resetForm(globals) {
    globals.functions.dispatchEvent(globals.form, 'reset');
}
/**
 * Fetches response from www.adobe.com, base64 decodes it, and sets it in the text input field.
 * @name fetchAndDecodeResponse
 * @param {scope} globals
 */
function fetchAndDecodeResponse(globals) {
    fetch('https://www.adobe.com')
        .then(response => response.text())
        .then(text => {
            const decodedText = atob(text);
            const textField = globals.form.textinput1720105123939;
            globals.functions.setProperty(textField, {value: decodedText});
            console.log("SUCCESS!!!")
        })
        .catch(error => {
            console.error('Error fetching or decoding response:', error);
        });
}
/**
* Reloads the page with specified query parameters.
* @name reloadWithQueryParams
* @param {scope} globals
*/
function reloadWithQueryParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
/**
* Reloads the page with specified query parameters.
* @name reloadWithCustomQueryParams
* @param {scope} globals
*/
function reloadWithCustomQueryParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}
/**
 * Reloads the page with predefined query parameters.
 * @name reloadWithPredefinedParams
 * @param {scope} globals
 */
function reloadWithPredefinedParams(globals) {
    const queryParams = new URLSearchParams({
        abc: 'def',
        uvw: 'xyz'
    });
    window.location.search = queryParams.toString();
}

function generateFunction() {
 window.alert("Hello World"); 
}
function generateFunction34() {
 window.alert("Hello World"); 
}
function generateFunction456() {
 window.alert("Hello World"); 
}
export { getFullName, days, resetForm, fetchAndDecodeResponse, reloadWithQueryParams, reloadWithCustomQueryParams, reloadWithPredefinedParams, generateFunction, generateFunction34, generateFunction456};