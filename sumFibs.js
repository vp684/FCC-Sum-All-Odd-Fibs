function sumFibs(num) {
  let fibs = [1,1,2,3,5,8]
  let finality = true
  
  while(finality){
    let lind = fibs.length - 1
    if(fibs[lind] <= num){// add more fibs
      fibs.push((fibs[lind] + fibs[lind - 1])) // add next fib

    }else{ finality = false }//break while
    
  };

  let ret = fibs.reduce((sum, fib)=>{
      if(fib % 2 !== 0 && fib <= num){
        return sum += fib // sum odd fib

      }else { return sum } // pass on even fib
  })

  return ret
  
};
