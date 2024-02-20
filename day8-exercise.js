//No 1 shooting game
// class Player {
//     constructor(name, health = 100, power = 10) {
//         this.name = name;
//         this.health = health;
//         this.power = power;
//     }

//     hit(power) {
//         this.health -= power;
//     }

//     useItem(item) {
//         this.health += item.health;
//         this.power += item.power;
//     }

//     showStatus() {
//         console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
//     }
// }

// class ShootingGame {
//     constructor(player1, player2) {
//         this.player1 = player1;
//         this.player2 = player2;
//     }

//     getRandomItem() {
//         const health = Math.random() < 0.5 ? 0 : 10;
//         const power = Math.random() < 0.5 ? 0 : 10;
//         return { health, power };
//     }

//     start() {
//         let round = 1;
//         while (this.player1.health > 0 && this.player2.health > 0) {
//             console.log(`Round ${round}`);
//             console.log("Before shooting:");
//             this.player1.showStatus();
//             this.player2.showStatus();

//             const item1 = this.getRandomItem();
//             const item2 = this.getRandomItem();

//             this.player1.useItem(item1);
//             this.player2.useItem(item2);

//             console.log("After getting items:");
//             this.player1.showStatus();
//             this.player2.showStatus();

//             this.player2.hit(this.player1.power);
//             this.player1.hit(this.player2.power);

//             console.log("After shooting:");
//             this.player1.showStatus();
//             this.player2.showStatus();

//             round++;
//         }

//         if (this.player1.health <= 0 && this.player2.health <= 0) {
//             console.log("It's a draw!");
//         } else if (this.player1.health <= 0) {
//             console.log(`Player ${this.player2.name} wins!`);
//         } else {
//             console.log(`Player ${this.player1.name} wins!`);
//         }
//     }
// }

// // Membuat objek pemain
// const player1 = new Player("Player A");
// const player2 = new Player("Player B");

// // Membuat objek permainan
// const game = new ShootingGame(player1, player2);

// // Memulai permainan
// game.start();




//No 2 Gaji pegawai
// // Definisikan kelas Employee sebagai parent class
// class Employee {
//     constructor() {
//         // Inisialisasi jumlah jam kerja per hari
//         this.workingHours = 0;
//     }

//     // Metode untuk menambah jam kerja per hari
//     addWorkingHours(hours) {
//         this.workingHours += hours;
//     }

//     // Metode untuk menghitung total gaji (akan dioverride di child class)
//     calculateSalary() {
//         return 0; // Gaji dihitung di child class
//     }
// }

// // Definisikan kelas FulltimeEmployee sebagai child class dari Employee
// class FulltimeEmployee extends Employee {
//     constructor() {
//         super(); // Memanggil konstruktor parent class
//     }

//     // Metode untuk menghitung total gaji untuk karyawan full-time
//     calculateSalary() {
//         let baseSalary = 100000; // Gaji dasar IDR 100.000 / jam
//         let overtimeRate = 150000; // Tarif lembur IDR 150.000 / jam
//         let overtimeHours = Math.max(0, this.workingHours - 6); // Hitung jam lembur (maksimal 6 jam normal)
        
//         if (this.workingHours > 6) {
//             baseSalary = 75000; // Gaji menjadi IDR 75.000 / jam jika jam kerja per hari lebih dari 6 jam
//         }
//         return (baseSalary * (this.workingHours - overtimeHours)) + (overtimeRate * overtimeHours); // Mengembalikan total gaji
//     }
// }

// // Definisikan kelas ParttimeEmployee sebagai kelas anak dari Employee
// class ParttimeEmployee extends Employee {
//     constructor() {
//         super(); // Memanggil konstruktor kelas induk
//     }

//     // Metode untuk menghitung total gaji untuk karyawan part-time
//     calculateSalary() {
//         let baseSalary = 50000; // Gaji dasar IDR 50.000 / jam
//         let overtimeRate = 75000; // Tarif lembur IDR 75.000 / jam
//         let overtimeHours = Math.max(0, this.workingHours - 6); // Hitung jam lembur (maksimal 6 jam normal)
        
//         if (this.workingHours > 6) {
//             baseSalary = 30000; // Gaji menjadi IDR 30.000 / jam jika jam kerja per hari lebih dari 6 jam
//         }
//         return (baseSalary * (this.workingHours - overtimeHours)) + (overtimeRate * overtimeHours); // Mengembalikan total gaji
//     }
// }

// // Uji coba program
// const fulltimeEmployee = new FulltimeEmployee(); // Buat objek FulltimeEmployee
// const parttimeEmployee = new ParttimeEmployee(); // Buat objek ParttimeEmployee

// // Tambahkan jam kerja untuk karyawan
// fulltimeEmployee.addWorkingHours(8); // Untuk karyawan full-time, jam kerja per hari adalah 8 jam
// parttimeEmployee.addWorkingHours(5); // Untuk karyawan part-time, jam kerja per hari adalah 5 jam

// // Hitung dan cetak total gaji untuk masing-masing karyawan
// console.log("Total gaji untuk karyawan full-time: IDR", fulltimeEmployee.calculateSalary());
// console.log("Total gaji untuk karyawan part-time: IDR", parttimeEmployee.calculateSalary());


// Parent class
class Employee {
    constructor() {
        this.workingHours = 0;
    }

    // Method to add working hours per day
    addWorkingHours(hours) {
        this.workingHours += hours;
    }

    // Method to calculate total salary
    calculateSalary() {
        return 0; // Salary will be calculated in the child classes
    }
}

// Child class for full-time employee
class FulltimeEmployee extends Employee {
    constructor() {
        super();
    }

    // Method to calculate total salary for full-time employee
    calculateSalary() {
        let baseSalary = 100000; // IDR 100.000 / hour
        if (this.workingHours > 6) {
            baseSalary = 75000; // IDR 75.000 / hour if working hours > 6
        }
        return baseSalary * this.workingHours;
    }
}

// Child class for part-time employee
class ParttimeEmployee extends Employee {
    constructor() {
        super();
    }

    // Method to calculate total salary for part-time employee
    calculateSalary() {
        let baseSalary = 50000; // IDR 50.000 / hour
        if (this.workingHours > 6) {
            baseSalary = 30000; // IDR 30.000 / hour if working hours > 6
        }
        return baseSalary * this.workingHours;
    }
}

// Test the program
const fulltimeEmployee = new FulltimeEmployee();
const parttimeEmployee = new ParttimeEmployee();

// Adding working hours for employees
fulltimeEmployee.addWorkingHours(8); // For full-time employee, working hours per day is 8
parttimeEmployee.addWorkingHours(5); // For part-time employee, working hours per day is 5

// Calculate and print total salary for each employee
console.log("Total salary for full-time employee: IDR", fulltimeEmployee.calculateSalary());
console.log("Total salary for part-time employee: IDR", parttimeEmployee.calculateSalary());
