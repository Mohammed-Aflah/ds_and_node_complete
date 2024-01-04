const { fork } = require("child_process");
const child = fork("test.js");
const posts = [
  {
    id: 1,
    title: "helo",
  },
  {
    id: 2,
    title: "asfdlk",
  },
  {
    id: 3,
    title: "heloasdf",
  },
  {
    id: 4,
    title: "asdfkl",
  },
  {
    id: 5,
    title: "helasdflko",
  },
  {
    id: 6,
    title: "forlksdfafj🚌helo",
  },
];
child.on("message", (message) => {
  console.log(`Message from child is it = ${JSON.stringify(message)}`);
});

child.send(posts);
