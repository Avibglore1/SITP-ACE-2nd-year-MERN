console.log("start");

setTimeout(() => console.log("timeout"), 0);

process.nextTick(() => console.log("nextTick"));

Promise.resolve().then(() => console.log("promise"));

console.log("end");