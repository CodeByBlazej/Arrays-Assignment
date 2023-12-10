const numbers = [10, 2, 4, 1, 20, 32];

const filteredNumbers = numbers.filter(numbers => numbers > 5);
console.log(filteredNumbers);

const newMap = numbers.map(val => ({num: val}));
console.log(newMap);

for (const number of numbers.entries()) {
  console.log(number);
}

const multiplication = numbers.reduce(
  (curResult, curValue) => curResult * curValue,
  1
);
console.log(multiplication);

function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax
}
console.log(findMax(...numbers));

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax]
}

const [min, max] = findMinMax(...numbers);

console.log(min, max);

const userIds = new Set();
userIds.add(10);
userIds.add(-2);
userIds.add(-5);

console.log(userIds);


