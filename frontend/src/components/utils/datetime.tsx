import { format, parseISO } from 'date-fns';
import { uz } from 'date-fns/locale';

export function DateTime({ datetime }: { datetime: string }) {
  const date = parseISO(datetime);
  return <time dateTime={datetime}>{format(date, 'd LLLL yyyy HH:mm', { locale: uz })}</time>;
}

export function Time({ datetime }: { datetime: string }) {
  const date = parseISO(datetime);
  return <time dateTime={datetime}>{format(date, 'HH:mm', { locale: uz })}</time>;
}

export function formatTime(datetime: string) {
  return format(parseISO(datetime), 'd-MMMM, HH:mm', { locale: uz });
}

export function compareDateTime(datetime1: string, datetime2: string) {
  return parseISO(datetime1) > parseISO(datetime2);
}
