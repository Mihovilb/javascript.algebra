class Dog{
    constructor(godine) {
        this.godine = godine;
    }
    imePsa = "Rex";
    vrsta = "Seoski pas";
    }

 class GoldenRetriver extends Dog {
    constructor(godine, vrsta) {
        super(godine);
        this.godine = godine;
        this.vrsta = vrsta;
    }
 }

 const dog1 = new Dog(1);
 const dog2 = new GoldenRetriver(10, "Zlatni retriver");

 console.log("---------------------------");
 console.log("Dog1 name=" + dog1.imePsa);
 console.log("Dog1 name=" + dog1.godine);
 console.log("Dog1 name=" + dog1.vrsta);

 console.log("Dog2 name=" + dog1.imePsa);
 console.log("Dog2 name=" + dog2.godine);
 console.log("Dog2 name=" + dog2.vrsta);