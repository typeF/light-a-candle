// return 'minutes ago'
export default function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  const interval = Math.floor(seconds / 60);
  return interval > 1 ? `${interval} minutes ago` : "just now";
}
