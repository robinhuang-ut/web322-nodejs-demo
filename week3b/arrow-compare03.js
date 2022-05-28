function fn_no_arrow() {
    console.log('Inside `fn_no_arrow`:', this.age);
    return {
      age: 25,
      show_age: function() {
        console.log('Inside `show_age`:', this.age);
      },
    };
  }
  
fn_no_arrow.call({age: 40}).show_age(); // override `this` inside fn_no_arrow


function fn_with_arrow() {
    console.log('Inside `fn_with_arrow`:', this.age);
    return {
      age: 25,
      show_age: ()=> 
        console.log('Inside `show_age`:', this.age),
    };
  }
  
fn_with_arrow.call({age: 40}).show_age(); // override `this` inside fn_with_arrow