let canvas = document.getElementById("canvas");
let upload = document.getElementById("upload");


upload.addEventListener("click",e=>{
  
  let payload = {
    img: canvas.toDataURL("image/png"),
    name: "my name",

  }
  fetch(functions._url("upload"), {
      method: "POST",
      body: JSON.stringify(payload), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log("Success:", JSON.stringify(response));
        this.play();
      })
  
  
})
var ctx = canvas.getContext("2d");

let mousedown = false;
let last_x = 0;
let last_y = 0;
canvas.addEventListener("mousedown", e => {
  mousedown = true;

  let bounds = canvas.getBoundingClientRect();
  last_x = e.clientX - bounds.left;
  last_y = e.clientY - bounds.top;
});

canvas.addEventListener("mouseup", e => {
  mousedown = false;
});

canvas.addEventListener("mousemove", e => {
  if (!mousedown) {
    return;
  }
  let bounds = canvas.getBoundingClientRect();

  ctx.beginPath();
  ctx.moveTo(last_x, last_y);
  ctx.lineTo(e.clientX - bounds.left, e.clientY - bounds.top);
  ctx.stroke();
  ctx.translate(3, 3);
  ctx.beginPath();
  ctx.moveTo(last_x, last_y);
  ctx.lineTo(e.clientX - bounds.left, e.clientY - bounds.top);
  ctx.stroke();
  ctx.resetTransform();
  ctx.translate(-3, -3);
  ctx.beginPath();
  ctx.moveTo(last_x, last_y);
  ctx.lineTo(e.clientX - bounds.left, e.clientY - bounds.top);
  ctx.stroke();
  ctx.resetTransform();

  last_x = e.clientX - bounds.left;
  last_y = e.clientY - bounds.top;
});
