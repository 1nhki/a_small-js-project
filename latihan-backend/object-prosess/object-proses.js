import {memoryUsage, argv} from 'node:process'


const initialMemoryUsage =  memoryUsage().heapUsed
const yourName = argv[2]
const environment = process.env.NODE_ENV
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = memoryUsage().heapUsed
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);