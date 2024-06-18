export function getMaxDateString() {
  const date = new Date();
  const formattedMonth = (date.getMonth() + 1).toString().padStart(2, "0");

  return `${date.getFullYear()}-${formattedMonth}-${date.getDate()}`;
}
