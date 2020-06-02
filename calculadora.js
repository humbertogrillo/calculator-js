let calculate = function(input){

    let nums = [];
    let ops = [];
    let actual = '';

    input.split('').forEach(el => {
        // Alterado para simplificar
        if(el === '+' || el === '-' || el === '*' || el === '/'){
            ops.push(el);
            nums.push(parseFloat(actual));
            actual = '';
        }else{
            actual += el;
        }
/* trecho substituido
      switch(el){
          case '-':
              ops.push('-');
              nums.push(parseFloat(actual));
              actual = '';
              break;
          case '+':
              ops.push('+');
              nums.push(parseFloat(actual));
              actual = '';
              break;
          case '*':
              ops.push('*');
              nums.push(parseFloat(actual));
              actual = '';
              break;
          default:
              actual += el;
      }
      */

    });
    if(actual !== ''){
        nums.push(parseFloat(actual));
    }

// Trecho feito após entrevista
    ops = ops.map((el,i)=>{
        if(el == '*'){
            nums[i] = nums[i]*nums[i+1];
            nums[i+1] = 0;
            return "+";
        }else if( el == '/'){ // incluindo divisão
            nums[i] = nums[i]/nums[i+1];
            nums[i+1] = 0;
            return "+";
        }
        return el;
    });


// fim do trecho

    return nums.reduce((acc,el,i) => {
        if(i === 0){
            return el;
        }
        let op = ops[i-1];
        switch(op){
            case '+':
                return acc + el;
            case '-':
                return acc - el;
        }
    });

}

module.exports = {
    calculate
}