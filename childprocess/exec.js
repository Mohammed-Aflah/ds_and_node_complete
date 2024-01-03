// child process

// methods
// ________________________________
// 1.exec ✔
// 2.fork
// 3.execFile
// 4.child-process
// 5.spawn

// exec method
// ___________________________________________

const { exec } = require("child_process");

// ls -lh this is terminal command list all files
exec("dir", (err, stdout, stderr) => {
    try{
        if (err) {
          console.log(`Error is main err ${err.message}`);
          return;
        }
        if (stderr) {
          console.log(`standard err ${stderr}`);
          return;
        }
        console.log(`stdout ${stdout}`);
    }catch(err){
        console.log(` error is ${err.message}`);
    }
});
