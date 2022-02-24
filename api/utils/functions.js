const createError = (status=500, message="There was an error") => {
  const error = new Error();
  error.status = status;
  error.message = message;
  return error;
};

const isPrime = (number) => {
  if (number < 2) return false;
  const sqrtOfNum = Math.sqrt(number);
  for (let i = 2;  i <= sqrtOfNum; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = {
  createError,
  isPrime
};