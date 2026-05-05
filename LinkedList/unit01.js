// Định nghĩa một Node (phần tử trong danh sách)
function Node(value) {
    this.value = value;
    this.next = null;
}
//Thêm vào đầu danh sách
function insertAtHead(head, value) {
    const newNode = new Node(value);
    newNode.next = head;
    return newNode; // trả về head mới
}
//Thêm vào cuối danh sách
function insertAtTail(head, value) {
    const newNode = new Node(value);
    if (head === null) {
        return newNode;
    }
    
    let current = head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = newNode;
    return head;
}
//Duyệt và in danh sách
function printList(head) {
    let current = head;
    const values = [];
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    console.log(values.join(" -> "));
}
//Tìm kiếm giá trị
function search(head, target) {
    let current = head;
    let position = 0;
    while (current !== null) {
        if (current.value === target) {
            return position;
        }
        current = current.next;
        position++;
    }
    return -1; // không tìm thấy
}
//Xóa node theo giá trị
function deleteByValue(head, target) {
    if (head === null) return null;
    
    // Nếu cần xóa ngay head
    if (head.value === target) {
        return head.next;
    }
    
    let current = head;
    while (current.next !== null) {
        if (current.next.value === target) {
            current.next = current.next.next;
            return head;
        }
        current = current.next;
    }
    return head;
}
// Khởi tạo danh sách rỗng
let myList = null;
// LinkedList chỉ giữ tham chiếu đến node đầu tiên (head)
let head = null;

// Thêm phần tử
myList = insertAtHead(myList, 10);
myList = insertAtHead(myList, 20);
myList = insertAtTail(myList, 30);
myList = insertAtTail(myList, 40);
myList = insertAtHead(myList, 5);

console.log("Danh sách hiện tại:");
printList(myList);  // 5 -> 20 -> 10 -> 30 -> 40

console.log("Tìm giá trị 10 ở vị trí:", search(myList, 10)); // 2

myList = deleteByValue(myList, 20);
console.log("Sau khi xóa 20:");
printList(myList);  // 5 -> 10 -> 30 -> 40

myList = deleteByValue(myList, 5);
console.log("Sau khi xóa 5:");
printList(myList);  // 10 -> 30 -> 40



