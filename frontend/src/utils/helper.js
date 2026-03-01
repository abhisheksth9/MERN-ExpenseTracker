export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) ;
}

export const addThousandsSeperator = (num) => {
    if (num == null || isNaN(num)) return "";

    const [integerPart, fractionalPart] = num.toString().split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g,",");

    return fractionalPart ? `${formattedInteger}.${fractionalPart}` : formattedInteger;
};

export const prepareExpensesBarChartData = (data = []) => {
  if (!Array.isArray(data)) return [];

  return data
    .filter(item => item?.category && item?.amount)
    .map(item => ({
      category: String(item.category),
      amount: Number(item.amount)
    }));
};
