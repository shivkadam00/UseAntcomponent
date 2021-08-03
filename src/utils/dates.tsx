import dayjs from 'dayjs';
export const dateTimeFormat = (date: string) =>
  dayjs(date).format('DD/MM/YYYY, HH:mm');

export const monthDateTime = (date: string) =>
  dayjs(date).format('MMM DD YYYY HH:mm');

export const age = (date: string) => dayjs().diff(dayjs(date), 'days');
