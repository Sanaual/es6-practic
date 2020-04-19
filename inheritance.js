class Parent{
    constructor(){
        this.fatherName = "Goni";
    }
}


class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}

const baby = new Child("Rana Hasan");
console.log(baby);