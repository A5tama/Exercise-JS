//No 1 shooting game
class Player {
    constructor(name, health = 100, power = 10) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    hit(power) {
        this.health -= power;
    }

    useItem(item) {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        const health = Math.random() < 0.5 ? 0 : 10;
        const power = Math.random() < 0.5 ? 0 : 10;
        return { health, power };
    }

    start() {
        let round = 1;
        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log(`Round ${round}`);
            
            this.player1.showStatus();
            this.player2.showStatus();
            console.log(this.player1)
            console.log(this.player2)

            const item1 = this.getRandomItem();
            const item2 = this.getRandomItem();

            this.player1.useItem(item1);
            this.player2.useItem(item2);

            console.log("After getting items:");
            this.player1.showStatus();
            this.player2.showStatus();

            this.player2.hit(this.player1.power);
            this.player1.hit(this.player2.power);

            console.log("After shooting:");
            this.player1.showStatus();
            this.player2.showStatus();

            round++;
        }

        if (this.player1.health <= 0 && this.player2.health <= 0) {
            console.log("It's a draw!");
        } else if (this.player1.health <= 0) {
            console.log(`${this.player2.name} wins!`);
        } else {
            console.log(`${this.player1.name} wins!`);
        }
    }
}

// Membuat objek pemain
const player1 = new Player("Agus");
const player2 = new Player("Banu");

// Membuat objek permainan
const game = new ShootingGame(player1, player2);

// Memulai permainan
game.start();



//No 2 Gaji pegawai
// Definisikan kelas Employee sebagai parent class
class Employee {
    constructor(name) {
        // Inisialisasi jumlah jam kerja per hari
        this.name = name;
        this.workingHours = 0;

        console.log(name);
    }

}

// kelas FulltimeEmployee
class FulltimeEmployee extends Employee {
    constructor(name) {
        super(name);
    }

    addWorkingHours(hours) {
        this.workingHours += hours;
    }

    calculateSalary() {
        const normalRate = 100000; 
        const overtimeRate = 75000;
    
        //kondisi pembayaran gaji
        if (this.workingHours <= 6) {
            return {
                total:"Rp " + ( this.workingHours * normalRate).toLocaleString("id-ID"),
            }; 
        }else {
            const normalHour = 6;
            const overtimeHour = this.workingHours - normalHour;
            
            return {
                total: "Rp " + (overtimeHour * overtimeRate + 
                normalHour * normalRate).toLocaleString("id-ID"),
            };
        }
    }
}

// Definisikan kelas ParttimeEmployee
class ParttimeEmployee extends Employee {
    constructor(name) {
        super(name); 
    }

    addWorkingHours(hours) {
        this.workingHours += hours;
    }

    // Metode untuk menghitung total gaji
    calculateSalary() {
        const normalRate = 50000; 
        const overtimeRate = 30000;
    
        //kondisi pembayaran gaji
        if (this.workingHours <= 6) {
            return {
                total:"Rp " + ( this.workingHours * normalRate).toLocaleString("id-ID"),
            }; 
        }else {
            const normalHour = 6;
            const overtimeHour = this.workingHours - normalHour;
            
            return {
                total: "Rp " + (overtimeHour * overtimeRate + 
                normalHour * normalRate).toLocaleString("id-ID"),
            };
        }
    }
}

// FULL TIMER
const employee1 = new FulltimeEmployee("budi");
employee1.addWorkingHours(7); // 
console.log(employee1.calculateSalary())

// PART TIMER
const employee2 = new ParttimeEmployee("Andi");
employee2.addWorkingHours(6); //
console.log(employee2.calculateSalary())


