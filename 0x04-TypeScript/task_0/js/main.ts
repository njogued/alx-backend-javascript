interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: 'ed',
    lastName: 'njogu',
    age: 69,
    location: 'Kanairo'
}

const studentTwo: Student = {
    firstName: 'jonte',
    lastName: 'mwas',
    age: 19,
    location: 'Oyole'
}

const students = [studentOne, studentTwo]

const table = document.getElementById('studentTable') as HTMLTableElement;

students.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});