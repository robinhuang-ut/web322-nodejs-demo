class ClassWithPrivateField {
    #privateField;
    publicField;
    constructor() {
      this.#privateField = 42;
      this.publicField = 24;
      console.log('#privateField',this.#privateField);
      console.log('publicField',this.publicField);
      // delete this.#privateField;   // Syntax error
      delete this.publicField; 

      // this.#undeclaredPrivateField = 444; // Syntax error
      // this.undeclaredPublicField = 333; 
      // console.log('undeclaredPublicField',this.undeclaredPublicField);
    }
  }
  
  const instance = new ClassWithPrivateField();
  // instance.#privateField = 42;   // Syntax error
  // console.log(instance.#privateField );
  instance.publicField = 240;
  console.log('instance.publicField',instance.publicField);
