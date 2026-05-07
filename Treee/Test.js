import { createTree, addChild, findNode, dfsTraversal, bfsTraversal, printTree } from "./Tree.js";
// Bài 1: Tính chiều cao của cây
function getTreeHeight(root) {
    if (!root) return 0;
    
    if (root.children.length === 0) return 1;
    
    let maxChildHeight = 0;
    for (let child of root.children) {
        const childHeight = getTreeHeight(child);
        maxChildHeight = Math.max(maxChildHeight, childHeight);
    }
    
    return maxChildHeight + 1;
}

// Test
console.log("=== BÀI 1: Chiều cao cây ===");
const companyTree = createTree("CEO");
const tech = addChild(companyTree, "Tech");
const hr = addChild(companyTree, "HR");
const sales = addChild(companyTree, "Sales");
addChild(tech, "Frontend");
addChild(tech, "Backend");
addChild(hr, "Recruitment");
addChild(sales, "Domestic");
addChild(sales, "International");
printTree(companyTree);
console.log("Chiều cao cây:", getTreeHeight(companyTree)); // 3

// Bài 2: Đếm số lượng node
function countNodes(root) {
    if (!root) return 0;
    
    let count = 1; // Đếm node hiện tại
    
    for (let child of root.children) {
        count += countNodes(child);
    }
    
    return count;
}

// Test
console.log("\n=== BÀI 2: Đếm số node ===");
const tree2 = createTree("Root");
addChild(tree2, "A");
addChild(tree2, "B");
const cNode = addChild(tree2, "C");
addChild(cNode, "C1");
addChild(cNode, "C2");
console.log("Số lượng node:", countNodes(tree2)); // 6


// Bài 3: Tìm node có giá trị lớn nhất
function findMaxValue(root) {
    if (!root) return -Infinity;
    
    let max = root.value;
    
    for (let child of root.children) {
        const childMax = findMaxValue(child);
        max = Math.max(max, childMax);
    }
    
    return max;
}

// Test
const tree3 = createTree(10);
addChild(tree3, 25);
addChild(tree3, 7);
const subNode = addChild(tree3, 42);
addChild(subNode, 18);
addChild(subNode, 31);
console.log("\n=== BÀI 3: Tìm giá trị lớn nhất ===");
printTree(tree3);
console.log("Giá trị lớn nhất:", findMaxValue(tree3)); // 42