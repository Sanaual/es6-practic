// class Student{
//     constructor(){
//         this.id = 1;
//         this.name = "mahi";
//     }
// }
// const student1 = new Student();
// const student2 = new Student();

// console.log(student1, student2);

class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Kasba Govt. High School"
    }
}
const student1 = new Student(1, "Alamin");
const student2 = new Student(2, "Reza");

console.log(student1, student2);