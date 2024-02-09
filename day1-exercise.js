//No 1 RECTANGLE AREA
let length = 5;
let width = 3;

let rectangle_area = length * width
//result
console.log(rectangle_area);


//No 2 PERIMETER OF RECTANGLE
let l = 5;
let w = 3;

//let perimeter_of_rectangle = l+w+l+w || 2*l+2*w;
let perimeter_of_rectangle = 2*l+2*w || 2*( l + w )
//result
console.log(perimeter_of_rectangle);

// No 3 Finding diameter, circumference and area of a circle
const radius = 5;;

const diameter = 2 * radius;
console.log(diameter);

const circumference = 2 * Math.PI * radius || Math.PI * diameter;
console.log(circumference);

const circle_area = Math.PI * radius * radius;
console.log(circle_area);



// No 4 Finding an Angle of Triangle

const angleA = 80;
const angleB = 65;

const angleC = 180 - (angleA + angleB);
// result
console.log(angleC);
//console.log("The third angle of the triangle is: " + c + " degrees.");

// No 5 Difference between dates

let date1 = new Date('2022-01-20');
let date2 = new Date('2022-01-22');

// Calculate the difference in milliseconds
let differenceMs = (date2 - date1);
console.log(differenceMs)

// Convert milliseconds to days
let differenceDays = (differenceMs / (1000 * 60 * 60 * 24));

console.log(differenceDays)


//No 6 days to years, months and days
// Function to convert days to years, months, and days

function convertDays(days) {
    var years = Math.floor(days / 365); // Calculate the number of years
    var remainingDays = days % 365; // Calculate the remaining days after removing years

    var months = Math.floor(remainingDays / 30); // Calculate the number of months
    var remainingDays = remainingDays % 30; // Calculate the remaining days after removing months

    return years + " year(s), " + months + " month(s), " + remainingDays + " day(s)";
}

// Examples
console.log("400 days → " + convertDays(400));
console.log("366 days → " + convertDays(366));


//no 06 jumlah dua volume kubus
var s1 = 8;
var s2 = 3;

var Volume1
var Volume2
var total

Volume1 = s1*s1*s1;
Volume2 = s2*s2*s2;

total = Volume1 + Volume2
console.log(total)

//no 07 pake function
function JumlahVolumeKubus (p,q){
    VolumeP = p * p * p;
    VolumeQ = q * q * q;
    total = VolumeP + VolumeQ

return total
}

console.log(JumlahVolumeKubus(8,3));
console.log(JumlahVolumeKubus(10,15));


