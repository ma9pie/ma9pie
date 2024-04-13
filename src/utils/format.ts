import moment from 'moment';

import { Period } from '@/types';

export const formatDate = (date: string) => {
  return moment(date).format('YYYY.MM');
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
