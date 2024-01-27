const _ = require("lodash");

// Generate a random number between 1 and 10
console.log(_.random(1, 10));

// Retrieve the first and last elements from an array
console.log(_.first(numbers)); // Output: 1
console.log(_.last(numbers)); // Output: 10

// Split an array into chunks of a specified size
const chunk = _.chunk(numbers, 3);
console.log(chunk);

// Find the difference between two arrays
const diff = _.difference(numbers, [1, 2, 3]);
console.log(diff);

// Drop the first n elements from an array
const drop = _.drop(numbers, 5);
console.log(drop);

// Take the first n elements from an array
const take = _.take(numbers, 5);
console.log(take);

// Create an array with a specified length, filled with a specified value
const fill = _.fill(Array(20), "a");
console.log(fill);

// Flatten a nested array to a single level
const flatten = _.flatten(chunk);
console.log(flatten);

// Flatten a nested array up to a specified depth
const flattenDepth = _.flattenDepth(num, 1);
console.log(flattenDepth);

// Flatten a deeply nested array to a deep last level
const flattendeep = _.flattenDeep(num);
console.log(flattendeep);

// Find the intersection and union of two arrays
//intersection give similar element in the console 
//and union give all element in the console of both the array of c and d 
const c = [1, 2, 4];
const d = [2, 3, 4];
console.log(_.intersection(c, d));
console.log(_.union(c, d));

// Count occurrences of each gender in the employees array

console.log(_.countBy(employees, "gender"));

// Group the employees array by gender
console.log(_.groupBy(employees, "gender"));

// Order the employees array by birthdate and salary
console.log(_.orderBy(employees, "birthdate", "desc"));
const maxSalaryOrdered = _.orderBy(employees, "salary", "desc");
const top3 = _.take(maxSalaryOrdered, 3);
console.log(top3);

// Create an object keyed by employee id from the employees array
console.log("keyby", _.keyBy(employees, "id"));

// Map the top 3 employees to arrays of names and salaries
const top3Names = _.map(top3, "name");
const top3Salaries = _.map(top3, (obj) => ({
  name: obj.name,
  salary: obj.salary,
}));
console.log(top3Names);
console.log(top3Salaries);

// Calculate the total salary of all employees
const totalSalary = _.reduce(employees, (prev, curr) => prev + curr.salary, 0);
console.log(totalSalary);

// Group the employees array by gender and calculate total salary for each gender
const grpByGender = _.groupBy(employees, "gender");
const totalSalByGender = _.map(grpByGender, (grp) => ({
  salary: _.reduce(grp, (prev, curr) => prev + curr.salary, 0),
  gender: grp[0].gender,
}));
console.log(totalSalByGender);

// Concatenate two arrays and other values
const concatResult = _.concat(employees, [c, d]);
console.log(concatResult);
