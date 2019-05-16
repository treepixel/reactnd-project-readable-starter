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

export function sortBySelectedMethod(sortBy, data) {
  switch (sortBy) {
    case 'voteScore':
      return data.sort((a, b) => b.voteScore - a.voteScore);
    case 'date':
      return data.sort((a, b) => b.timestamp - a.timestamp);
    default:
      return data;
  }
}
