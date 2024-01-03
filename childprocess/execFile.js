// child process

// methods
// ________________________________
// 1.exec ✔
// 2.fork
// 3.execFile ✔
// 4.child-process
// 5.spawn

// execFile method
// ___________________________________________

const { execFile } = require("child_process");
execFile("node", ["./exec.js"], (error, stdout, stderr) => {
  try {
    if (error) {
      console.log(`throw main err ${error}`);
      return;
    }
    if (stderr) {
      console.log(`stderr = ${stderr}`);
      return;
    }
    console.log(`result => ${stdout}`);
  } catch (err) {
    console.log(err.message, " err");
  }
});
