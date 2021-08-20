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
  image1.src = "images/coke.png";
  const image2 = document.getElementById("bad2");
  image2.src = "images/icecream.png";
  const image3 = document.getElementById("bad3");
  image3.src = "images/lolipop.png";
  const image4 = document.getElementById("good1");
  image4.src = "images/pear.png";
  const image5 = document.getElementById("good2");
  image5.src = "images/apple.png";
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
  //To prevent overlapping of images.
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
  checkGrid();
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
    document.getElementById("success_message").style.display = "flex";
    // document.getElementById("message_id").innerHTML =
    //   "This is the correct answer";
  } else {
    document.getElementById("fail_message").style.display = "flex";
  }
}

/*To check if all boxes has images*/
const checkGrid = function () {
  if (
    //To check if all box have data
    $("#box1").find(".in_image").length == 1 &&
    $("#box3").find(".in_image").length == 1 &&
    $("#box5").find(".in_image").length == 1 &&
    $("#box2").find(".in_image").length == 1 &&
    $("#box4").find(".in_image").length == 1 &&
    $("#box6").find(".in_image").length == 1
  ) {
    if (
      //To check if correct option
      $("#box1").find(".good").length == 1 &&
      $("#box3").find(".good").length == 1 &&
      $("#box5").find(".good").length == 1 &&
      $("#box2").find(".bad").length == 1 &&
      $("#box4").find(".bad").length == 1 &&
      $("#box6").find(".bad").length == 1
    ) {
      document.querySelectorAll(".box").forEach((item) => {
        item.classList.add("success_selected");
        document.getElementById("success_message").style.display = "flex";
      });
    } else {
      document.querySelectorAll(".box").forEach((item) => {
        item.classList.add("fail_selected");
        document.getElementById("fail_message").style.display = "flex";
      });
    }
  }
};
