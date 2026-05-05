// Queue sử dụng Array
let queue = [];

// Thêm phần tử vào cuối hàng đợi (enqueue)
export function enqueue(queue, element) {
    queue.push(element);
    return queue;
}

// Lấy và xóa phần tử ở đầu hàng đợi (dequeue)
export function dequeue(queue) {
    if (isEmpty(queue)) {
        console.log("Queue rỗng! Không thể dequeue.");
        return null;
    }
    return queue.shift(); // shift() xóa phần tử đầu mảng
}

// Xem phần tử đầu hàng đợi mà không xóa
export function front(queue) {
    if (isEmpty(queue)) {
        console.log("Queue rỗng!");
        return null;
    }
    return queue[0];
}

// Xem phần tử cuối hàng đợi
export function rear(queue) {
    if (isEmpty(queue)) {
        console.log("Queue rỗng!");
        return null;
    }
    return queue[queue.length - 1];
}

// Kiểm tra queue có rỗng không
export function isEmpty(queue) {
    return queue.length === 0;
}

// Lấy kích thước queue
export function size(queue) {
    return queue.length;
}

// In toàn bộ queue (từ đầu đến cuối)
export function printQueue(queue) {
    if (isEmpty(queue)) {
        console.log("Queue rỗng");
        return;
    }
    console.log("Queue (đầu -> cuối):", queue.join(" <- "));
    console.log("Phần tử đầu:", front(queue));
    console.log("Phần tử cuối:", rear(queue));
}

// Xóa toàn bộ queue
export function clearQueue(queue) {
    queue.length = 0;
    return queue;
}

console.log("=== DEMO QUEUE (Array) ===");

let myQueue = [];

console.log("Queue có rỗng?", isEmpty(myQueue)); // true

enqueue(myQueue, 10);
enqueue(myQueue, 20);
enqueue(myQueue, 30);
printQueue(myQueue); 
// Queue: 10 <- 20 <- 30
// Đầu: 10, Cuối: 30

console.log("Front:", front(myQueue)); // 10
console.log("Rear:", rear(myQueue));   // 30
console.log("Dequeue:", dequeue(myQueue)); // 10
printQueue(myQueue); 
// Queue: 20 <- 30
// Đầu: 20, Cuối: 30

console.log("Kích thước:", size(myQueue)); // 2

clearQueue(myQueue);
console.log("Sau khi clear, queue rỗng?", isEmpty(myQueue)); // true