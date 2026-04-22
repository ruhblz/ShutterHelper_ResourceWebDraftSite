

function filterSelection(category) { // Defines a function called filterSelection that takes a parameter called category. This function will be responsible for filtering the items based on the selected category.
  const items = document.querySelectorAll(".item"); // Selects all elements with the class "item" and stores them in a NodeList called items. This allows us to easily access and manipulate all the items that we want to filter based on the selected category.

  items.forEach(item => {
    item.classList.remove("show"); // Removes the "show" class from all items to hide them before applying the filter. This ensures that only the items that match the selected category will be shown.

    if (category === "all" || item.classList.contains(category)) { // Checks if the selected category is "all" or if the item has a class that matches the selected category. If either condition is true, the item should be shown.
      item.classList.add("show"); // Adds the "show" class to the item if it matches the selected category or if the "all" category is selected. This makes the item visible on the page.
    }
  });
}

// Highlight active button
const btnContainer = document.getElementById("myBtnContainer"); // Finds the HTML element with id="myBtnContainer" and stores it. This is the parent wrapper around all the buttons.//
const btns = btnContainer.querySelectorAll(".btn"); // Finds all elements with the class "btn" that are children of btnContainer and stores them in a NodeList called btns. This allows us to easily access and manipulate all the buttons within the container.

btns.forEach(btn => { // Iterates through each button in the btns NodeList and attaches a click event listener to each button. When a button is clicked, the function inside the event listener will execute.
  btn.addEventListener("click", function () { // When a button is clicked, this function will run. The "this" keyword refers to the button that was clicked.
    const current = btnContainer.querySelector(".active"); // Finds the currently active button (the one with the class "active") within the btnContainer and stores it in the variable current. This allows us to identify which button is currently highlighted as active.
    if (current) current.classList.remove("active"); // If there is a currently active button (i.e., if current is not null), this line removes the "active" class from that button, effectively deactivating it.
    this.classList.add("active"); // Adds the "active" class to the button that was clicked (the current button), making it the new active button. This visually highlights the clicked button as active.
  });
});

document.querySelectorAll(".photo img").forEach(img => { // Selects all <img> elements that are descendants of elements with the class "photo" and iterates through each of them using forEach. For each image, it attaches a click event listener.
  img.addEventListener("click", () => { // When an image is clicked, this function will run. The "img" variable refers to the image that was clicked.
    const captionBox = img.parentElement.querySelector(".caption"); // Finds the element with the class "caption" that is a child of the parent element of the clicked image (which is the .photo div) and stores it in the variable captionBox. This allows us to access the caption box associated with the clicked image.

    if (captionBox.style.display === "block") { // Checks if the caption box is currently displayed (i.e., if its display style is set to "block"). If it is, this means the caption is currently visible.
      captionBox.style.display = "none"; // If the caption box is currently visible, this line hides it by setting its display style to "none".
      captionBox.textContent = ""; // Clears the text content of the caption box, effectively removing any caption text that was previously displayed.
    } else {
      captionBox.textContent = img.alt; // If the caption box is not currently visible, this line sets its text content to the alt attribute of the clicked image. This means that the caption will display the alternative text associated with the image.
      captionBox.style.display = "block"; // Finally, this line makes the caption box visible by setting its display style to "block". This allows the caption to be shown when the image is clicked.
    }
  });
});