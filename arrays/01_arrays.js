const arr=["Mango","Orange","Apple"]


const sli=arr.slice(1,2);
console.log(sli);
console.log(arr);
console.log("---------");

const spli=arr.splice(1,2);
// console.log(spli);
// console.log(arr);



const arr1=[2,4,5,6,3]
const arr2=["Jammu","Kashmir","Bhimber"]

const arr3=arr1.concat(arr2);
const arr4= [...arr1,...arr2];
console.log(arr3);
console.log(arr4);

const stringstoArray=Array.of("Jawad", "Ahmed", "ali")  //multiple strings to array
const stringtoArray=Array.from("Jawad")    // convert string elements to array elements
console.log(stringtoArray);
