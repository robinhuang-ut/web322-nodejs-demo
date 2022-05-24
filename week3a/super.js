class ClassWithPrivateField {
    #privateField;
  
    constructor() {
      this.#privateField = 42; //not accessible from the derived Subclass
    }
  }
  
  class SubClass extends ClassWithPrivateField {
    #subPrivateField;
  
    constructor() {
      super();
      this.#subPrivateField = 23;
      // console.log('this.#privateField',this.#privateField); // Syntax error
      console.log('this.subPrivateField',this.#subPrivateField);
    }
  }
  
  new SubClass();
  // SubClass {#subPrivateField: 23}

 