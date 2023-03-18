export const formatDate = (dateString) => {
  const date = new Date(dateString);
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }
  const year = date.getFullYear();
  const month = padTo2Digits(date.getMonth() + 1);
  const day = padTo2Digits(date.getDate());
  return `${day}-${month}-${year}`;
};

export const hideEmail = (email) => {
  const splitted = email.split("@");
  const firstPart = splitted[0];
  const secondPart = splitted[1];
  const firstPart1 = firstPart.substring(0, 2);
  const firstPart2 = firstPart.substring(firstPart.length - 1);
  const res = `${firstPart1}...${firstPart2}@${secondPart}`;
  return res;
};
