var Form1 = document.getElementById("form1");
var Form2 = document.getElementById("form2");
var Form3 = document.getElementById("form3");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");

var progress = document.getElementById("progress");

Next1.onclick = function () {
  Form1.style.left = "-450px";
  Form2.style.left = "35px";
  progress.style.width = "266px";
};
Next2.onclick = function () {
  Form2.style.left = "-450px";
  Form3.style.left = "35px";
  progress.style.width = "400px";
};
Back1.onclick = function () {
  Form1.style.left = "35px";
  Form2.style.left = "450px";
  progress.style.width = "133.3px";
};
Back2.onclick = function () {
  Form2.style.left = "35px";
  Form3.style.left = "450px";
  progress.style.width = "266px";
};