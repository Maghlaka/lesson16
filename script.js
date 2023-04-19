
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

const array =[ 5, 10, 15, 20, 25,];
const length = array.length
let sum=array[0]+array[1]+array[2]+array[3]+array[4]
console.log(sum / length);

// 4. შექმენით ობიექტი რომელსაც გააჩნია შემდეგი ველები (properties):
// phoneName - სტრინგ ტიპის მნიშვნელობა
// phoneDescription - სტრინგ ტიპის მნიშვნელობა
// phonePrice - რიცხვითი მნიშვნელობა
// shopAddresses - სტრინგ ტიპის  მნიშვნელობების მასივი
// phoneMemoryInGB - რიცხვითი მნიშვნელობა

const phone= {
    phoneName: " samsung ",
    phoneDescription: " Galaxy Z Fold4 ",
    phonePrice: 3500,
    shopAddresses: [" ქ.თბილისი, ღვინის აღმართის 23", "ქ.თბილისი, ნ. ბოხუას 4 " ],
    phoneMemoryInGB: 128,
};

// 5. console.log ში გამოიტანეთ სტრინგი "Phone name is (#3 დავალების phoneName  -ის  მნიშვნელობა),  
// phone price is (#3 დავალების  phonePrice  -ის მნიშვნელობა)  and you can buy it at (#3 დავალების shopAddresses-ის პირველი მნიშვნელობა)"

let text1 = " Phone name is, "
let text2 = " phone price is, "
let text3 =" and you can buy it at, "
const firstAddress= phone.shopAddresses[0];
let fullText = ( text1 + phone.phoneName + text2 + phone.phonePrice +text3 + firstAddress )


console.log(fullText);