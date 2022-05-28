var test1obj = {
    a: "a",
    b: () => console.log('from test1obj.b():',this.a)
  }
  
  test1obj.b(); // undefined
  
  var test2obj = {
    a: "a",
    b: function() { console.log(
      'from test2obj.b():', this.a
      ); }
  }
  
  test2obj.b(); // "a"