// console.log('${100/2}');
// console.log('ab' > 'Xasd');
// console.log(null == undefined);
// document.getElementById("demo").innerHTML = "${100/2}";
// prompt("Says:");
// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of " + theNumber * theNumber);

// let str = "";
// for(let i = 1; i <= 8; i++){
//     for(let j = 1; j <=8; j++){
//         if ((i+j) % 2 != 0) {
//             str += '#';
//         }else{
//             str += " ";
//         }
//     }
//     str += "\n";
// }
// console.log(str);

// let x = 10;
// if(true){
//     let y = 20;
//     var z = 10;
// }
// console.log(y);
// console.log(x+z);

// const hummus = function(factor) {
//     const ingredient = function(amount, unit, name) {
//       let ingredientAmount = amount * factor;
//       if (ingredientAmount > 1) {
//         unit += "s";
//       }
//       console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//     ingredient(1, "can", "chickpeas");
//     ingredient(0.25, "cup", "tahini");
//     ingredient(0.25, "cup", "lemon juice");
//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(0.5, "teaspoon", "cumin");
//   };
//   hummus(0.1);


// const functionName = (text) => console.log(text);
// let functionName = function(text){
//     console.log(text);
// };
// function functionName(text){
//     console.log(text);
// }
// const functionName = (text) => {
//   console.log(text);
// }
// functionName("hello World");


// function multiplier(factor) {
//     return number => number * factor;
//   }
// let twice = multiplier(2);
// console.log(twice(15));

//Count Bs
// const countBs = function (str){
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == 'B') {
//             count++;
//         }
//     }
//     return count;
// };

// const countChar = function (str,letter){
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == letter) {
//             count++;
//         }
//     }
//     return count;
// };

// console.log(countBs("BBC"));
// console.log(countChar("kakkerlak", "k"));

// console.log(null.length);

// let doh = "don";
// console.log(typeof doh.toUpperCase);
// console.log(doh.toUpperCase());

//Classes And Objects
//Making Objects
// let obj1 = {
//     element_1 : false,
//     element_2 : [1,2,3,"sda"],
//     "element 4": "this is element 4"
// };
// obj1.element_3 = true;
// console.log(obj1.element_3);
// delete obj1.element_1;
// console.log("element_1" in obj1);
// console.log(obj1["element 4"]);
// console.log(Object.keys({x: 0, y: 0, z : 3}));
// let t = Object.keys({x: 0, y: 0, z : 3});
// console.log(t[1]);
// let ObjectA = {
//     a: 1,
//     b: 2
// };
// Object.assign(ObjectA,{x: 3, y: 5, z: 9, a: 4});
// console.log(ObjectA);
// console.log(typeof []);
//Array of objects
// let journal = [
//     {events: ["work", "touched tree", "pizza",
//               "running", "television"],
//      squirrel: false},
//     {events: ["work", "ice cream", "cauliflower",
//               "lasagna", "touched tree", "brushed teeth"],
//      squirrel: false},
//     {events: ["weekend", "cycling", "break", "peanuts",
//               "beer"],
//      squirrel: true},
//     /* and so on... */
// ];
// console.log(journal[1]);
//Types of array traversal Via loops
// for (let i = 0; i < journal.length; i++) {
//     let entry = journal[i];
//     // Do something with entry
// }
// for (let entry of journal) {
//     console.log(`${entry.events.length} events.`);
// }
// let sentence = "Secretarybirds specialize in stomping";
// let words = sentence.split(" ");
// console.log(words);
// console.log(words.join());
// let {name} = {
//     name: "tyagi",
//     age:  19
// };
// console.log(name);
//Ch-4 : EXERCISE
//Sum Of Range
// function range(start, end, step = start > end ? 1 : -1) {
//     let array = [];
//     if(step > 0){
//         for (let i = start; i <= end; i += step) array.push(i);
//     }else {
//         for (let i = start; i >= end; i += step) array.push(i);
//     }
//     return array;
// }
// function sum(array) {
//     let sum = 0;
//     array.forEach(element => {
//         sum += element;
//     });
//     return sum;
// }
// console.log(range(1,10));
// console.log(range(5,2,-1));
// console.log(sum(range(1,10)));
//Reverse Array
// function reverseArray(array) {
//     let arrayTemp = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         arrayTemp.push(array[i]); 
//     }
//     return arrayTemp;
// }
// function reverseArrayInplace(array) {
//     for (let i = 0; i < Math.floor(array.length / 2); i++) {
//         let temp = array[i];
//         array[i] = array[array.length - i - 1];
//         array[array.length - i - 1] = temp;
//     }
// }
// console.log(reverseArray(["A","B","C","D"]));
// let array = [1,2,3,4,5];
// reverseArrayInplace(array);
// console.log(array);
// function arrayToList(array) {
//     list = null;
//     for (let i = array.length - 1; i >= 0; i--) {
//         list = {
//             value : array[i],
//             next : list
//         }
//     }
//     return list;
// }
// function listToArray(list) {
//     let array = [];
//     while (list) {
//         array.push(list.value);
//         list = list.next;
//     }
//     return array;
// }
// function prepend(x, list) {
//     next = list;
//     list = {
//         value : x,
//         next : list
//     }
//     return list;
// }
// function nth(list, pos) {
//     let i = 0;
//     while (list) {
//         if (i == pos) {
//             return list.value;
//         }
//         list = list.next;
//         i++;
//     }
// }
// console.log(arrayToList([10, 20,30,40]));
// console.log(listToArray(arrayToList([10, 20, 30])));
// console.log(prepend(10, prepend(20, null)));
// console.log(nth(arrayToList([10, 20, 30]), 1));
// function deepEqual(value1, value2) {
//     if (value1 === value2) {
//         return true;
//     }
//     if ((typeof value1 == typeof value2) && (value1 != null && value2 != null) ) {
//         let keys1 = Object.keys(value1), keys2 = Object.keys(value2);
//         if (keys1.length != keys2.length) {
//             return false;
//         }
//         for(let key in keys1) {
//             if (!keys2.includes(key) || !deepEqual(value1[key], value2[keys2])) {
//                 return false;
//             }
//         }
//     }else {
//         return false;
//     }
//     return true;
// }
// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// console.log(deepEqual(obj, {here: 1, object: 2}));
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));