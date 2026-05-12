// Bubble Sort có in ra từng bước (để quan sát)
function bubbleSortWithSteps(arr) {
    const sortedArray = [...arr];
    const n = sortedArray.length;
    
    console.log("Mảng ban đầu:", sortedArray);
    console.log("====================");
    
    for (let i = 0; i < n - 1; i++) {
        console.log(`\nLần lặp thứ ${i + 1}:`);
        
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                // Hoán đổi
                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
                console.log(`  Đổi chỗ ${sortedArray[j + 1]} và ${sortedArray[j]} -> [${sortedArray.join(", ")}]`);
            } else {
                console.log(`  ${sortedArray[j]} <= ${sortedArray[j + 1]}, giữ nguyên`);
            }
        }
        console.log(`  Kết thúc lần ${i + 1}: [${sortedArray.join(", ")}]`);
    }
    
    console.log("\n====================");
    console.log("Mảng sau khi sắp xếp:", sortedArray);
    return sortedArray;
}
// Xem chi tiết các bước (bỏ comment để xem)
console.log("\n\n===== XEM CHI TIẾT CÁC BƯỚC =====");
bubbleSortWithSteps([5, 3, 8, 1, 2]);