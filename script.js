// document.getElementById("message_id").style.display = "none";
const env = "";

// document.getElementByClassName("button_refresh_class").innerText = "a val";
// document.getElementByClassName("button_refresh_class").content = "v val";

// document.getElementById("button_refresh").innerText = "Mew val";
// document.getElementById("button_refresh").content = "Mew val";
// For Local;
const envurl = "images/";
const imageExt = ".png";

//Wordpress environment
// const envurl = "https://www.happytooth.ml/wp-content/uploads/2021/09/";
// const imageExt = ".jpg";

let html;
window.onload = function () {
  html = document.getElementById("full_body").innerHTML;
  loadImages();
};

//method to pick randomly from good images
function pickGoodImages() {
  let goodImages = [
    ["dairy" + imageExt, "good"],
    ["berries" + imageExt, "good"],
    ["egg" + imageExt, "good"],
    ["fish" + imageExt, "good"],
    ["green" + imageExt, "good"],
    ["honey" + imageExt, "good"],
    ["meat" + imageExt, "good"],
    ["nuts" + imageExt, "good"],
    ["sea" + imageExt, "good"],
    ["vegetables" + imageExt, "good"],
    ["vegetables2" + imageExt, "good"],
    ["water" + imageExt, "good"],
  ];
  let selectedGoodImages = getRandom(goodImages, 3);
  return selectedGoodImages;
}

//Method to pick from random bad images
function pickBadImages() {
  let badImages = [
    ["alcohol" + imageExt, "bad"],
    ["bread" + imageExt, "bad"],
    ["chips" + imageExt, "bad"],
    ["citrus" + imageExt, "bad"],
    ["coffee" + imageExt, "bad"],
    ["cola" + imageExt, "bad"],
    ["driedfruits" + imageExt, "bad"],
    ["gummy" + imageExt, "bad"],
    ["sunflower" + imageExt, "bad"],
    ["sweets" + imageExt, "bad"],
  ];
  let selectedBadImages = getRandom(badImages, 3);
  return selectedBadImages;
}

//Method to randomly select n imagse from arr of images
function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

function pickImages() {
  let selectedBadImages = pickBadImages();
  let selectedGoodImages = pickGoodImages();
  let allImages = selectedBadImages.concat(selectedGoodImages);
  let randomAllImages = getRandom(allImages, 6);
  return randomAllImages;
}

//Function to load images
function loadImages() {
  let randomAllImages = pickImages();

  document.querySelectorAll(".in_image").forEach((e, i) => {
    e.src = envurl + randomAllImages[i][0];
    e.classList.add(randomAllImages[i][1]);
  });

  // document.querySelectorAll(".good").forEach((e, i) => {
  //   e.src = envurl + selectedGoodImages[i];
  // });
  // document.querySelectorAll(".bad").forEach((e, j) => {
  //   e.src = envurl + selectedBadImages[j];
  // });
  document.getElementById("button_refresh").style.display = "block";
  document.getElementById("happy").src = envurl + "happyteeth.png";
  document.getElementById("sad").src = envurl + "sadteeth.png";

  document.getElementById("happyImage").src = envurl + "happychild.png";
  document.getElementById("sadImage").src = envurl + "sadchild.png";
}

// Method called to drop image on box
function allowDrop(event) {
  var t = event.target;
  // To prevent overlapping of images.
  console.log();

  if (
    !(
      t.classList.contains("in_image") ||
      jQuery("#" + t.id).find("img").length == 1
    )
  ) {
    event.preventDefault();
  } else {
  }
}

//Method called on dragging image
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

//Method called on drop of image
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

/*To check if all boxes has images*/
const checkGrid = function () {
  if (
    //To check if all box have data
    jQuery("#box1").find(".in_image").length == 1 &&
    jQuery("#box3").find(".in_image").length == 1 &&
    jQuery("#box5").find(".in_image").length == 1 &&
    jQuery("#box2").find(".in_image").length == 1 &&
    jQuery("#box4").find(".in_image").length == 1 &&
    jQuery("#box6").find(".in_image").length == 1
  ) {
    if (
      //To check if correct option
      jQuery("#box1").find(".good").length == 1 &&
      jQuery("#box3").find(".good").length == 1 &&
      jQuery("#box5").find(".good").length == 1 &&
      jQuery("#box2").find(".bad").length == 1 &&
      jQuery("#box4").find(".bad").length == 1 &&
      jQuery("#box6").find(".bad").length == 1
    ) {
      document.querySelectorAll(".box").forEach((item) => {
        jQuery(item).append(" <r>&#x2713;</r>");
        item.classList.add("success_selected");
        document.getElementById("success_message").style.display = "flex";
        document.getElementById("success_message").classList.add("my-element");
        // document.getElementById("progress-id").textContent = "6/10";
        // document.getElementById("progress-bar-id").style.width = "20%";
      });
    } else {
      //Left box
      if (jQuery("#box1").find(".good").length == 1) {
        document.getElementById("box1").classList.add("success_selected");
        $("#box1").append(" <r>&#x2713;</r>");
      } else {
        document.getElementById("box1").classList.add("fail_selected");
        $("#box1").append(" <wr> &#x2717;</wr>");
      }
      if (jQuery("#box3").find(".good").length == 1) {
        document.getElementById("box3").classList.add("success_selected");
        $("#box3").append(" <r>&#x2713;</r>");
      } else {
        document.getElementById("box3").classList.add("fail_selected");
        $("#box3").append(" <wr> &#x2717;</wr>");
      }
      if (jQuery("#box5").find(".good").length == 1) {
        document.getElementById("box5").classList.add("success_selected");
        $("#box5").append(" <r>&#x2713;</r>");
      } else {
        document.getElementById("box5").classList.add("fail_selected");
        $("#box5").append(" <wr> &#x2717;</wr>");
      }

      //Right box
      if (jQuery("#box2").find(".good").length == 1) {
        document.getElementById("box2").classList.add("fail_selected");
        $("#box2").append(" <wr> &#x2717;</wr>");
      } else {
        document.getElementById("box2").classList.add("success_selected");
        $("#box2").append(" <r>&#x2713;</r>");
      }
      if (jQuery("#box4").find(".good").length == 1) {
        document.getElementById("box4").classList.add("fail_selected");
        $("#box4").append(" <wr> &#x2717;</wr>");
      } else {
        document.getElementById("box4").classList.add("success_selected");
        $("#box4").append(" <r>&#x2713;</r>");
      }
      if (jQuery("#box6").find(".good").length == 1) {
        document.getElementById("box6").classList.add("fail_selected");
        $("#box6").append(" <wr> &#x2717;</wr>");
      } else {
        document.getElementById("box6").classList.add("success_selected");
        $("#box6").append(" <r>&#x2713;</r>");
      }

      document.getElementById("fail_message").style.display = "flex";
      document.getElementById("fail_message").classList.add("my-element");
    }
    //else {
    //     document.querySelectorAll(".box").forEach((item) => {
    //       item.classList.add("fail_selected");
    //       document.getElementById("fail_message").style.display = "flex";
    // document.getElementById("fail_message").classList.add("my-element");
    //       document.getElementById("fail_message").style.color = "white";
    //     });
    //   }
  }
};
