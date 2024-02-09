// // // // No 1 CONVERT CELCIUS to FAHRENHEIT

// // const celcius = 60
// // let Fahrenheit = (9/5 *celcius) + 32

// // console.log ("celcius to fahrenheit "+Fahrenheit+" derajat" );

// // const fah = 140
// // const result = ((fah - 32) * 5) / 9;

// // console.log("fah to celc : "+result+" degree")

// // // // No 2 Number is odd Or even
// //  let num = 3
 
// // // //  if (num % 2  === 0) {
// // // //      console.log ("is even number/genap");
// // // // } else { console.log ("is ood number")}
    
// // // // let num2 = 2
// // // // if (num2 % 2 === 0 ) {
// // // //     console.log ("is even number");
// // // // } else { console.log ("is ood number")}

// // console.log(num % 2 === 0 ? "genap" : "ganjil")
// // // //rumus itenary 

// // // Nomor 3 Checking whether the number is prime number

// const angka = 17
// let isPrime = true

// for(let i = 2; i < angka; i++){
//     if (angka % i == 0) {
//         isPrime = false;
//         break;
//     }
// }
// console.log(isPrime);


// // Nomor 4 finding sum of the number 1 to N
// // const N = 5
// // let sum = 0
// // for (let i = 1; i <= N; i++) {
// //     console.log(i);
// //     sum = sum + i // sum = sum + i
// //     console.log(sum)
// // }
// // console.log("sum of the number 1 to N = " + sum)

// //penyelesaian No 4
// // cara 1
// // const num = 5;
// // const result = (num* (num + 1))/2

// // console.log(result)

// //cara 2
const num = 5;
let sum = 0;
let message = "";

for (let i = 1; i <= num; i++){
    sum += i;

    message += i + (i !== num ? " + " : "");
}

console.log(sum);
console.log(message + " = " + sum)




// nomor 5 find Factorial of a number
// const M = 6
// let Faktor = 1
// for (let i = 1; i <= M; i++) {
//     console.log(i);
//     Faktor *= i 
// }
// console.log(Faktor)

const numb = 5;
let result = 1;
let pesan = "";

for ( let i = 5; i >= 1; i--) {
    result *= i;
    pesan += i +  (i ===1 ? "" : " x ");
}

console.log(result);
console.log(pesan + " = " + result) ;


//Nomor 6 nilai N urutan angka Fibonacci
let n = 15;
let fibPrev = 0;
let fibCurr = 1;
let fibNext;

if (n <= 1) {
    console.log(`Bilangan Fibonacci urutan ke-${n} adalah: ${n}`);
} else {
    for (let i = 2; i <= n; i++) {
        fibNext = fibPrev + fibCurr;
        fibPrev = fibCurr;
        fibCurr = fibNext;

    }
    console.log
    (`Bilangan Fibonacci urutan ke-${n} adalah: ${fibCurr}`);
}

// cara lainnya
function fibonacci(t) {
    if (t <= 1) {
        return t;
    } else {
        let fib = [0, 1]; // Inisialisasi array dengan dua bilangan Fibonacci pertama

        for (let i = 2; i <= t; i++) {
            fib[i] = fib[i - 1] + fib[i - 2]; // Hitung bilangan Fibonacci ke-i
        }

        return fib[t]; // Kembalikan nilai bilangan Fibonacci ke-n
    }
}

const t = 15;
const fib_15 = fibonacci(t);
console.log(`Bilangan Fibonacci urutan ke-${t} adalah: ${fib_15}`);

// jon
// Definisi fungsi dengan parameter
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Memanggil fungsi dengan argumen 'John'
greet("John");
