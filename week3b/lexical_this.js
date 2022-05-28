var architect = {
    name: "Joe",
    age: 34,
    occupation: "Architect",
    setName: function(newName){this.name = newName},
    setAge: function(newAge){this.age = newAge},
    getName: function(){return this.name},
    getAge: function(){return this.age},
    outputNameDelay: function(){
        setTimeout(function(){
          console.log(this.name);
        },1000);
    },
    outputNameDelay2: function(){
        var that = this;
        setTimeout(function(){
            console.log(that.name);
        },1000);
    },
    outputNameDelayWithArrow: function(){
        setTimeout(() => { console.log(this.name); }, 1000);
    }
};
architect.outputNameDelay(); // outputs undefined
architect.outputNameDelay2();
architect.outputNameDelayWithArrow();