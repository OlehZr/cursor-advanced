const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

const getSubjects = (students) => {
    const studentSubject = [];
for(let key in students.subjects){
    key = key.charAt(0).toUpperCase() + key.substring(1);
    studentSubject.push(key.replace('_', ' '));
}
return studentSubject
}
console.log(getSubjects(students[0]))

const getAverageMark = (students) => {
    const marks = Object.values(students.subjects).flat();
    const averageValue = marks.reduce((total, current) => 
        total + current);
    const averageSum = averageValue / marks.length;
    return averageSum.toFixed(2)
}
console.log(getAverageMark(students[0]))

const getStudentInfo = (students) => {
    const info = {
        course: students.course,
        name: students.name,
        averageMark: getAverageMark(students),
    }
    return info
}
console.log(getStudentInfo(students[0]))

const getStudentsNames = (students) => {
    const names = [];
    for(let key in students){
        names.push(students[key].name)
    }
    const studentName = names.sort((a, b) => a.localeCompare(b))
    return studentName
}
console.log(getStudentsNames(students))

const getBestStudent = (students) =>{
    const bestMark = [];
    students.forEach((student) =>
    bestMark.push(getAverageMark(student))
    )
    const bestStudent = Object.values(students.find((student) =>
    getAverageMark(student) == Math.max(...bestMark)
    ))
    return bestStudent[0]
}
console.log(getBestStudent(students))

function calculateWordLetters(word){
    const result = {};
    for(let i = 0; i < word.length; i++){
        const a = word[i];
        if(result[a]){
            result[a]++;
        }else{
            result[a] = 1;
        }
    }
    return result
}
console.log(calculateWordLetters('тест'))