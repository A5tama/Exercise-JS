//menegemen kereta

class trainPassengar {
    constructor () {
        this.train = ["masinis"];
        this.capacity = 10;
    }

    isFull () {
        return this.train.length>= this.capacity;
    }

    isEmpty (){
        return this.train.length === 1;
    }


    passengerIn(name) {
        if (this.train.includes(name)) {
            return "passenger already exists";
        } 
        
        if (this.isFull()) {
            return "train full";
        } else {
            this.train.push(name);
            return "add passenger success";
        }
    }

    PassengerOut(name){
        if (name === "masinis") {
            return "cannot remove masinis";
            } 
        if (this.isEmpty()) {
            return "train empty";
            } 
        const index = this.train.indexOf(name);
        
        if (index !== -1) {
            this.train.splice(index, 1);
            return "remove passenger success";
            } else {
                return "passenger not found";
            }
        }
    

    showPassenger(){ 
        const availableSeats =this.capacity - this.train.length;
        return {
            passenger : this.train.slice(1),
            jumlahKursi : availableSeats > 0 ? availableSeats : 0,
        };
    } 
}



// Example usage:
const cek = new trainPassengar();
console.log(cek.passengerIn("John"));
console.log(cek.passengerIn("doni"));
console.log(cek.passengerIn("agus"));
console.log(cek.passengerIn("masinis"));
console.log(cek.passengerIn("mayang"));
console.log(cek.passengerIn("tomo"));
console.log(cek.passengerIn("yuda"));
console.log(cek.passengerIn("joko"));
console.log(cek.passengerIn("mike"));
console.log(cek.passengerIn("Bora"));
console.log(cek.passengerIn("guntur"));

console.log(cek.showPassenger());

console.log(cek.PassengerOut("joko"));
console.log(cek.PassengerOut("bela"))
console.log(cek.PassengerOut("guntur"));
console.log(cek.PassengerOut("masinis"));
console.log(cek.PassengerOut("Bora"));
console.log(cek.PassengerOut("tomo"));

console.log(cek.showPassenger())

//No 2
/*Write a JavaScript function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "085244455555"
    output = "(6285)-2444-55555"
*/

function phoneNumber(num) {
    num = num.trim().replaceAll("-","");
    if (num.length > 3 && num.length <= 6){
        num = num.slice(1,3) + "-" + num.slice(3);
    } else if ( num.length > 12){
        return "invalid phone number"
    } else if (num.length > 6) {
        num = "(" "+62" + num.slice(1,3) + ")" + "-" + num.slice(3,7) + "-" + num.slice(7);
    }
    return num; 
}

const noHP = "089538426738"
const output = phoneNumber(noHP)
console.log(output)

