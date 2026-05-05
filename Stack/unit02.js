// Bài 1: Đảo ngược chuỗi
function reverseString(str) {
    const stack = [];
    
    // Đẩy từng ký tự vào stack
    for (let char of str) {
        push(stack, char);
    }
    
    // Lấy ra từ stack (LIFO sẽ đảo ngược)
    let reversed = "";
    while (!isEmpty(stack)) {
        reversed += pop(stack);
    }
    
    return reversed;
}

console.log(reverseString("Hello")); // "olleH"
console.log(reverseString("Stack")); // "kcatS"

//Bài 2: Kiểm tra dấu ngoặc hợp lệ
function isValidParentheses(str) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let char of str) {
        if (pairs[char]) {
            // Nếu là dấu mở, push vào stack
            push(stack, char);
        } else if (char === ')' || char === ']' || char === '}') {
            // Nếu là dấu đóng
            if (isEmpty(stack)) {
                return false;
            }
            const lastOpen = pop(stack);
            if (pairs[lastOpen] !== char) {
                return false;
            }
        }
    }
    
    return isEmpty(stack);
}

console.log(isValidParentheses("()"));        // true
console.log(isValidParentheses("()[]{}"));    // true
console.log(isValidParentheses("(]"));        // false
console.log(isValidParentheses("([)]"));      // false
console.log(isValidParentheses("{[]}"));      // true

// Bài 3: Chuyển đổi số thập phân sang nhị phân
function decimalToBinary(decimal) {
    if (decimal === 0) return "0";
    
    const stack = [];
    
    while (decimal > 0) {
        push(stack, decimal % 2); // Lấy phần dư
        decimal = Math.floor(decimal / 2);
    }
    
    let binary = "";
    while (!isEmpty(stack)) {
        binary += pop(stack);
    }
    
    return binary;
}

console.log(decimalToBinary(10)); // "1010"
console.log(decimalToBinary(42)); // "101010"
console.log(decimalToBinary(255)); // "11111111"