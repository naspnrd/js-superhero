// at method
// let arr = [1, 2, 3];
// //         0  1  2
// //         -3 -2 -1
// console.log(arr.at(0), arr[0]); //1, 1
// console.log(arr.at(-1), arr[-1]); // 3 undefined
// console.log(arr.at(-2)); // 3 undefined

// // push

// arr.push(4);
// console.log(arr);

// // pop

// arr.pop();
// console.log(arr);

// shift vs unshift

// push element in start?? -> unshift
// pop element in start  ?? -> shift and return the popped element

// let arr = [2, 3];
// const removedEle = arr.shift();
// console.log(arr);
// console.log(removedEle);

// unshift -> add one or more element in start of array

// let arr = [2, 3];
// arr.unshift(1, 0);
// console.log(arr);

// concat -> merge two arrays

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = arr1.concat(arr2);
// let arr4 = arr2.concat(arr1);
// console.log(arr3);
// console.log(arr4);

// slice vs splice

// splice

// let arr = [1, 2, 3];
//         0  1  2
// const removedEle = arr.splice(1, 2);
// console.log(arr); // [1]
// console.log(removedEle); // [2, 3]

// insert element
// const removeEle1 = arr.splice(1, 1, 4, 5);
// console.log(arr);
// console.log(removeEle1);

// negative indexes are also allowef

// const removeEle2 = arr.splice(-1, 1, 4, 5);
// console.log(arr);
// console.log(removeEle2);

// Question - 1 - assignment

// var fruits = ["Apple", "Orange", "Kiwi", "Strawberry"];
// fruits.splice(1, 0, "Banana");
// console.log(fruits); //

// slice method

// const nums = [1, 2, 3, 4, 5];
// //            0  1  2  3  4
// //           -5 -4 -3 -2 -1
// const slicedNums = nums.slice(1); // nums.slice(1, nums.length) // (1, 5)
// const slicedNumsNeative = nums.slice(-2);
// console.log(nums);
// console.log(slicedNums); //[2, 3, 4]
// console.log(slicedNumsNeative);

// assignment ques - slice

// var students = ["Simran", "Sakshi", "Komal", "Ishita", "Manya"];
// //                0          1         2       3          4
// //                 -5           -4         -3         -2          -1
// var selected = students.slice(-4, -2);
// console.log(students);
// console.log(selected);

// delete

delete 5;
