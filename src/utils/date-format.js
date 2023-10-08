/**
 * @param {String} date - Date object to be formatted in format "YYYY-MM-DD HH:MM:SS"
 * @returns {String} - Formatted date string in format 24/10/2023
 */
export function dateFormater(date) {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}