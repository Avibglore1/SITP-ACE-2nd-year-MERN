
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

fetchGradesPromise().then(grades => console.log("Promise Grades:", grades));
fetchGradesAsync();