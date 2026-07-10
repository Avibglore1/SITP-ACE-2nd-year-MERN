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
fetchGradesCallback(grades => console.log("Callback Grades:", grades)); //Callback Grades: [85,90,78]
fetchGradesPromise().then(grades => console.log("Promise Grades:", grades)); //Promise Grades: [85,90,78]
fetchGradesAsync();//Async/Await Grades: [85, 90, 78]

