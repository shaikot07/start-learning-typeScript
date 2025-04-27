// test with string array 
const stringsAr:string[] = ["apple", "banana", "apple", "orange", "banana"];
const resultStr:string[]=removeDup(stringsAr);
console.log(resultStr);

function removeDup(stringsAr: string[]): string[] {
    return [...new Set(stringsAr)];
}


