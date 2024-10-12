function factorial(n) {
if (n === 2){
    return n
} 
return factorial(n-1) * n 
}

// Jangan hapus kode di bawah ini!
export default factorial;
