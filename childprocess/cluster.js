const cluster = require("cluster");

if (cluster.istMaster) {
  console.log(`Master process ${process.pid} is running`);
} else {
  console.log(`worker ${process.pid} started `); 
}
