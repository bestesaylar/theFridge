let canvas = document.getElementById("canvas");
let upload = document.getElementById("upload");
let posts = document.getElementById("posts");

function getPosts() {
  fetch("/posts", {
    method: "get"
  })
    .then(res => res.json())
    .then(response => {
      console.log("posts:", JSON.stringify(response));

      let images_html = response
        .map(file_url => {
          return `<img src="uploaded/${file_url}">`;
        })
        .join("\n");
      posts.innerHTML = images_html;
    });
}
getPosts();

upload.addEventListener("click", e => {
  let payload = {
    image: canvas.toDataURL("image/png"),
    name: "my name"
  };
  fetch("/upload", {
    method: "POST",
    body: JSON.stringify(payload), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => {
      console.log("Success:", JSON.stringify(response));
      getPosts();
    });
});
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
