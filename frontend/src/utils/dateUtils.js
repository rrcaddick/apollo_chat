const formatChatTime = (date) => {
  const dateObj = new Date(+date);
  if (dateObj.toDateString() === new Date().toDateString()) {
    return dateObj.toLocaleString("default", { hour: "2-digit", minute: "2-digit", hour12: true });
  }
  return new Date(+date).toLocaleDateString("default", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

export { formatChatTime };
