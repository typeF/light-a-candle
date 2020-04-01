const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function formatDate(date) {
  const d = new Date(date);
  let month = monthNames[d.getMonth()];
  let day = "" + d.getDate();
  const year = d.getFullYear();

  if (day.length < 2) day = "0" + day;

  return [month, day, year].join(" ");
}
