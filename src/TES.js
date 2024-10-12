function categorizeNumber(input) {
 
    if (typeof input != 'number') {
    throw new Error("Input harus berupa bilangan bulat")
    }
    let flag = true
  const prime = (input) => {
  for (let i = 2; i <= input - 1; i++){
  if (input % i == 0) {
              flag = false;
              break;
                      }
                      }
    return flag
                          }
  switch (true) {   
      case input < 0: 
      return 'Negatif';
      break;
      case input === 0: 
      return 'Nol';
      break;
                        
    case prime(input) == true: 
    return 'Prima';
    break;
      
   default: 
   return input % 2 == 0 ? 'Genap': 'Ganjil';
   break ;
  }
  }
  console.log(categorizeNumber(15)); 
  console.log(categorizeNumber(12)); 
  console.log(categorizeNumber(17)); 
  console.log(categorizeNumber(0)); 
  console.log(categorizeNumber(-5)); 
  try {
    categorizeNumber('abc'); // output : error  is not defined
  } catch (error) {
    console.log(error.message);
  } 