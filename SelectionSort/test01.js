function selectionSortWithSteps(arr) {
    const sorted = [...arr];
    const n = sorted.length;
    
    console.log("Mảng ban đầu:", sorted);
    console.log("====================");
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        // Tìm phần tử nhỏ nhất
        for (let j = i + 1; j < n; j++) {
            if (sorted[j] < sorted[minIndex]) {
                minIndex = j;
            }
        }
        
        // Hoán đổi nếu cần
        if (minIndex !== i) {
            console.log(`Lần ${i + 1}: Tìm thấy ${sorted[minIndex]} nhỏ hơn ${sorted[i]}`);
            [sorted[i], sorted[minIndex]] = [sorted[minIndex], sorted[i]];
            console.log(`  => Hoán đổi: [${sorted.join(", ")}]`);
        } else {
            console.log(`Lần ${i + 1}: ${sorted[i]} đã đúng vị trí`);
        }
    }
    
    console.log("====================");
    console.log("Kết quả:", sorted);
    return sorted;
}

// Test
selectionSortWithSteps([64, 25, 12, 22, 11]);