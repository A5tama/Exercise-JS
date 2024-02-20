// //No 1

// let student = [
//     {name : "Budi",email : "budi@mail.com", age : '10/11/2001', score : 81},
//     {name : "Joko",email : "joko@mail.com", age : '05/02/2002', score : 75},
//     {name : "Siti",email : "siti@mail.com", age : '05/28/2000', score : 93},
//     {name : "Diah",email : "diah@mail.com", age : '1999/07/14', score : 86}
// ]
// console.log(student.length);

// function calculate (student) {
//     let scores = [];
//     for(i=0;i<student.length;i++){
//         scores.push(student[i]['score'])
//     }
//     console.log(scores);
//     let scoremax = Math.max(...scores);
//     console.log(scoremax);
//     let scoremin = Math.min(...scores);  
//     console.log(scoremin);
//     let scoreaverage = scores.reduce((a,b)=>a+b,0)/scores.length;
//     console.log(scoreaverage)

//     let ages = [];
//     for(i=0;i<student.length;i++){
//         const getAge = birthDate => Math.floor((new Date()- new Date(birthDate).getTime())/(365.25*24*3600*1000))
//         const age = getAge(student[i]['age'])
//         ages.push(age)
//     }
//     console.log(ages);
//     let agemax = Math.max(...ages);
//     console.log(agemax);
//     let agemin = Math.min(...ages);
//     console.log(agemin);
//     let ageaverage = ages.reduce((a,b)=>a+b,0)/ages.length;
//     console.log(ageaverage)

//     const result = [
//         {score : {highest: scoremax, lowest: scoremin, average: scoreaverage}},
//         {age :{highest: agemax, lowest: agemin, average: ageaverage}},
//     ]

//     return result
// }

// console.log(calculate(student));




function getIntersection(obj1, obj2) {
    const intersection = {};

    // Iterasi melalui properti objek pertama
    for (let key in obj1) {
        // Periksa apakah properti ada di objek kedua dan nilainya sama
        if (obj2.hasOwnProperty(key) && obj2[key] === obj1[key]) {
            // Tambahkan properti ke dalam objek intersection
            intersection[key] = obj1[key];
        }
    }

    return intersection;
}

// Contoh penggunaan fungsi
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, c: 3 };

const hasil = getIntersection(obj1, obj2);
console.log(hasil); // Output: { a: 1 }