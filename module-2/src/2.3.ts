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
}