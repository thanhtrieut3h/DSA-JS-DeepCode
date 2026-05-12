// Hàm trộn hai mảng đã sắp xếp
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // So sánh và trộn theo thứ tự
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Thêm phần tử còn lại của mảng left (nếu có)
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    
    // Thêm phần tử còn lại của mảng right (nếu có)
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    
    return result;
}

// Hàm Merge Sort chính
function mergeSortBasic(arr) {
    // Điều kiện dừng: mảng có 0 hoặc 1 phần tử
    if (arr.length <= 1) {
        return arr;
    }
    
    // Chia mảng thành 2 nửa
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    // Đệ quy sắp xếp từng nửa và trộn lại
    return merge(mergeSortBasic(left), mergeSortBasic(right));
}

// Hàm Merge Sort có in ra từng bước (để quan sát)
function mergeSortWithSteps(arr, depth = 0) {
    const indent = "  ".repeat(depth);
    
    if (arr.length <= 1) {
        console.log(`${indent}Trả về: [${arr}]`);
        return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    console.log(`${indent}Chia: [${arr}] -> [${left}] và [${right}]`);
    
    const sortedLeft = mergeSortWithSteps(left, depth + 1);
    const sortedRight = mergeSortWithSteps(right, depth + 1);
    
    const merged = merge(sortedLeft, sortedRight);
    console.log(`${indent}Trộn: [${sortedLeft}] + [${sortedRight}] = [${merged}]`);
    
    return merged;
}

// Test với các trường hợp khác nhau
console.log("===== BÀI TẬP 1: MERGE SORT CƠ BẢN =====\n");

// Test case 1: Mảng số ngẫu nhiên
const arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Test 1 - Mảng ngẫu nhiên:");
console.log("Input:", arr1);
console.log("Output:", mergeSortBasic(arr1));
console.log("Mảng gốc không bị thay đổi:", arr1);

// Test case 2: Mảng đã sắp xếp
const arr2 = [1, 2, 3, 4, 5];
console.log("\nTest 2 - Mảng đã sắp xếp:");
console.log("Input:", arr2);
console.log("Output:", mergeSortBasic(arr2));

// Test case 3: Mảng giảm dần
const arr3 = [5, 4, 3, 2, 1];
console.log("\nTest 3 - Mảng giảm dần:");
console.log("Input:", arr3);
console.log("Output:", mergeSortBasic(arr3));

// Test case 4: Mảng có số trùng nhau
const arr4 = [5, 2, 8, 2, 9, 1, 5, 5];
console.log("\nTest 4 - Mảng có số trùng:");
console.log("Input:", arr4);
console.log("Output:", mergeSortBasic(arr4));

// Test case 5: Mảng 1 phần tử
const arr5 = [42];
console.log("\nTest 5 - Mảng 1 phần tử:");
console.log("Input:", arr5);
console.log("Output:", mergeSortBasic(arr5));

// Test case 6: Mảng rỗng
const arr6 = [];
console.log("\nTest 6 - Mảng rỗng:");
console.log("Input:", arr6);
console.log("Output:", mergeSortBasic(arr6));

// Xem chi tiết các bước
console.log("\n\n===== XEM CHI TIẾT CÁC BƯỚC =====");
mergeSortWithSteps([38, 27, 43, 3, 9, 82, 10]);