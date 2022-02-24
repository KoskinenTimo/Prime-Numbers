const router = require('express').Router();
const { createError, isPrime } = require('../utils/functions');


// Validating query strings with middleware before the endpoint handling
const queryValuesValidation = (req,res,next) => {

  const { action, number, numbers } = req.query;
  if (!action) {
    return next(createError(400,"Missing 'action' query string value"));
  }

  if (action !== "sumandcheck" && action !== "checkprime") {
    return next(createError(400,"Incorrect 'action' query string value"));
  }

  if (action === "sumandcheck" && !numbers) {
    return next(createError(400,"Missing 'numbers' query string value"));
  }

  if (numbers) {
    if (!numbers.match(/^[0-9,]+$/)) {
      return next(createError(400,"Incorrect 'numbers', use form '1,2,3,4'"));
    }
    const numberList = numbers.split(',');
    const parsedNumberList = numberList.map(numberString => parseInt(numberString));
    if (numbers && parsedNumberList.includes(NaN)) {
      return next(createError(400,"Incorrect 'numbers' query string value"));
    }
  }

  if(action === "checkprime" && !number) {
    return next(createError(400,"Missing 'number' query string value"));
  }

  if (number && !number.match(/^[0-9]+$/)) {
    return next(createError(400,"Incorrect 'number', only digits allowed"));
  }

  next();
};

router.get('/', queryValuesValidation, (req,res) => {
  const { action, numbers, number } = req.query;
  if (action === "checkprime") {
    const prime = isPrime(parseInt(number));
    return res.json({ isPrime: prime});
  }
  if (action === "sumandcheck") {
    const sum = numbers
      .split(',')
      .map(string => parseInt(string))
      .reduce((acc,add) => acc + add, 0);
    const prime = isPrime(sum);
    return res.json({ sum, isPrime: prime});
  }
});

module.exports = router;