
// 1. მოცემულია მასივი const numberArrays = [2, 4, 6, 8, 10, 12].   ლექციაზე გავლილი მეთოდების (pop, push, shift, unshift) 
// დახმარებით  მასივის ბოლო ელემენტი გადმოიტანეთ მასივის დასაწყისში და  კონსოლში გამოიტანეთ მასივი. 
// (ყველა მეთოდის გამოყენება არ დაგჭირდებათ და საბოლოოდ მასივი უნდა მიიღოთ ასეთი ფორმით [12, 2, 4, 6, 8, 10] )


const numberArrays = [2, 4, 6, 8, 10, 12];
const last = numberArrays[numberArrays.length -1];

numberArrays.pop();

console.log (numberArrays);

numberArrays.unshift(last)
console.log (numberArrays);

// 2. შექმენით 3 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი, რომელსაც გააჩნია   productTitle   და   productPrice  property. 

const productArray =[
    {
        productTitle: "samsung s22",
        productPrice:  4000,
    },
    {
        productTitle: "samsung Galaxy Z Fold4",
        productPrice:  3500,
    },
    {
        productTitle: "Samsung Galaxy Z Flip4",
        productPrice:  3000,
    },
];

console.log(productArray);

// 3. შექმენით 5 ელემენტიანი რიცხვების მასივი, console.log-ით გამოიტანეთ ამ მასივის ელემენტების საშუალო არითმეტიკული;

const array =[ 2, 4, 6, 8, 10,];
 
let sum=array[0,+1,+2+3+4];
console.log(sum);