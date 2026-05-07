// Tạo node gốc
export function createTree(rootValue) {
    return new TreeNode(rootValue);
}

// Thêm node con
export function addChild(parentNode, childValue) {
    const childNode = new TreeNode(childValue);
    parentNode.children.push(childNode);
    return childNode;
}

// Tìm node theo giá trị (DFS - Depth First Search)
export function findNode(root, targetValue) {
    if (!root) return null;
    
    if (root.value === targetValue) {
        return root;
    }
    
    for (let child of root.children) {
        const found = findNode(child, targetValue);
        if (found) return found;
    }
    
    return null;
}

// Duyệt theo chiều sâu (DFS - Depth First Search)
export function dfsTraversal(root, result = []) {
    if (!root) return result;
    
    result.push(root.value);
    
    for (let child of root.children) {
        dfsTraversal(child, result);
    }
    
    return result;
}

// Duyệt theo chiều rộng (BFS - Breadth First Search)
export function bfsTraversal(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const current = queue.shift();
        result.push(current.value);
        
        // Thêm tất cả các node con vào hàng đợi
        for (let child of current.children) {
            queue.push(child);
        }
    }
    
    return result;
}

// In cây dạng đẹp (có thụt đầu dòng)
export function printTree(root, level = 0, prefix = "") {
    if (!root) return;
    
    console.log("  ".repeat(level) + prefix + root.value);
    
    for (let i = 0; i < root.children.length; i++) {
        const isLast = i === root.children.length - 1;
        printTree(root.children[i], level + 1, isLast ? "└── " : "├── ");
    }
}