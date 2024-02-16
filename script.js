// let purple = document.querySelectorAll(".fialova");
// let gold = document.querySelectorAll(".zlata");
// let silver = document.querySelectorAll(".stribrna");
// let black = document.querySelectorAll(".cerna");

// purple.forEach(function (element) {
//   element.addEventListener("click", function () {
//     let imgElement = document.querySelector(".img img");
//     imgElement.src = "images/iphone-purple.jpg";
//   });
// });

// gold.forEach(function (element) {
//   element.addEventListener("click", function () {
//     let imgElement = document.querySelector(".img img");
//     imgElement.src = "images/iphone-gold.jpg";
//   });
// });

// silver.forEach(function (element) {
//   element.addEventListener("click", function () {
//     let imgElement = document.querySelector(".img img");
//     imgElement.src = "images/iphone-silver.jpg";
//   });
// });

// black.forEach(function (element) {
//   element.addEventListener("click", function () {
//     let imgElement = document.querySelector(".img img");
//     imgElement.src = "images/iphone-black.jpg";
//   });
// });

// Path: script.js
function addColorClickListener(colorClass, imagePath) {
  let elements = document.querySelectorAll(colorClass);
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      let imgElement = document.querySelector(".img img");
      imgElement.src = imagePath;

      // Remove the 'scaled' class from all elements
      document
        .querySelectorAll(".s")
        .forEach((el) => el.classList.remove("scaled"));

      // Add the 'scaled' class to the clicked element
      element.classList.add("scaled");
    });
  });
}

// Use the function for each color
addColorClickListener(".fialova", "images/iphone-purple.jpg");
addColorClickListener(".zlata", "images/iphone-gold.jpg");
addColorClickListener(".stribrna", "images/iphone-silver.jpg");
addColorClickListener(".cerna", "images/iphone-black.jpg");
