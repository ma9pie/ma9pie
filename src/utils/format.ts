import { Period } from '@/types';

export const formatDate = (str: string) => {
  const date = new Date(str.replace(/-/g, '/'));
  return `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}`;
};

export const formatWorkingPeriod = (period: Period) => {
  const [from, to] = period;
  const startDate = formatDate(from);
  const endDate = to ? formatDate(to) : '재직중';
  return `${startDate} ~ ${endDate}`;
};

export const formatProjectPeriod = (period: Period) => {
  const [from, to] = period;
  const startDate = formatDate(from);
  const endDate = to ? formatDate(to) : '상시 업데이트';
  return `${startDate} ~ ${endDate}`;
};
