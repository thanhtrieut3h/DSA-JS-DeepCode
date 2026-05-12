// Insertion Sort có in ra từng bước (để quan sát)
function insertionSortWithSteps(arr) {
    const sortedArray = [...arr];
    const n = sortedArray.length;
    
    console.log("Mảng ban đầu:", sortedArray);
    console.log("====================");
    
    for (let i = 1; i < n; i++) {
        let currentValue = sortedArray[i];
        let j = i - 1;
        
        console.log(`\nLần ${i}: Chèn giá trị ${currentValue}`);
        
        // Tìm vị trí thích hợp để chèn
        while (j >= 0 && sortedArray[j] > currentValue) {
            sortedArray[j + 1] = sortedArray[j];
            console.log(`  Di chuyển ${sortedArray[j]} sang phải -> [${sortedArray.join(", ")}]`);
            j--;
        }
        
        // Chèn giá trị vào vị trí đúng
        sortedArray[j + 1] = currentValue;
        console.log(`  Chèn ${currentValue} vào vị trí ${j + 1} -> [${sortedArray.join(", ")}]`);
    }
    
    console.log("\n====================");
    console.log("Mảng sau khi sắp xếp:", sortedArray);
    return sortedArray;
}

// Test với các trường hợp khác nhau
console.log("===== BÀI TẬP 1: INSERTION SORT CƠ BẢN =====\n");
// Xem chi tiết các bước
console.log("\n\n===== XEM CHI TIẾT CÁC BƯỚC =====");
insertionSortWithSteps([5, 3, 8, 1, 2]);