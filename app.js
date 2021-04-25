// run: node app.js

console.log("starting");

// async
setTimeout(() => {
  console.log("2 second timeout");
}, 2000);

setTimeout(() => {
  console.log("0 second timeout 2");
}, 0);

console.log("stopping");
