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

const formatLastSeenDate = (date) => {
  const today = new Date();

  // Today
  if (date.toDateString() === today.toDateString()) return "today";

  // Yesterday
  if (date.toDateString() === new Date(new Date().setDate(new Date().getDate() - 1)).toDateString()) return "yesterday";

  // Within the last week
  if (date > new Date(new Date().setDate(new Date().getDate() - 7)))
    return `on ${date.toLocaleDateString("default", { weekday: "short" })}`;

  // Logner than a week ago
  return `on ${new Date(+date).toLocaleDateString("default", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  })}`;
};

const formatLastSeen = (isOnline, date, mobile = false) => {
  if (isOnline) return "Online";

  const lastSeenDate = new Date(+date);
  const time = lastSeenDate.toLocaleString("default", { hour: "2-digit", minute: "2-digit", hour12: false });

  if (mobile) return `Seen ${formatLastSeenDate(lastSeenDate)}: ${time}`;

  return `Last seen ${formatLastSeenDate(lastSeenDate)} at: ${time}`;
};

export { formatChatTime, formatLastSeen };
