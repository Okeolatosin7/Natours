/*let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("jonas");
console.log("23");

let firstName = "Jonas";
console.log(firstName);*/

// test data 1
// const markHeight = 1.69;
// const johnHeight = 1.95;
// const unitMeter = "m";
// console.log(markHeight + unitMeter);
// console.log(johnHeight + unitMeter);
// const markMass = 78;
// const johnMass = 92;
// const unitKilogram = "kg";
// console.log(markMass + unitKilogram, johnMass + unitKilogram);
// const markBMI = markMass / markHeight ** 2;
// console.log(markBMI);
// const johnBMI = johnMass / johnHeight ** 2;
// console.log(johnBMI);
// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// // test data 2
// const markHeight2 = 1.88;
// const johnHeight2 = 1.76;

// console.log(markHeight2 + unitMeter);
// console.log(johnHeight2 + unitMeter);
// const markMass2 = 95;
// const johnMass2 = 85;
// console.log(markMass2 + unitKilogram);
// console.log(johnMass2 + unitKilogram);
// const markBMI2 = markMass2 / markHeight2 ** 2;
// console.log(markBMI2);
// const johnBMI2 = johnMass2 / johnHeight2 ** 2;
// console.log(johnBMI2);
// const markHigherBMI2 = markBMI2 > johnBMI2;
// console.log(markHigherBMI2);

//template literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}! `;
// console.log(jonasNew);

//if else statement decision makin
// const age = 12;
// if (age >= 18) {
//   console.log("Sarah can start driving license ");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

//example 2
// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// test data 1
// const markHeight = 1.69;
// const johnHeight = 1.95;
// const unitMeter = "m";
// console.log(markHeight + unitMeter);
// console.log(johnHeight + unitMeter);
// const markMass = 78;
// const johnMass = 92;
// const unitKilogram = "kg";
// console.log(markMass + unitKilogram, johnMass + unitKilogram);
// const markBMI = markMass / markHeight ** 2;
// console.log(markBMI);
// const johnBMI = johnMass / johnHeight ** 2;
// console.log(johnBMI);
// // const markHigherBMI = markBMI > johnBMI;
// // console.log(markHigherBMI);
// if (markBMI > johnBMI) {
//   console.log(`mark's BMI (27.3) is higher than john's BMI (24.1)!`);
// } else {
//   console.log(`john's BMI (24.1) is higher than mark's BMI (27.3)!`);
// }

// // test data 2
// const markHeight2 = 1.88;
// const johnHeight2 = 1.76;

// console.log(markHeight2 + unitMeter);
// console.log(johnHeight2 + unitMeter);
// const markMass2 = 95;
// const johnMass2 = 85;
// console.log(markMass2 + unitKilogram);
// console.log(johnMass2 + unitKilogram);
// const markBMI2 = markMass2 / markHeight2 ** 2;
// console.log(markBMI2);
// const johnBMI2 = johnMass2 / johnHeight2 ** 2;
// console.log(johnBMI2);
// // const markHigherBMI2 = markBMI2 > johnBMI2;
// // console.log(markHigherBMI2);
// if (markBMI2 > johnBMI2) {
//   console.log(`mark's BMI (26.8) is higher than john's BMI (27.4)!`);
// } else {
//   console.log(`john's BMI (27.4) is higher than mark's BMI (26.8)!`);
// }

// const dolphins_score = (96, 108, 89);
// const koala_score = (88, 91, 110);
// const dolphinsAverageScore = (96 + 108 + 89) / 3;
// console.log(`Dolphins_average_score = ${dolphinsAverageScore}`);
// const koalaAverageScore = (88 + 91 + 110) / 3;
// console.log(`Koala_average_score = ${koalaAverageScore}`);
// if (dolphinsAverageScore > koalaAverageScore) {
//   console.log("Dolphins are the winners");
// } else if (dolphinsAverageScore === koalaAverageScore) {
//   console.log("The game was a draw between the Dolphins and Koalas");
// } else {
//   console.log("Koalas Wins the Competition");
// }

// dolphins_score = 97,112,101
// koalas_score = 109,95, 123
// const dolphinsAverageScore = (97 + 112 + 101) / 3;
// console.log(`Dolphins_average_score = ${dolphinsAverageScore}`);
// const koalaAverageScore = (109 + 95 + 123) / 3;
// console.log(`Koala_average_score = ${koalaAverageScore}`);
// if (dolphinsAverageScore > koalaAverageScore && dolphinsAverageScore >= 100) {
//   console.log("Dolphins are the winners");
// } else if (
//   dolphinsAverageScore === koalaAverageScore &&
//   dolphinsAverageScore >= 100 &&
//   koalaAverageScore >= 100
// ) {
//   console.log("The game was a draw between the Dolphins and Koalas");
// } else if (
//   koalaAverageScore > dolphinsAverageScore &&
//   koalaAverageScore >= 100
// ) {
//   console.log("Koalas Wins the Competition");
// } else {
//   console.log(`No one wins the trophy`);
// }

