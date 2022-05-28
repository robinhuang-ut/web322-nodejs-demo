function fun_counter() {
    let counter = 0;
    function add_one() {
      counter++;
      console.log('counter is ' + counter);
    }
    return add_one;
 }

 let increase = fun_counter();
 increase();
 increase();
 increase();