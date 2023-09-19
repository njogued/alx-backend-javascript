interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const stud1: Student = {
  firstName: "Immanuel",
  lastName: "Kituku",
  age: 23,
  location: "Nairobi",
};

const stud2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 28,
  location: "California",
};

const studentsList: Student[] = [stud1, stud2];

// Render a table with student data
const table: HTMLElement = document.createElement("table");

// Create table headers
const headers = ["First Name", "Location"];
const headerRow: HTMLElement = document.createElement("tr");
headers.forEach((header) => {
  const th: HTMLElement = document.createElement("th");
  th.textContent = header;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

// Create table rows for each student
studentsList.forEach((student) => {
  const row: HTMLElement = document.createElement("tr");

  // Create table cells for student data
  const firstNameCell: HTMLElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell: HTMLElement = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
