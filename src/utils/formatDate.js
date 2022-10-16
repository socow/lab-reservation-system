export function formatDate(dateObject) {
  let year = dateObject.getFullYear();

  let month = dateObject.getMonth() + 1;
  month = month.toString();
  month = month.length === 1 ? `0${month}` : month;

  let day = dateObject.getDate();
  day = day.toString();
  day = day.length === 1 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
}
