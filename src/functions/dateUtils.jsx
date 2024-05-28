import { format, toZonedTime } from 'date-fns-tz';

export default function formatDateToAEST (dateStr) {
  const date = new Date(dateStr);
  const timeZone = 'Australia/Melbourne'; // AEST timezone
  const zonedDate = toZonedTime(date, timeZone);
  return format(zonedDate, 'dd/MM/yy HH:mm', { timeZone });
};