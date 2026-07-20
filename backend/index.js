import path from "path";

const data = path.join("components", "main", "data.txt");
// joing file path: relative path

const resolvedData = path.resolve("components");
// absolute
console.log(resolvedData)