// const day = "monday";
// switch (day) {
//   case "monday":
//     console.log("plan course structure");
//     console.log("go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("prepare theory video");
//     break;
//   case "wednesday":
//   case "thurday":
//     console.log("write code example");
//     break;
//   case "friday":
//     console.log("record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("enjoy the weekend :d");
//     break;
//   default:
//     console.log("not a valid day");
// }

// const day = "monday";
// if (day === "monday") {
//   console.log("plan course structure");
//   console.log("go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("prepare theory video");
// } else if (day === "wednesday" || day === "thurday") {
//   console.log("write code example");
// } else if (day === "friday") {
//   console.log("record video");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("enjoy the weekend :d");
// } else {
//   console.log("not a valid day");
// }

// const bill = 330;
// let tip;
// if (bill >= 50 && bill <= 300) {
//   tip = bill * (15 / 100);
// } else {
//   tip = bill * (20 / 100);
// }
// console.log("Bill" + " = " + bill);
// console.log("Tip" + " = " + tip);
// const final_value = bill + tip;
// console.log("Final Value" + " = " + final_value);

// const bills = 275;
// const tips =
//   bills >= 50 && bills <= 300 ? bills * (15 / 100) : bills * (20 / 100);
// console.log(`Bills = ${bills}`);
// console.log(`Tip = ${tips} `);
// const final_value2 = bills + tips;
// console.log(`Final value = ${final_value2} `);
// console.log(
//   `Bills = ${bills}, Tips = ${tips} and Final value = ${bills + tips}`
// );

// function logger() {
//   console.log("My name is Jonas");
// }

// // calling /running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangesJuice = fruitProcessor(2, 4);
// console.log(appleOrangesJuice);

// declaration
// function calAge1(birthYeah) {
//   return 2037 - birthYeah;
// }

// const age1 = calAge1(1991);
// console.log(age1);

// // function (birthYeah){
// //   return 2037 - birthYeah
// // }

// // expression
// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// function expression
// const calcage2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// //arrow function
const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "jonas"));
console.log(yearsUntilRetirement(1991, "jonas"));

// calling Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applesPieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applesPieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const yearsUntilRetirement1 = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} retires in ${retirement} years`);
    return -1;
  }

  return retirement;
};
console.log(yearsUntilRetirement1(1991, "jonas"));
console.log(yearsUntilRetirement1(1950, "mike"));

// challenge 1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
console.log(calcAverage(44, 23, 71), calcAverage(65, 54, 49));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`The Dolphins wins the Cup(${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`The Koalas wins the Cup(${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins.........`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// array
const friend1 = "michael";
const friend2 = "steven";
const friend3 = "peter";

const friends = ["michael", "steven", "peter"];
console.log(friends);

// const years = new Array(1991, 1986, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends);

const jonas = ["jonas", "schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// exercise
const calcAge1 = function (birthYeah) {
  return 2037 - birthYeah;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age33 = calcAge1(years[years.length - 1]);
console.log(age1, age2, age33);

const ages = [calcAge1(years[0]), calcAge1(years[1])];
calcAge1(years[years.length - 1]);
console.log(ages);

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * (15 / 100);
  } else {
    return bill * (20 / 100);
  }
  // console.log(tip);
};
const bills = [125, 555, 44];

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);
console.log(tip1, tip2, tip3);

const tips = [tip1, tip2, tip3];
console.log(bills, tips);

const total1 = tip1 + bills[0];
const total2 = tip2 + bills[1];
const total3 = tip3 + bills[2];

const total = [total1, total2, total3];
console.log(total);

// introduction to object
// this is an array
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "peter", "Steven"],
];

// this is an object
const jonass = {
  firstName: "jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friend: ["Michael", "Peter", "Steven"],
};
console.log(jonass);
console.log(jonass.lastName);
console.log(jonass["lastName"]);

nameKey = "Name";
console.log(jonass["first" + nameKey]);
console.log(jonass["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about jonas? Choose between firstName, lastName, age, job, and friends"
);
console.log(interestedIn);

if (jonass[interestedIn]) {
  console.log(jonass[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends "
  );
}
jonass.location = "portugal";
jonass["Twitter"] = "@jonasschmedmann";
console.log = jonass;

// const id = {
//   name1 = 'jonas',
//   name2 = 'michael',
//   number = 3,

// }
