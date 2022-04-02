const { format, formatDistance, intervalToDuration } = require('date-fns');
const { es } = require('date-fns/locale');
const formatISO = require('date-fns/formatISO');

const milisecondsToHours = (seconds) => {
  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });
  return `${duration.hours}h ${duration.minutes}m`;
};

const distanceDate = (date, nowDate) => {
  const distance = formatDistance(new Date(date), nowDate, { addSuffix: true, locale: es });
  return distance;
};

const formatDate = (date) => {
  const result = format(new Date(date), 'dd/MM/yyyy');
  return result;
};
const onlyDateInformatISO = (date) => {
  const result = formatISO(date, { representation: 'date' });
  return result;
};

module.exports = {
  milisecondsToHours, distanceDate, formatDate, onlyDateInformatISO,
};
