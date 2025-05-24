'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const oldDate = date.split(fromFormat[3]);
  const day = oldDate[fromFormat.indexOf('DD')];
  const month = oldDate[fromFormat.indexOf('MM')];
  const oldIndexYear = fromFormat.includes('YYYY')
    ? fromFormat.indexOf('YYYY')
    : fromFormat.indexOf('YY');
  const newIndexYear = toFormat.includes('YYYY')
    ? toFormat.indexOf('YYYY')
    : toFormat.indexOf('YY');

  const newFormat = [];

  newFormat[toFormat.indexOf('DD')] = day;
  newFormat[toFormat.indexOf('MM')] = month;

  if (fromFormat[oldIndexYear] === toFormat[newIndexYear]) {
    newFormat[newIndexYear] = oldDate[oldIndexYear];

    return newFormat.join(toFormat[3]);
  }

  if (fromFormat[oldIndexYear].length === 4) {
    newFormat[newIndexYear] = oldDate[oldIndexYear].slice(2);
  } else {
    newFormat[newIndexYear] =
      oldDate[oldIndexYear] < 30
        ? `20${oldDate[oldIndexYear]}`
        : `19${oldDate[oldIndexYear]}`;
  }

  return newFormat.join(toFormat[3]);
}

module.exports = formatDate;
