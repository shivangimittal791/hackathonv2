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
 * Reloads the page with specific query parameters.
 * @name reloadWithQueryParams
 * @param {scope} globals
 */
function reloadWithQueryParams(globals) {
    const queryParams = "mrkto=unsubscribe";
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.includes('?') ? currentUrl.split('?')[0] : currentUrl;
    window.location.href = `${baseUrl}?${queryParams}`;
}
/**
 * Fetch customer information and update fields
 * @name fetchAndUpdateCustomerInfo
 * @param {scope} globals
 */
function fetchAndUpdateCustomerInfo(globals) {
    const username = 'admin';
    const password = 'admin';
    const url = 'https://hackathon.free.beeceptor.com/customerinfo';
    const headers = new Headers({
        'Authorization': 'Basic ' + btoa(username + ':' + password),
        'Content-Type': 'application/json'
    });

    fetch(url, { method: 'GET', headers: headers })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const customer = data.customer;
            if (customer) {
                const aadharBase64Decoded = atob(customer.aadhar);
                const nameBase64Decoded = atob(customer.name);
                const aadharField = globals.form.$id('numberinput-c4e15a6f99');
                const nameField = globals.form.$id('textinput-fa51dd7282');
                if (aadharField && nameField) {
                    globals.functions.setProperty(aadharField, { value: aadharBase64Decoded });
                    globals.functions.setProperty(nameField, { value: nameBase64Decoded });
                }
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
export { getFullName, days, resetForm, reloadWithQueryParams, fetchAndUpdateCustomerInfo};
