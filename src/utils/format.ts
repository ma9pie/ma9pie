import { Period } from '@/types';

export const formatDate = (str: string) => {
  const date = new Date(str);
  return `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}`;
};

export const formatPeriod = (period: Period) => {
  const [from, to] = period;
  const startDate = formatDate(from);
  const endDate = to ? formatDate(to) : '현재';
  return `${startDate} ~ ${endDate}`;
};
