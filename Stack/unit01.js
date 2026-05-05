// Stack sử dụng Array
let stack = [];

// Thêm phần tử vào đỉnh stack
function push(stack, element) {
    stack.push(element);
    return stack;
}

// Lấy và xóa phần tử ở đỉnh stack
function pop(stack) {
    if (isEmpty(stack)) {
        console.log("Stack rỗng! Không thể pop.");
        return null;
    }
    return stack.pop();
}

// Xem phần tử ở đỉnh stack mà không xóa
function peek(stack) {
    if (isEmpty(stack)) {
        console.log("Stack rỗng!");
        return null;
    }
    return stack[stack.length - 1];
}

// Kiểm tra stack có rỗng không
function isEmpty(stack) {
    return stack.length === 0;
}

// Lấy kích thước stack
function size(stack) {
    return stack.length;
}

// In toàn bộ stack (từ đáy lên đỉnh)
function printStack(stack) {
    if (isEmpty(stack)) {
        console.log("Stack rỗng");
        return;
    }
    console.log("Stack (từ đáy lên đỉnh):", stack.join(" -> "));
    console.log("Đỉnh stack:", peek(stack));
}

// Xóa toàn bộ stack
function clear(stack) {
    stack.length = 0;
    return stack;
}

console.log("=== DEMO STACK ===");

let myStack = [];

console.log("Stack có rỗng?", isEmpty(myStack)); // true

push(myStack, 10);
push(myStack, 20);
push(myStack, 30);
printStack(myStack); // Stack: 10 -> 20 -> 30, Đỉnh: 30

console.log("Peek:", peek(myStack)); // 30
console.log("Pop:", pop(myStack));   // 30
printStack(myStack); // Stack: 10 -> 20, Đỉnh: 20

console.log("Kích thước:", size(myStack)); // 2

clear(myStack);
console.log("Sau khi clear, stack rỗng?", isEmpty(myStack)); // true