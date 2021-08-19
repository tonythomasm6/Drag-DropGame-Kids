// document.getElementById("message_id").style.display = "none";

let html;
window.onload = function () {
  html = document.getElementById("full_body").innerHTML;
  loadImages();
};

function loadImages() {
  document.getElementById("success_message").style.display = "none";

  document.getElementById("fail_message").style.display = "none";

  const titleImage1 = document.getElementById("happy");
  titleImage1.src = "images/GoodTeeth.png";
  const titleImage2 = document.getElementById("sad");
  titleImage2.src = "images/badTeeth.png";

  const image1 = document.getElementById("bad1");
  image1.src = "images/coke.jfif";
  const image2 = document.getElementById("bad2");
  image2.src = "images/icecream.jfif";
  const image3 = document.getElementById("bad3");
  image3.src = "images/lolipop.jfif";
  const image4 = document.getElementById("good1");
  image4.src = "images/pear.jfif";
  const image5 = document.getElementById("good2");
  image5.src = "images/apple.jfif";
  const image6 = document.getElementById("good3");
  image6.src = "images/milk.png";

  const happyImage = document.getElementById("happyImage");
  happyImage.src = "images/happychild.png";
  const sadImage = document.getElementById("sadImage");
  sadImage.src = "images/sadchild.png";
}

// JS
function allowDrop(event) {
  var t = event.target;
  console.log(t.classList.contains("in_image"));
  if (!t.classList.contains("in_image")) {
    event.preventDefault();
  }
}
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  //replace $ with jQuery for wordpress
}

function reload() {
  var container = document.getElementById("full_body");
  container.innerHTML = html;
  loadImages();
  // document.getElementById("image_row_id").style.display = "none";
}

function submit() {
  if (
    $("#box1").find(".good").length == 1 &&
    $("#box3").find(".good").length == 1 &&
    $("#box5").find(".good").length == 1 &&
    $("#box2").find(".bad").length == 1 &&
    $("#box4").find(".bad").length == 1 &&
    $("#box6").find(".bad").length == 1
  ) {
    alert("hurrayyyy!");
    document.getElementById("success_message").style.display = "flex";
    // document.getElementById("message_id").innerHTML =
    //   "This is the correct answer";
  } else {
    document.getElementById("fail_message").style.display = "flex";
  }
}

/*To make mobile friendly*/
// window.onload = function () {
//   // find the element that you want to drag.
//   var box = document.getElementById("coke");

//   /* listen to the touchMove event,
//   every time it fires, grab the location
//   of touch and assign it to box */

//   box.addEventListener("touchmove", function (e) {
//     // grab the location of touch
//     var touchLocation = e.targetTouches[0];

//     // assign box new coordinates based on the touch.
//     box.style.left = touchLocation.pageX + "px";
//     box.style.top = touchLocation.pageY + "px";
//   });

//   /* record the position of the touch
//   when released using touchend event.
//   This will be the drop position. */

//   box.addEventListener("touchend", function (e) {
//     // current box position.
//     var x = parseInt(box.style.left);
//     var y = parseInt(box.style.top);
//   });
// };
