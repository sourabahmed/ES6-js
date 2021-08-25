//let and const variable
let num1 = 12;
num1= 13;
console.log(num1);
const num2 = 12;
num2= 13;// const is a unchangeable variable
console.log(num2);
//template string 
const id = '15';
const obj = {
    name:'sourav',
    phone:'016345',
    village:'hatia'
}
const {name, phone, village} = obj;
const tempString = `Thsi is ${name}. I am from ${village}. My phone number is ${phone} and my id ${id} `
console.log(tempString);
// arrow function in javascript
function general(number){
    return number/5;
}// this is like a function
console.log(general(5));

const arrow = (number) => number / 5;
console.log(arrow(100));
// arrow function with two parameters
 const arrow2 = (num1, num2) => num1+2*num2+2;
console.log(arrow2(5, 5));
// arrow function with three parameters
const arrow3 = (num1, num2, num3) => num1*num2*num3;
console.log(arrow3(5,3,2));
//
const arrow2 = (num1, num2) =>{
         const add = num1 + 2;
         const add2 = num2 + 2;
         const multi = add * add2;
         return multi;
}
console.log(arrow2(5, 5));
// map method in javascript 
const numbers = [5, 10, 12, 7, 16, 11]
const newNumbers = numbers.map((num) => num * 5);
console.log(newNumbers);
// filter method in javascript 
const numbers = [{name:'shirt', price:'4000'},{name:'pant', price:'5000'}]
const newNumbers = numbers.find((num) => num.price == 5000);
console.log(newNumbers);
// map method in javascript 
const numbers = [5, 10, 12, 7, 16, 11]
const newNumbers = numbers.filter((num) => {
    const odd = (num % 2) != 0;
    return odd;
});
console.log(newNumbers);
// default parameters in a function
function pera (num1, num2, num3 = 7){
    const sum = num1 + num2 + num3;
    return sum;
}
const number = pera(10,15,5);
console.log(number);
//destructuring in array and ond object
const person = {
    name:'sourav',
    address:'hatia',
    id:'13',
    phone:'015512',
    nation:'bangladeshi'
}
const {name, address, id, phone, nation} = person;
console.log(name,id,phone);

const array = ['sourav', 'hasan', 'junaeid', 'izazul', 'fahad'];
const [one, two, three, four, five,] = array;
console.log(three);

const arr = [
    {name:'pant', price:'5000', color:'green'},
    {name:'shirt', price:'4000', color:'red'},
    {name:'socks', price:'500', color:'purple'},
    {name:'hat', price:'200', color:'yellow'},
    {name:'jacket', price:'7000', color:'blue'}
]
// const value = arr[2].price;
// console.log(value);
const newArr = arr.find((num) => num.price == 200);
console.log(newArr);
// nested object destructuring in javascript
const company = {
    name:'it help center',
    id: '23',
    product:{
        webdev:'fullstack',
        framework:{
            first:'react',
            second:'vue',
            third: 'angular'
        },
    },
}
//const product = company.product.framework.first;
console.log(product);
console.log(company.products?.framework.first)