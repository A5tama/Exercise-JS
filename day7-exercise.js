// EXERCISE DAY 7
// No 1 ====================================================================================================
// Create a JavaScript function to check if two objects are equal 
// Example
// Input :  { a: 2 } & { a: 1 } Output: false
// Example
// Input :  { a: “Hello” } & { a: 1 } Output: false
// Example
// Input :  { a: 1 } & { a: 1 } Output: true

// function bandingkan(input1,input2) {
//     if (input1.a === input2.a){
//         return true;
//     } else {
//         return false;
//     }
// };

// const input1 = {b: 1};
// const input2 = {b: 1};
// const hasil = bandingkan (input1, input2);

// console.log(hasil);


//No 2====================================================================================
// Buatlah fungsi untuk menemukan intersection dari dua objek
//cth : Input : { a: 1, b: 2 } & { a: 1, c: 3 }
//Output: { a: 1 }

// function GetIntersection(obj1, obj2) {
//     const intersection = {};

//     for (let key in obj1) {
       
//         if (obj2.hasOwnProperty(key) && obj2[key] === obj1[key]) {

//             intersection[key] = obj1[key];
//         }
//     }
//     return intersection;
//  };

//  const obj1 = { a:1 , b:2, c:3};
//  const obj2 = { a:1 , c:3 };

//  const result = GetIntersection(obj1, obj2);
//  console.log(result);

 
//No 3 menggabung dua array ==============================================================

// function gabungDanHapusDuplikat(array1, array2) {
//     let mergedArray = array1.concat(array2);
//     console.log(mergedArray)
//     let uniqueArray = [];

//     // Iterasi melalui array gabungan
//     mergedArray.forEach((siswa) => {
//         // Jika alamat email belum ada di dalam objek unik, tambahkan mahasiswa ke dalam objek unik dan ke dalam array hasil
//         if (!uniqueArray.some(item => item.email === siswa.email)) {
//             uniqueArray.push(siswa);
//         }
//     });

//     return uniqueArray;
// }

// // Contoh data siswa
// let array1 = [
//     { name: 'Fulan', email: 'fulan@mail.com' },
//     { name: 'Budi', email: 'budi@mail.com' }
// ];

// let array2 = [
//     { name: 'Fulan', email: 'fulan@mail.com' },
//     { name: 'Cucu', email: 'cucu@mail.com' }
// ];

// // Memanggil fungsi untuk menggabungkan dan menghapus duplikat
// let arrayResult = gabungDanHapusDuplikat(array1, array2);
// console.log(arrayResult);

//NO 4 tukar key dan property
function tukarPropertiDanNilai(inputArray) {
    return inputArray.map(obj => {
        // Menggunakan Object.entries untuk mendapatkan array [key, nilai] dari setiap objek
        return Object.fromEntries(
            // Menggunakan map untuk menukar kunci dan nilai dari setiap entri [kunci, nilai]
            Object.entries(obj).map(([key, value]) => [value, key])
        );
    });
}

// Contoh penggunaan fungsi
let input = [{ nama: 'David', umur: 20 }];
let output = tukarPropertiDanNilai(input);
console.log(output); // Output: [{ David: 'nama', '20': 'umur' }]


//No 5 Faktorial 
// function faktorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * faktorial(n - 1);
//     }
// }

// // Contoh penggunaan fungsi untuk mencetak hasil faktorial
// var angka = 5;
// var hasil = faktorial(angka);
// console.log(angka + "! = " + hasil);

// function faktorial(n) {
//     // Basis dari rekursi: jika n adalah 0 atau 1, faktorialnya adalah 1
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     // Langkah rekursif: faktorial dari n adalah n dikali faktorial(n-1)
//     else {
//         return n * faktorial(n - 1);
//     }
// }

// function cetakFaktorial(n) {
//     var hasil = faktorial(n);
//     var faktorialStr = n + "! = ";
//     for (var i = n; i >= 1; i--) {
//         faktorialStr += i;
//         if (i !== 1) {
//             faktorialStr += " x ";
//         }
//     }
//     faktorialStr += " = " + hasil;
//     console.log(faktorialStr);
// }

// Contoh penggunaan fungsi untuk mencetak hasil faktorial
// cetakFaktorial(7); // Output: 7! = 7 x 6 x 5 x 4 x 3 x 2 x 1 = 5040
// cetakFaktorial(3); // Output: 3! = 3 x 2 x 1 = 6
// cetakFaktorial(0); // Output: 0! = 1