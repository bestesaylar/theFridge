// import saveAs from 'file-saver';

let magnet = document.getElementById("magnet");
let notes = document.getElementById("notes");
let postit = document.getElementById("postit");
let letter = document.getElementById("letter");
let text = document.getElementById("text");

let abcBtn = document.getElementById("abcAdder");
let cilekBtn = document.getElementById("cilekAdder");

let note1Btn = document.getElementById("note1Adder");
let note2Btn = document.getElementById("note2Adder");
let note3Btn = document.getElementById("note3Adder");
let note4Btn = document.getElementById("note4Adder");
let note5Btn = document.getElementById("note5Adder");

let post1Btn = document.getElementById("post1Adder");
let post2Btn = document.getElementById("post2Adder");
let post3Btn = document.getElementById("post3Adder");
let post4Btn = document.getElementById("post4Adder");
let post5Btn = document.getElementById("post5Adder");

let letter1Btn = document.getElementById("letter1Adder");
let letter2Btn = document.getElementById("letter2Adder");
let letter3Btn = document.getElementById("letter3Adder");
let letter4Btn = document.getElementById("letter4Adder");
let letter5Btn = document.getElementById("letter5Adder");

let magnet1Btn = document.getElementById("maget1Adder");
let magnet2Btn = document.getElementById("magnet2Adder");
let magnet3Btn = document.getElementById("magnet3Adder");

//
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");

let appDiv = document.getElementById("app");
let clear = document.getElementById("clear");

magnet.addEventListener("click", function() {
  first.style.display = "flex";
  second.style.display = "none";
  third.style.display = "none";
  fourth.style.display = "none";
});
notes.addEventListener("click", function() {
  first.style.display = "none";
  second.style.display = "flex";
  third.style.display = "none";
  fourth.style.display = "none";
});

postit.addEventListener("click", function() {
  first.style.display = "none";
  second.style.display = "none";
  third.style.display = "flex";
  fourth.style.display = "none";
});

letter.addEventListener("click", function() {
  first.style.display = "none";
  second.style.display = "none";
  third.style.display = "none";
  fourth.style.display = "flex";
});

//text
text.addEventListener("click", function() {
  appDiv.innerHTML += `
  <h3 class="draggable"
  contenteditable
  style="left:${window.innerWidth / 2 + Math.random() * 50}px;
  top:${window.innerHeight / 2 + Math.random() * 50}px;"
  >
Write a message
  </h3>
  `;
});
//Magnets
abcBtn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/9e4c2378-84cc-4473-81fe-0d75aca28e65%2Fabc.svg?v=1606331949168"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});

magnet1Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fmagnet1.svg?v=1606338810416"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});

cilekBtn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fcilek.svg?v=1606338812449"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});

magnet2Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fmagnet2.svg?v=1606338810119"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});

magnet3Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fmagnet3.svg?v=1606338812112"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});
//Notes
note1Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fpaper.svg?v=1606338810327"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});

note2Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fpaper2.svg?v=1606338810990"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});

note3Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fpaper3.svg?v=1606338810379"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});

note4Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fpaper4.svg?v=1606338810361"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});

note5Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fpaper5.svg?v=1606338811684"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});
//Postits

post1Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fpost1.svg?v=1606338811566"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});

post2Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fpost2.svg?v=1606338812003"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});

post3Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fpost3.svg?v=1606338810119"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});

post4Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fpost4.svg?v=1606338810685"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});

post5Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fpost5.svg?v=1606338810430"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});
//L
//Letters

letter1Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fpostcard1.svg?v=1606338825093"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});

letter2Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fpostacard2.svg?v=1606338825848"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});

letter3Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fpostcard3.svg?v=1606338823370"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});

letter4Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fpostcard4.svg?v=1606338820400"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});

letter5Btn.addEventListener("click", function() {
  console.log("orangeBtn");
  appDiv.innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="https://cdn.glitch.com/52b91d85-dc25-4b9b-9e8c-ab4d56238a3f%2Fpostcard5.svg?v=1606338818980"
   style="left:${window.innerWidth / 2 + Math.random() * 50}px;
          top:${window.innerHeight / 2 + Math.random() * 50}px;
          width:100px" />
  `;
});
//export

let upload = document.getElementById("upload");
//clear

clear.addEventListener(“click”, function() {
  appDiv.innerHTML = “”;
});

// function clearcontent(appDiv) {
//             document.getElementById(appDiv).innerHTML = "";
//   }


// fetch posts from server
function getPosts() {
  fetch("uploaded/fridge.html", {
    method: "get"
  })
    .then(res => res.text())
    .then(response => {
      console.log(response);
      if (response) {
        document.getElementById("app").outerHTML = response;
        appDiv = document.getElementById("app");
      }
    });
}
getPosts();

//UPLOAD CANVAS TO SERVER
upload.addEventListener("click", e => {
  let payload = {
    html: document.getElementById("app").outerHTML
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
