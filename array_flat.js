// Flatning an array

const myArr = [[1,2,3], [4, ["Asad", "Hoda"], 5,6], [7,8,9]]

console.log(myArr[1][1][0]);

const arr2 = myArr.flat(Infinity)

console.log(arr2);