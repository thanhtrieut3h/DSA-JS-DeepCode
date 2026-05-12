// Cách 1: Binary Search cơ bản (đệ quy)
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    // Điều kiện dừng: không tìm thấy
    if (left > right) {
        return -1;
    }
    
    // Tìm phần tử ở giữa
    const mid = Math.floor((left + right) / 2);
    
    // So sánh với giá trị cần tìm
    if (arr[mid] === target) {
        return mid; // Tìm thấy
    } else if (arr[mid] < target) {
        // Tìm kiếm bên phải
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        // Tìm kiếm bên trái
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

// Cách 2: Binary Search cơ bản (lặp - khử đệ quy)
function binarySearchIterative(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid; // Tìm thấy
        } else if (arr[mid] < target) {
            left = mid + 1; // Tìm bên phải
        } else {
            right = mid - 1; // Tìm bên trái
        }
    }
    
    return -1; // Không tìm thấy
}

// Cách 3: Binary Search có in ra từng bước
function binarySearchWithSteps(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let step = 0;
    
    console.log(`Tìm kiếm giá trị: ${target}`);
    console.log(`Mảng đã sắp xếp: [${arr.join(", ")}]`);
    console.log("====================");
    
    while (left <= right) {
        step++;
        const mid = Math.floor((left + right) / 2);
        
        console.log(`\nBước ${step}:`);
        console.log(`  Khoảng tìm kiếm: [${left}...${right}]`);
        console.log(`  Phần tử giữa (vị trí ${mid}): ${arr[mid]}`);
        
        if (arr[mid] === target) {
            console.log(`  ✅ Tìm thấy ${target} tại vị trí ${mid}!`);
            return mid;
        } else if (arr[mid] < target) {
            console.log(`  ${arr[mid]} < ${target}, tìm bên phải`);
            left = mid + 1;
        } else {
            console.log(`  ${arr[mid]} > ${target}, tìm bên trái`);
            right = mid - 1;
        }
    }
    
    console.log(`\n❌ Không tìm thấy ${target} trong mảng`);
    return -1;
}

// Test với các trường hợp khác nhau
console.log("===== BÀI TẬP 1: BINARY SEARCH CƠ BẢN =====\n");

// Chuẩn bị mảng đã sắp xếp
const sortedArr = [2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78, 89, 92];

console.log("Mảng đã sắp xếp:", sortedArr);
console.log("Kích thước mảng:", sortedArr.length);
console.log("\n--- KẾT QUẢ TÌM KIẾM ---");

// Test case 1: Tìm thấy ở giữa mảng
console.log("\nTest 1 - Tìm thấy ở giữa:");
console.log("Tìm 23:", binarySearchIterative(sortedArr, 23)); // Output: 5

// Test case 2: Tìm thấy ở đầu mảng
console.log("\nTest 2 - Tìm thấy ở đầu:");
console.log("Tìm 2:", binarySearchIterative(sortedArr, 2)); // Output: 0

// Test case 3: Tìm thấy ở cuối mảng
console.log("\nTest 3 - Tìm thấy ở cuối:");
console.log("Tìm 92:", binarySearchIterative(sortedArr, 92)); // Output: 12

// Test case 4: Không tìm thấy
console.log("\nTest 4 - Không tìm thấy:");
console.log("Tìm 100:", binarySearchIterative(sortedArr, 100)); // Output: -1

// Test case 5: So sánh đệ quy và lặp
console.log("\nTest 5 - So sánh 2 cách:");
const testValue = 45;
console.log(`Tìm ${testValue}:`);
console.log(`  Đệ quy: vị trí ${binarySearchRecursive(sortedArr, testValue)}`);
console.log(`  Lặp: vị trí ${binarySearchIterative(sortedArr, testValue)}`);

// Test case 6: Mảng 1 phần tử
console.log("\nTest 6 - Mảng 1 phần tử:");
const singleArr = [10];
console.log("Mảng:", singleArr);
console.log("Tìm 10:", binarySearchIterative(singleArr, 10)); // Output: 0
console.log("Tìm 5:", binarySearchIterative(singleArr, 5));  // Output: -1

// Test case 7: Mảng rỗng
console.log("\nTest 7 - Mảng rỗng:");
const emptyArr = [];
console.log("Mảng:", emptyArr);
console.log("Tìm 5:", binarySearchIterative(emptyArr, 5)); // Output: -1

// Xem chi tiết các bước
console.log("\n\n===== XEM CHI TIẾT CÁC BƯỚC =====");
binarySearchWithSteps([3, 7, 12, 19, 25, 31, 42, 56, 68, 75], 31);
console.log("\n");
binarySearchWithSteps([3, 7, 12, 19, 25, 31, 42, 56, 68, 75], 100);