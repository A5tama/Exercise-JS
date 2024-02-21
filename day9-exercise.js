class BankQueue {
    #queue;
    constructor (){

        this.#queue = [];
    }

    enqueue(customer){
        return this.#queue.push(customer)
    }

    dequeue() {
        return this.#queue.shift();
    }

    getAllCustomer (){
        return this.#queue;
    }

}

const queue = new BankQueue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.enqueue(5));

console.log(queue.getAllCustomer());

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.getAllCustomer())