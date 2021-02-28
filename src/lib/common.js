export const todayDate = (time) => {
  const date = new Date(Date.now() + 32400000);
  return date.toISOString().split('T')[0] === time.format('YYYY-MM-DD');
};
