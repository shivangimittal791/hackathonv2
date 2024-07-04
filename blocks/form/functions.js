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

function generateFunction() {
 window.alert('Hello World'); 
}
function generateFunction2() {
 window.alert('Hello World'); 
}
function generateFunction3() {
 window.alert('Hello World'); 
}
function generateFunction4() {
 window.alert('Hello World'); 
}
function generateFunction7() {
 window.alert('Hello World'); 
}
function generateFunction8() {
 window.alert('Hello World'); 
}
export { getFullName, days , generateFunction, generateFunction2, generateFunction3, generateFunction4, generateFunction7, generateFunction8};
