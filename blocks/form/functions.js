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
* Reloads the page with specific query parameters.
* @name reloadWithQueryParams
* @param {scope} globals
*/
function reloadWithQueryParams(globals) {
    var queryParams = "mrkto=unsubscribe";
    var currentUrl = window.location.href;
    var baseUrl = currentUrl.split('?')[0];
    var newUrl = baseUrl + "?" + queryParams;
    window.location.href = newUrl;
}

/**
* test
* @name test
* @param {object} field
* @return {array} array
*/
function test(field) {
    console.log("test");
  	return [{'abc',123}];
}
export { getFullName, days, reloadWithQueryParams, test};
