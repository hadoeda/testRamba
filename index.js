const R = require("ramda");

//data
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log("Data:", arr);

//ramda filter
const isEven = value => value % 2 === 0;
const evenFilter = R.filter(isEven);


console.log("Evens:", evenFilter(arr));

//array min max sum
const iif  = R.curry((predicate, acc, value) => predicate(acc, value) ? value : acc);
const more = (acc, value) => value > acc;
const maxArr = R.reduce(iif(more), Number.MIN_VALUE);
const minArr = R.reduce(iif(R.complement(more)), Number.MAX_VALUE);

const minMaxSum = array => maxArr(array) + minArr(array);
console.log("Min max sum:", minMaxSum(arr));