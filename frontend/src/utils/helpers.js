export function formatDate(timestamp) {
  const d = new Date(timestamp);
  return d.toLocaleDateString();
}
