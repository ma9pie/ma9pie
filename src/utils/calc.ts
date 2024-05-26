export const calcCareerYears = (startDate: string) => {
  const fromDate = new Date(startDate).getTime();
  const toDate = new Date().getTime();
  const diff = toDate - fromDate;
  const msPerYear = 365.25 * 24 * 60 * 60 * 1000;
  const careerYears = Math.floor(diff / msPerYear) + 1;
  return careerYears;
};
