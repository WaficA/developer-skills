// Remember, we're gonna use strict mode in all scripts now!
"use strict";

///////////////////////////////////////
// Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const tempratures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?
// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// PROBLEM 2:
// Function should now receive 2 arrays of temps
// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
// 2) Breaking up into sub-problems
// - Merge 2 arrays

function calcTempAmplitude(temp) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; ++i) {
    const curTemp = temp[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
}

const amplitude = calcTempAmplitude(tempratures);
console.log(amplitude);
///////////////////////////////////////
// Debugging with the Console and Breakpoints

// B) FIND

// A) IDENTIFY

// Using a debugger

// A) IDENTIFY


const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const allData = data1.concat(data2);

function printForcast(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; ++i) {
    const curTemp = arr[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
}

const amplitude2 = printForcast(allData);
console.log(amplitude2);
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1
// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

function mesurekelvin() {
  const messurment = {
    type: "temp",
    unit: "celcius",
    value: Number(prompt("degrees celcuis")),
  };
  console.log(messurment);
  console.log(typeof messurment.value);
  //console.warn(messurment);
  //console.error(messurment);
  //console.table(messurment);
  const kelvin = messurment.value + 273;
  return kelvin;
}
console.log(mesurekelvin(101));
