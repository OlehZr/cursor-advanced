const students = ["Олександр", "Ігор", "Оленa", "Ірa", "Олексій", "Світланa"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

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
export { pairs }