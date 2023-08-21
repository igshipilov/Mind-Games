export default (max = 10, min = 1) => {
  const result = Math.floor(Math.random() * (max - min + 1) + min);

  return result;
};
