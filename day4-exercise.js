// No 1 triangle

// function Triangle(tinggi) {
//     for (let i = 1; i <= tinggi; i++){
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += j + " "
//         }

//         console.log(row);
//     }

// }

// Triangle(5)



// No 2 Triangle Pattern *

// function createTriangle(height) {
//     let counter = 1; // Variabel untuk menyimpan nilai yang akan diprint

//     for (let i = 1; i <= height; i++) {
//         let row = ''; // String untuk menyimpan nilai pada setiap baris

//         for (let j = 0; j < i; j++) {
//             row += (counter < 10 ? '0' : '') + counter + ' '; // Menambahkan nilai counter ke dalam string row
//             counter++; // Menambahkan counter untuk nilai berikutnya
//         }

//         console.log(row); // Mencetak baris ke konsol
//     }
// }

// // // Memanggil fungsi createTriangle dengan ketinggian yang ditentukan
// let triangleHeight = 4;
// createTriangle(triangleHeight);


// //No 3 =========================================================================

// function fizzBuzz(n) {
//     // Buat array kosong untuk menyimpan hasil
//     let result = [];

//     // Loop dari 1 hingga n
//     for (let i = 1; i <= n; i++) {
//         // Jika i adalah kelipatan dari 3 dan 5, tambahkan "FizzBuzz" ke dalam array result
//         if (i % 3 === 0 && i % 5 === 0) {
//             result.push("FizzBuzz"); 
//             // result += "FizzBuzz" + "\n";
//         }
//         // Jika i adalah kelipatan dari 3, tambahkan "Fizz" ke dalam array result
//         else if (i % 3 === 0) {
//             result.push("Fizz"); 
//             // result += "Fizz" + "\n";
//         }
//         // Jika i adalah kelipatan dari 5, tambahkan "Buzz" ke dalam array result
//         else if (i % 5 === 0) {
//             result.push("Buzz");
//             //result += "Buzz" + "\n"
//         }
//         // Jika i bukan kelipatan dari 3 atau 5, tambahkan i ke dalam array result
//         else {
//             result.push(i);
//             // result += i + "\n"
//         }
//     }

//     // Gabungkan semua elemen dalam array result menjadi satu string dengan pemisah ", "
//     // dan kembalikan sebagai hasil dari fungsi fizzBuzz
//     return result.join(', ');
// }

// // Contoh penggunaan fungsi fizzBuzz dengan input n = 6 dan n = 15
// console.log("n = 6 → " + fizzBuzz(6)); 
// // Output: 1, 2, Fizz, 4, Buzz, Fizz

// console.log("n = 15 → " + fizzBuzz(15)); 
// // Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz


// //No 4 kalkulator BMI===============================================================================

// function calculateBMI(weight, height) {
//     // Menghitung BMI
//     let bmi = weight / (height * height);

//  //   Mengembalikan kategori berat badan berdasarkan BMI
//     if (bmi < 18.5) {
//         return "less weight";
//     }
//     if (bmi >= 18.5 && bmi <= 24.9) {
//         return "ideal";
//     } 
//     if (bmi >= 25.0 && bmi <= 29.9) {
//         return "overweight";
//     } 
//     if (bmi >= 30.0 && bmi <= 39.9) {
//         return "very overweight";
//     } else {
//         return "obesity";
//     }
// }

// // Contoh penggunaan fungsi
// let weight = 93; // Berat dalam kilogram
// let height = 1.81; // Tinggi dalam meter
// let bmiCategory = calculateBMI(weight, height);
// console.log("BMI Category:", bmiCategory);


// // No 5=============================================================================================

// function filterEvenNumbers(arr) {
//     // Menggunakan metode filter() untuk menghasilkan array baru yang hanya berisi angka genap
//     let evenNumbers = arr.filter(item => item % 2 === 0);
//     return evenNumbers;
// }

// // Contoh penggunaan fungsi
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let filteredNumbers = filterEvenNumbers(numbers);
// console.log(filteredNumbers); // Output: [2, 4, 6, 8, 10]

// // tanpa build in method=================================
// function removeOddNumber(arr) {
//     const evenNumbers = [];

//     for( let i = 0; i < arr.length; i++) {
//         if ( arr[i] % 2 === 0 ) {
//             evenNumbers.push(arr[i]);
//         }
//     }
//     return evenNumbers;
// }
// const inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(removeOddNumber(inputArr))

// // No 6 SPLIT================================================================
//pke build in method
function splitString(input) {
    return input.split(" ");
}

console.log(splitString("Hello World"));

////tanpa buil in method
// function splitStringIntoArray(str) {
//     // Menggunakan metode split() untuk memisahkan string menjadi array menggunakan spasi sebagai pemisah
//     let wordsArray = str.split(" ");
//     return wordsArray;
// }

// // Contoh penggunaan fungsi
// let sentence = "Hello World";
// let words = splitStringIntoArray(sentence);
// console.log(words); // Output: ["Hello", "World"]


// const splitString = function (input) {
//     let kata = [];
//     let temp = "";

//     for (let i = 0; i < input.length; i++) {
//         if(input[i]=== " "){
//             kata.push(temp);
//             temp = "";
//             continue //skip looping 
//         }

//         temp += input[i];
//     }

//     kata.push(temp);

//     return kata;

// }

// console.log(splitString("Hello World Jogja"))