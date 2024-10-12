// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders =[]; 

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const newOrder = Object.assign({}, {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice: items.reduce((accumulator, item) => accumulator + item.price, 0),
    status : "Menunggu"
  });

  // Push the newly created order into the orders array
  orders.push(newOrder);
}
        

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const update = orders.find((order) => order.id === orderId);
  update.status = status;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const check = orders.find((order) => order.status === "Selesai")
  return  check.totalPrice 
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id)
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
