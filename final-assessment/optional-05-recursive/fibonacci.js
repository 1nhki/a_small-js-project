function fibonacci(n){
    if (n=== 0) return [0];
    if (n === 1) return [0, 1];


const fibarray = fibonacci(n - 1)
fibarray.push(fibarray[fibarray.length - 1] + fibarray[fibarray.length - 2])

return fibarray
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
