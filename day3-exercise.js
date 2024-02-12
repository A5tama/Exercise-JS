// No 1. menampilkan perkalian 

// const input = 7;
// const limit = 10;

// for (let i = 1; i <= limit; i++) {
//     console.log ( input +" x "+ i + " = " + input*i );
// };

// // No 2. check kata palindrome atau bukan

// const str = 'kodok 101 kodok';
// const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
// const reversedStr = cleanedStr.split('').reverse().join('');

// if (cleanedStr === reversedStr) {
//     console.log(`${str} is a palindrome.`);
// } else {
//     console.log(`${str} is not a palindrome.`);
// }

// pake build in method==================================================================
// const kata = "joko";
// const isPalindrome = kata === kata.split("").reverse().join("");

// console.log(kata.split(""));
// console.log(kata.split("").reverse())
// console.log(kata.split("").reverse().join(""));

// console.log(isPalindrome);

//tanpa build in method
// const kata = "jogja"
// let reverse = ""

// for (let i = kata.length - 1; i >= 0; i--){
//     reverse += kata[i];
//     console.log(kata[i]);
// }

// console.log(reverse);

// // //No 3 centimeter ke Kilometer

// function centimeterToKilometer(cm) {
//     // 1 kilometer = 100,000 centimeter
//     const kilometers = cm / 100000;
//     return kilometers + " km";
// }

// // Contoh penggunaan fungsi
// const centimeters = 00000;
// const result = centimeterToKilometer(centimeters);
// // console.log(centimeterToKilometer(120000))
// console.log(`${centimeters} cm setara dengan ${result}`); 


// const cm = 100000
// const km = cm / 100000

// console.log(cm + "cm  = " + km + "km" )



// // No 4 currency
// const harga = 100000

// const rupiah = new Intl.NumberFormat("Id-ID",{
//     style: "currency",
//     currency : "IDR",
//     maximumFractionDigits: 0,
// });

// console.log(rupiah.format(harga));


//No 5 REMOVE String

//Build in Method

// const words = "Hello World";
// const search = "ell";
// const replaceWith = ""

// const remove = words.replace(search,replaceWith);
// console.log(remove);


//No 6 huruf kapital

// const input = "Hello World"
// let words = input.split(" ");

// //console.log(words);

// for (let i = 0 ; i < words.length; i++) {
//     words [i] = words[i][0].toUpperCase() + words[i].slice(1);
 
//     console.log(words[i].slice(1));   
// } 
 
// console.log(words);
// console.log(words.join(" "))



//No 7 reverse
// // Cara Build in Method
// const kata = "hello"
// const reverse = kata.split("").reverse("").join("");

// console.log(kata + " --->  " + reverse)

// Cara tanpa build in method


// No 8 swap letter

// const input = "ThE QuiCk BrOwN Fox"
// let swappedString = "";

// for (let i = 0; i < input.length; i++){
//     const char = input[i];

//     console.log(char);
//     console.log(input[i].toUpperCase());

//     if (char === input[i].toUpperCase()){
//         swappedString += char.toLowerCase();
//     } else {
//         swappedString += char.toUpperCase();
//     }
// }

// console.log(swappedString)

//No 9

// const num1 = 42;
// const num2 = 27;

// let largest;

// if (num1 > num2) {
//     largest = num1;
// } else {
//     largest = numb2
// }
// console.log( largest )

//No 10
// const number1 = 42;
// const number2 = 27;
// const number3 = 18;

// const smallest = Math.min(number1,number2,number3);
// const largest = Math.max(number1,number2,number3);
// const middle = number1 + number2 + number3 - smallest -largest;

// console.log(smallest +","+ middle +","+ largest)

// no 11
// const input = true
// let type;

// if(typeof input === "string") {
//     type = 1;
// } else if (typeof input === "number"){
//     type = 2
// }else { 
//     type = 3;
// }

// console.log(type);


// No 12
const inputString = "An apple a day keeps the doctor away".toLowerCase();
const replaceWord = "a";
let ModifiedString = "";

for( let i = 0; i < inputString.length; i++) {
    if (inputString[i] === replaceWord) {
        ModifiedString += "*";
    } else {
        ModifiedString += inputString[i];
    }
}

console.log(ModifiedString)
