// child process

// methods
// ________________________________
// 1.exec ✔
// 2.fork
// 3.execFile✔
// 4.child-process
// 5.spawn✔

// spawn method
// ___________________________________________
const { spawn } = require("child_process");

const child = spawn("dir");

child.stdout.on("data", (data) => {
  console.log(` data is ${data}`);
});
child.stderr.on("data", (dt) => console.log(`err is ${dt}`));

child.on("error", (error) => console.log(` main err: ${error}`));

child.on("exit", (code, signal) => {
  if (code) {
    console.log(`Prcess exit with code ${code}`);
  }
  if (signal) console.log(`process killted ${signal}`);
  console.log("done ✔❤");
});
