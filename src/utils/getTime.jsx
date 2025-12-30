export const getTime = (time) => {
  const diff = Math.floor(Date.now() / 1000) - time;

  if (diff < 3600) {
    return `${Math.floor(diff / 60)} min ago`;
  }

  return `${Math.floor(diff / 3600)} h ago`;
};
