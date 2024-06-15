const obj = {
    fname: "Jawad",
    lname: "Ahmed",
    age: 19,
    contact: "923425034559",
    location: "bhimber",
}
obj.det=function(){
        return `My name is ${this.lname} ${this.lname}. My age is ${this.age}.`
}


// console.log(obj.fname);
// console.log(obj['age']);
Object.freeze(obj)
obj.fname = "Jawad Ahmed"
// console.log(obj.fname);
console.log(obj.det());

const obj1 = {
    fullName: {
        FamilyName: {
            fname: "Jawad",
            lname: "Ahmed"
        },
        nickName: "John"
    }
}

// console.log(obj1.fullName.nickName)


const obj3 = { 1: "a", 2: "b" }
const obj4 = { 3: "c", 4: "d" }
const obj5 = Object.assign({}, obj3, obj4)
// console.log(obj3);
// console.log(obj5);

// destructuring of object 

const data = [
    {
        schoolName: "Royal Model Collge",
        location: 'Bhimber AJK',
        board: "Mirpur"
    },
    {
        schoolName: "Aspire College",
        location: 'Bhimber AJK',
        board: "Mirpur"
    },

]

const { schoolName: sn } = data;
// console.log(sn)