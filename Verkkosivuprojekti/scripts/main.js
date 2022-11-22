/*function gall1(){
	var modal = document.getElementById("myModal");
	var modalImg = document.getElementById("figu");
	var captionText = document.getElementById("caption");
	var img1 = document.getElementById("figu1");
var img2 = document.getElementById("figu2");
var img3 = document.getElementById("figu3");
var img4 = document.getElementById("figu4");
var img5 = document.getElementById("figu5");
var img6 = document.getElementById("figu6");
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}*/
var img1 = document.getElementById("modal");
img1.onclick = function() {
	var modal = document.getElementById("myModal");

  modal.style.display = "block";
}
function galleriaan1(){
	var modal = document.getElementById("galleria.html#myModal");
	window.location.assign("galleria.html");
	modal.style.display = "block";
	modalImg.src = figu1.src;
	captionText.innerHTML = figu1.alt;
}
function clouse(){
	var modal = document.getElementById("myModal");
	modal.style.display = "none";
}