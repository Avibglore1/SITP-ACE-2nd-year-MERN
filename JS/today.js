// 1. Data Types
var studentName = "Avinash";
// let type = typeof studentName
let age = 21;                  // number
const enrolled = true;         // boolean
let subjects = ["JS", "DOM", "Async"]; 

let profile = { name: studentName, age, enrolled, subjects };


// 2. Hoisting
console.log(x); // ?
var x = 10;

try {
  console.log(y); // ?
  let y = 20;
} catch (err) {
  console.log("Error with let:", err.message);
}

// 3. Array Methods
let upperSubjects = subjects.map(s => s.toUpperCase());
let filteredSubjects = subjects.filter(s => s.length > 3);
let totalChars = subjects.reduce((acc, s) => acc + s.length, 0);

console.log("Upper:", upperSubjects);
console.log("Filtered:", filteredSubjects);
console.log("Total chars:", totalChars);

// 4. Async Programming
function fetchGradesCallback(callback) {
  setTimeout(() => callback([85, 90, 78]), 2000);
}

function fetchGradesPromise() {
  return new Promise(resolve => {
    setTimeout(() => resolve([85, 90, 78]), 2000);
  });
}

async function fetchGradesAsync() {
  let grades = await fetchGradesPromise();
  console.log("Async/Await Grades:", grades);
}

// Usage
fetchGradesCallback(grades => console.log("Callback Grades:", grades));
fetchGradesPromise().then(grades => console.log("Promise Grades:", grades));
fetchGradesAsync();
