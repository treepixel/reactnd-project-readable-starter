export function formatDate(timestamp) {
  const d = new Date(timestamp);
  return d.toLocaleDateString();
}

export function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}
