// Cách 1: Linear Search cơ bản (dễ hiểu)
function linearSearchBasic(arr, target) {
    // Duyệt từ đầu đến cuối mảng
    for (let i = 0; i < arr.length; i++) {
        // So sánh từng phần tử với giá trị cần tìm
        if (arr[i] === target) {
            return i; // Trả về vị trí nếu tìm thấy
        }
    }
    return -1; // Không tìm thấy
}

// Cách 2: Linear Search có in ra từng bước
function linearSearchWithSteps(arr, target) {
    console.log(`Tìm kiếm giá trị: ${target}`);
    console.log(`Mảng: [${arr.join(", ")}]`);
    console.log("====================");
    
    for (let i = 0; i < arr.length; i++) {
        console.log(`Bước ${i + 1}: Kiểm tra phần tử tại vị trí ${i} = ${arr[i]}`);
        
        if (arr[i] === target) {
            console.log(`✅ Tìm thấy ${target} tại vị trí ${i}!`);
            return i;
        } else {
            console.log(`❌ ${arr[i]} !== ${target}, tiếp tục...`);
        }
    }
    
    console.log(`❌ Không tìm thấy ${target} trong mảng`);
    return -1;
}

// Test với các trường hợp khác nhau
console.log("===== BÀI TẬP 1: LINEAR SEARCH CƠ BẢN =====\n");

// Test case 1: Tìm thấy ở đầu mảng
const arr1 = [10, 20, 30, 40, 50];
console.log("Test 1 - Tìm thấy ở đầu mảng:");
console.log("Mảng:", arr1);
console.log("Tìm 10:", linearSearchBasic(arr1, 10)); // Output: 0

// Test case 2: Tìm thấy ở giữa mảng
console.log("\nTest 2 - Tìm thấy ở giữa mảng:");
console.log("Mảng:", arr1);
console.log("Tìm 30:", linearSearchBasic(arr1, 30)); // Output: 2

// Test case 3: Tìm thấy ở cuối mảng
console.log("\nTest 3 - Tìm thấy ở cuối mảng:");
console.log("Mảng:", arr1);
console.log("Tìm 50:", linearSearchBasic(arr1, 50)); // Output: 4

// Test case 4: Không tìm thấy
console.log("\nTest 4 - Không tìm thấy:");
console.log("Mảng:", arr1);
console.log("Tìm 100:", linearSearchBasic(arr1, 100)); // Output: -1

// Test case 5: Mảng rỗng
console.log("\nTest 5 - Mảng rỗng:");
const emptyArr = [];
console.log("Mảng:", emptyArr);
console.log("Tìm 10:", linearSearchBasic(emptyArr, 10)); // Output: -1

// Test case 6: Mảng có nhiều phần tử trùng (tìm phần tử đầu tiên)
console.log("\nTest 6 - Mảng có phần tử trùng:");
const duplicateArr = [5, 3, 8, 3, 9, 3];
console.log("Mảng:", duplicateArr);
console.log("Tìm 3 (vị trí đầu tiên):", linearSearchBasic(duplicateArr, 3)); // Output: 1

// Xem chi tiết từng bước
console.log("\n\n===== XEM CHI TIẾT CÁC BƯỚC =====");
linearSearchWithSteps([15, 23, 7, 45, 19, 31], 45);
console.log("\n");
linearSearchWithSteps([15, 23, 7, 45, 19, 31], 99);