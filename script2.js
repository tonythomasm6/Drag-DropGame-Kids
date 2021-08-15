// document.getElementById("message_id").style.display = "none";

let html;
window.onload = function () {
  html = document.getElementById("full_body").innerHTML;
};

// JS
function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  //replace $ with jQuery for wordpress
  if (
    $("#box1").find("#cat").length == 1 &&
    $("#box3").find("#dog").length == 1 &&
    $("#box5").find("#fish").length == 1
  ) {
    alert("CORRECT!");
  }

  if (
    $("#box1").find(".good").length == 1 &&
    $("#box3").find(".good").length == 1 &&
    $("#box5").find(".good").length == 1 &&
    $("#box2").find(".bad").length == 1 &&
    $("#box4").find(".bad").length == 1 &&
    $("#box6").find(".bad").length == 1
  ) {
    alert("hurrayyyy!");
    document.getElementById("message_id").style.display = "show";
    document.getElementById("message_id").innerHTML =
      "This is the correct answer";
  }
}

function reload() {
  var container = document.getElementById("full_body");
  container.innerHTML = html;
  // document.getElementById("image_row_id").style.display = "none";
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
