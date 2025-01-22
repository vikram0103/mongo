// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("<h1>Hello World</h1>");
// });

// server.listen(3000, () => {
//     console.log("Server running at http://127.0.0.1:3000");
// });

const calculate = require("./calculator")
console.log(calculate.add(10,20))