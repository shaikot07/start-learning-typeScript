{

// introduction to generices

type GanericArray <T> = Array<T>

// const rollNumber:number[]=[2,4,5,6,8];
const rollNumber:GanericArray<number>=[2,5,3,4,6];

console.log(rollNumber);

// const  mentrorse:string[] = ['x', 'y','z']
const mentrorse:GanericArray<string>=['x', 'y','z'];
console.log(mentrorse);

// genarice Tuple

type GenaricTuple<x,y> =[x, y];
const tupole:GenaricTuple<string,number>=['mr.x',9];
console.log(tupole);

// --------Try to solve few problem with genaric 
// Generic function to remove duplicates
function removeDuplicates<T>(arr: T[]): T[] {
    // Use a Set to filter out duplicate values
    return Array.from(new Set(arr));
}

// Test cases
const numbersS = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbersS);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

const strings = ["apple", "banana", "apple", "orange", "banana"];
const uniqueStrings = removeDuplicates(strings);
console.log(uniqueStrings); // Output: ["apple", "banana", "orange"]

function removeDup<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
}
// test case 
const numbers:number[]=[1, 2, 2, 3, 4, 4, 5];
const result:number[] =removeDup(numbers);
console.log('this is result for removeDip-number',result);

// test with string array 
const stringsAr:string[] = ["apple", "banana", "apple", "orange", "banana"];
const resultStr:string[]=removeDup(stringsAr);
console.log(resultStr);

}