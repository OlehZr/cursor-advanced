class Student{
    constructor(course, university, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5,4,4,5];
        this.dismissing = false;
    }

    getInfo(){
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }
}
const stud = new Student(1,"Вищої школи Психотерапії м. Одеса", "Остап Родоманський Бендер");
export {stud}