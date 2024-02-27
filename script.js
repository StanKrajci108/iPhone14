// Function to add click listeners
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
