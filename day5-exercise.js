// No 1 mengambil nilai terendah, tertinggi, dan rata-rata pada array=========================================

// function arrayNih (array){
//     // pertama urutkan array dari yg terkecil -> terbesar
//     const urutan = array.sort((a,b)=>a - b);
//     // ambil nilai terdepan untuk nilai array yg paling kecil
//     const lowest = urutan[0];
//     // ambil nilai paling belakang untuk nilai array yg paling besar
//     const highest = urutan [urutan.length-1];
//     //menemukan rata-rata
//     const sum = urutan.reduce((partialSum, a) => partialSum + a, 0);

//     const avr = sum/ urutan.length;
//      return { lowest, highest, avr}
// }

// const input = [12, 5, 23, 18, 4, 45, 32]
// const result = input

// console.log(arrayNih(result))

// //tanpa sort
// function MaxMinAvr (r) {
//     const low = Math.min(...r);
//     const high = Math.max(...r);

//     const sum = r.reduce((partialSum, a) => partialSum + a, 0);
//     const avg = sum/r.length;

//     return {low, high, avg}
// }


// const input = [12, 5, 23, 18, 4, 45, 32]
// const hasil = input

// console.log(MaxMinAvr(hasil))


// No 2 Combine several into one array and added "and"=========================================================

// function combinedString (arr) {

//     const kombinasi = arr.slice(0, -1).join(", ") + ", and " + arr[arr.length - 1]

//     return {kombinasi}
// }

// const buah = ["apple", "banana", "cherry", "date" ]

// const combined = combinedString (buah)

// console.log(combined)

// // No 3 

// function splitString(input) {
    
//     return input.split(" ");

// }

// console.log(splitString("Hello World"));

// No 4 mengkalkulasi array pada posisi yang sama========================================================

// function calculates (arr1, arr2) {
//     const result = [];
//     const maxLength = Math.max(arr1.length, arr2.length)

//     for (let i = 0; i < maxLength; i++) {
//         const sum = (arr1[i] || 0) + (arr2[i] || 0);

//         result.push(sum);

//     }
//     return result; 
// }

// console.log(calculates([1,2,3,4,5], [1,2,4]))

// function KalkulasiArray (arr1, arr2) {
//     // Pastikan kedua aaray punya length yang sama

//     if (arr1.length !== arr2.length) {
//         return "array harus sama panjangnya"
//     }

//     //siapkan array kosong untuk menyimpan hasil penjumlahan
//     const hasil = [];

//     //lakukan iterasi /looping pada kedua array dan jumlahkan pada posisi yang sama
//     for (let i = 0; i < arr1.length; i++) {
//         hasil.push(arr1[i] + arr2[i]);

//     }

//     return hasil;

// }
// //contoh penggunaan array
// const kel1 = [1, 2, 4, 5];
// const kel2 = [4, 3, 2, 1];

// const Total = KalkulasiArray(kel1, kel2);
// console.log(Total)

// No 5 memasukkan anggota baru ke array hanya jika beda dari anggota lama ===========================

// function pushIfDifferent(array, newElement) {
//     //periksa apakah element barunya berbeda dari yang sudah ada
//     if (!array.includes(newElement)) {
//         //jika berbeda maka push nilai ke paling belakang
//         array.push(newElement);
//     }
//     return (array)
// }
// const myArray = [1, 2, 3, 4, 5]

// console.log(pushIfDifferent(myArray, 7));

// //2nd Slide
// // No 1 remove semua bilangan ganjil============================================================
// function removeOddNumber(Numbers) {
//     return bilgenap = Numbers.filter(num => num % 2 == 0);
    
// }

// const bilangan = [1, 2, 3, 4, 5, 6, 7, 8];
// const genap = removeOddNumber(bilangan)
// console.log(genap);


// slide 2 No 2 
// function maxSize (numbers, max) {
//     const result = []
//     numbers.forEach((item) => {
//         if(result.length === max) {
//             return;
//         }
//         result.push(item);
//     });

//     return result
//     console.log(numbers)
//     console.log(max)
// }

// const max = 5;
// const numbers = [5, 10, 24, 3, 6, 7, 8];

// console.log(maxSize(numbers, max))

// function insertWithMaxSize(maxSize, ...integers) {
//     let result = [];
//     for (let num of integers) {
//         if (result.length < maxSize) {
//             result.push(num);
//         } else {
//             break; // Stop memasukkan saat sudah mencapai maximum size 
//         }
//     }
//     return result;
// }

// // Example :
// let maxSize = 5;
// let integers = [5, 10, 24, 3, 6, 7, 8];
// let integers2 = ["monyet", "ayam", "kuda", "sapi", "domba", "ikan", "singa"]
// let insertedArray = insertWithMaxSize(maxSize, ...integers);
// console.log(insertedArray); // Output: [5, 10, 24, 3, 6]





// Slide 2 No 3 kombinasikan dua buah array yg isinya number ============================================================

// function Combinedarr ( arrayA, arrayB) {
//     const joinkan = arrayA.concat(arrayB)

//     return joinkan
// }

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const result = Combinedarr(arr1, arr2)
// console.log(result)

//slide 2 No 4                 =====================================================================================


//slide 3 no 2 mencari angka terkecil kedua =========================================================
// function findSecondSmallest(numbers) {
//     // Make a copy of the array to avoid modifying the original array
//     let sortedNumbers = numbers.slice().sort((a, b) => a - b);
//     console.log(sortedNumbers)
//     // Return the second element in the sorted array
//     return sortedNumbers[1];
// }

// // Example usage:
// let numbers = [5, 3, 1, 7, 2, 6];
// let secondSmallest = findSecondSmallest(numbers);
// console.log(secondSmallest); // Output: 2

//slide 3 No 3 ==================================================================================================

function sumNumbers(mixedArray) {
    let sum = 0;
    for (let i = 0; i < mixedArray.length; i++) {
        if (!isNaN(parseFloat(mixedArray[i]))) {
            sum += parseFloat(mixedArray[i]);
        }
    }
    return sum;
}

// Example usage:
let mixedArray = ["3", 1, "string", null, false, undefined, 2];
let result = sumNumbers(mixedArray);
console.log(result); // Output: 3

//slide 3 No 4 ==================================================================================================
// function sumDuplicate (arr) {
    
//     const duplicateValues = arr.filter((value, index, array) => {
//         // jadi patokan untuk mengecek di looping kedua
//         return array.indexOf(value) !== index;

//     });
//     console.log(duplicateValues);
    
//     let result = 0; //10 => 50 => 90 => 100 => 110 =>120 
//     for( let item of arr) {
//         if (duplicateValues.includes(item)) {
//             result += item;
//         }
//     }

//     return result;

//}

//console.log(sumDuplicate([10, 20, 40, 40, 10, 50, 30, 10, 60, 10]));

//slide 3 No 5 Game Rock, Paper, Scissor =========================================================================

function gameSuit (playerChoice) {
    const choices = [ "batu", "gunting", "kertas"];
    choices[1.4]

    const cmptrChoice = choices[Math.floor(Math.random()*2.9)];
    
    console.log(cmptrChoice);
    if (!choices.includes(playerChoice)) {
        return "Wrong input";
    }

    if(playerChoice === cmptrChoice) {
        return "Draw"
    }

    if(
        (playerChoice ==="batu" && cmptrChoice === "gunting") ||
        (playerChoice === "gunting" && cmptrChoice === "kertas") ||
        (playerChoice === "kertas" && cmptrChoice === "batu")
    ) {
        return "Win";
    }

    return "Lose";

}

console.log(gameSuit("kertas"));