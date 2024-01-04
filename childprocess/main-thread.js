const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
    // Code for the main thread
  const worker = new Worker(__filename);
  worker.on("message", (message) => {
    console.log(`Recived message from worder: ${message}`);
  });
}else{
    // Code for the worker thread
    parentPort.postMessage("Hello from the worker")
}
