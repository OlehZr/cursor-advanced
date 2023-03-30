const students = ["Олександр", "Ігор", "Оленa", "Ірa", "Олексій", "Світланa"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// const studentsPairs = [];

//     studentsPairs.push([students[0], students[2]]);
//     studentsPairs.push([students[1], students[3]]);
//     studentsPairs.push([students[4], students[5]]);
const boys = [];
const girls = [];
const studentsPairs = [];

    for (let i = 0; i < students.length; i++) {
        let name = students[i];
        if (name.endsWith("a")) {
        girls.push(name);
        } else {
        boys.push(name)
        }
    }

function getPairs(students){ 
    for (let i = 0; i < students[i].length; i++) {
        studentsPairs.push([boys[i], girls[i]]);
    }
    return studentsPairs
}

const pairs = getPairs(students)
console.log(pairs)


const studentsSubject = [];

    for(let i = 0; i < studentsPairs.length; i++){
        studentsSubject[i] = [studentsPairs[i].join(" i ")];
        studentsSubject[i].push(themes[i]);
    }

console.log(studentsSubject)

const studentsMarksList = [];

    for(let i = 0; i < students.length; i++){
        studentsMarksList.push([students[i], marks[i]])
    }

console.log(studentsMarksList)

const studentPairsMarks = [];

    for(let i = 0; i < studentsSubject.length; i++){
        studentPairsMarks.push([...studentsSubject[i], Math.floor((Math.random()*4)+1)])
    }

console.log(studentPairsMarks)