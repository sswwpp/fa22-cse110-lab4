function currTime() {
  let d = new Date();
  time = d.toLocaleTimeString();
  console.log(time);
}
setInterval(currTime, 1000);
