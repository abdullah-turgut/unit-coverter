/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputNum = document.querySelector('#input-number');
const btnConvert = document.querySelector('#convert-btn');
const ulList = document.querySelectorAll('.conversion');

const unitArr = [3.281, 0.264, 2.204];
const desc = [
  ['meters', 'feet'],
  ['liters', 'gallons'],
  ['kilograms', 'pounds'],
];

btnConvert.addEventListener('click', () => {
  let num = Number(inputNum.value);
  ulList.forEach(
    (p, index) =>
      (p.textContent = `${num} ${desc[index][0]} = ${(
        num * unitArr[index]
      ).toFixed(3)} ${desc[index][0]}  |  ${num} ${desc[index][1]} = ${(
        num / unitArr[index]
      ).toFixed(3)} ${desc[index][1]}`)
  );
});
