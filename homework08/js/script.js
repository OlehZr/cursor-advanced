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

    getAverageMark(){
        const averageValue = this.marks.reduce((total, current) => 
        total + current);
        const averageSum = averageValue / this.marks.length;
        return averageSum.toFixed(1);
    }

    dismiss(){
        console.log('dismiss');
        return this.dismissing = true;
    }

    recover(){
        console.log('recover');
        return this.dismissing = false;
    }

    get infoMarks(){
        if(this.dismissing){
            return null
        } else { 
            return this.marks
        }
    }

    set infoMarks(mark){
        if(!this.dismissing){
            this.marks.push(mark)
        }
        return this.marks;
    }
}

class BudgetStudent extends Student{
    constructor(course, university, fullName){
        super(course, university, fullName);

        setInterval(() => {
            this.getScholarship()
        }, 30000);
    }

    getScholarship(){
        if(this.getAverageMark >= 4 || !this.dismissing){ 
            console.log('Ви отримали 1400 грн. стипендії');
        } else {
            console.log('Error');
        }
    }

}

const stud = new Student(1,"Вищої школи Психотерапії м. Одеса", "Остап Родоманський Бендер");

console.log(stud.getInfo());

console.log(stud.infoMarks);

stud.infoMarks = 5;
console.log(stud.infoMarks);

console.log(stud.getAverageMark());

stud.dismiss(); 
console.log(stud.infoMarks);

stud.recover();
console.log(stud.infoMarks);

const budgetStud = new BudgetStudent();
budgetStud.getScholarship();