import { enqueue, dequeue, isEmpty, size } from "./unit01.js";

// Bài 1: Mô phỏng hàng đợi in tài liệu
function printJobQueue() {
    const queue = [];
    
    return {
        addJob: (document) => {
            enqueue(queue, document);
            console.log(`📄 Đã thêm job: "${document}"`);
        },
        printNext: () => {
            if (isEmpty(queue)) {
                console.log("✅ Không còn job in nào!");
                return null;
            }
            const job = dequeue(queue);
            console.log(`🖨️ Đang in: "${job}"`);
            return job;
        },
        showQueue: () => {
            if (isEmpty(queue)) {
                console.log("📭 Hàng đợi rỗng");
            } else {
                console.log(`📋 Hàng đợi (${size(queue)} job):`, queue.join(" -> "));
            }
        }
    };
}

// Sử dụng
const printer = printJobQueue();
printer.addJob("Báo cáo A");
printer.addJob("Hóa đơn B");
printer.addJob("Hợp đồng C");
printer.showQueue();
printer.printNext();
printer.printNext();
printer.showQueue();
printer.printNext();
printer.printNext(); // Thử in khi rỗng

// Bài 2: Hàng đợi ưu tiên (Priority Queue)
function priorityQueue() {
    const queue = [];
    
    // Thêm phần tử với độ ưu tiên (số càng nhỏ càng ưu tiên)
    function enqueuePriority(element, priority) {
        const item = { element, priority };
        
        // Tìm vị trí để chèn dựa trên priority
        let added = false;
        for (let i = 0; i < queue.length; i++) {
            if (priority < queue[i].priority) {
                queue.splice(i, 0, item);
                added = true;
                break;
            }
        }
        
        if (!added) {
            queue.push(item);
        }
        
        console.log(`📌 Đã thêm: "${element}" (ưu tiên ${priority})`);
    }
    
    function dequeuePriority() {
        if (queue.length === 0) {
            console.log("Hàng đợi rỗng!");
            return null;
        }
        const item = queue.shift();
        console.log(`✅ Xử lý: "${item.element}" (ưu tiên ${item.priority})`);
        return item.element;
    }
    
    function showQueue() {
        if (queue.length === 0) {
            console.log("Hàng đợi rỗng");
            return;
        }
        const display = queue.map(item => `${item.element}(p${item.priority})`);
        console.log("Hàng đợi ưu tiên:", display.join(" <- "));
    }
    
    return { enqueuePriority, dequeuePriority, showQueue };
}

// Sử dụng
const pq = priorityQueue();
pq.enqueuePriority("Task thường", 3);
pq.enqueuePriority("Task quan trọng", 1);
pq.enqueuePriority("Task bình thường", 2);
pq.showQueue();
pq.dequeuePriority();
pq.dequeuePriority();
pq.showQueue();

// Bài 3: Mô phỏng xử lý request theo lượt (Round Robin)
function roundRobinScheduler(requests, timeSlice) {
    const queue = [...requests];
    let currentTime = 0;
    
    console.log("🚀 Bắt đầu xử lý Round Robin...\n");
    
    while (!isEmpty(queue)) {
        const request = dequeue(queue);
        const processTime = Math.min(request.duration, timeSlice);
        
        console.log(`⏰ Thời điểm ${currentTime}: Xử lý "${request.name}" trong ${processTime}s`);
        
        request.duration -= processTime;
        currentTime += processTime;
        
        if (request.duration > 0) {
            console.log(`   ⏳ "${request.name}" còn ${request.duration}s, đưa lại vào hàng đợi`);
            enqueue(queue, request);
        } else {
            console.log(`   ✅ "${request.name}" hoàn thành!`);
        }
        
        console.log(`   📋 Hàng đợi: ${queue.map(r => r.name).join(", ") || "rỗng"}\n`);
    }
    
    console.log(`🏁 Tất cả request đã xử lý xong sau ${currentTime}s`);
}

// Test
const requests = [
    { name: "Task A", duration: 5 },
    { name: "Task B", duration: 3 },
    { name: "Task C", duration: 4 }
];

roundRobinScheduler(requests, 2);
