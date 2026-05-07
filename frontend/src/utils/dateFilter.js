const getDateRange = (range) => {
  const now = new Date();
  let start;

  switch (range) {
    case "daily":
      start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      break;

    case "weekly": {
      const today = new Date(); // 👈 NEW object
      const day = today.getDay();
      const diff = today.getDate() - day;

      start = new Date(today.getFullYear(), today.getMonth(), diff);
      break;
    }

    case "monthly":
      start = new Date(now.getFullYear(), now.getMonth(), 1);
      break;

    case "yearly":
      start = new Date(now.getFullYear(), 0, 1);
      break;

    default:
      start = new Date(now.getFullYear(), now.getMonth(), 1);
  }

  return { start, end: new Date() };
};

export default getDateRange;