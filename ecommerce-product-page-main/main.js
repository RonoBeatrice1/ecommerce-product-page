// getElementById(id
// getElementsByClassName
// getElementsByTagName
// querySelector
// querySelectorAll

const mobileNavElement = document.querySelector(".navigation-mobile");
const openNavBtn = document.querySelector(".open-menu-btn");
const closeNavBtn = document.querySelector(".close-menu-btn");

// mobileNavElement.style.display = "none";

// event listeners

openNavBtn.addEventListener("click", function () {
  console.log("open nav btn clicked!!!!");
  // mobileNavElement.style.display = "flex";
  mobileNavElement.classList.add("show");
});

closeNavBtn.addEventListener("click", function () {
  console.log("close nav btn clicked!!!!");
  // mobileNavElement.style.display = "none";
  mobileNavElement.classList.remove("show");
});

// product Counter

const addProductCount = document.querySelector(".button-add");
const minusProductCount = document.querySelector(".button-minus");
const quantityElement = document.querySelector(".product-quantity");
const countError = document.querySelector(".count-error");

let counter = 1;
const maxStock = 10;
countError.style.display = "none";

function updateCounter(count) {
  quantityElement.textContent = count;
}

addProductCount.addEventListener("click", function () {
  counter++;
  updateCounter(counter);
  if (counter > maxStock) {
    quantityElement.textContent = maxStock;
    counter = maxStock;
    updateCounter(counter);
    countError.style.display = "block";
    countError.textContent = "we have only" + maxStock + " units in stock";
  } else {
    countError.style.display = "none";
  }
});
minusProductCount.addEventListener("click", function () {
  counter--;
  updateCounter(counter);
  if (counter < 1) {
    counter = 1;
    updateCounter(counter);

    countError.style.display = "block";
    countError.textContent = "Product count cannot be less than 1";
  } else {
    countError.style.display = "none";
  }
});

// Adding items to cart

let cartCount = 0;
const addToCart = document.querySelector(".add-to-cart-btn");
const cartCountSpan = document.getElementById("cart-count");

addToCart.addEventListener("click", function () {
  cartCount = cartCount + 1;
  cartCountSpan.textContent = cartCount;
});

// Sneaker Images switch
const galleryImage = document.getElementById("sneaker");
const thumbnails = document.getElementsByClassName("thumbnail");
const nextButton = document.getElementById("next-image");
const previousButton = document.getElementById("previous-image");

let currentIndex = 0;

// Function to update the gallery image source
function updateGalleryImage(index) {
  const newImageSrc = thumbnails[index].src;
  galleryImage.src = newImageSrc;
}

// Function to handle next button click
nextButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  updateGalleryImage(currentIndex);
});

// Function to handle previous button click
previousButton.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  updateGalleryImage(currentIndex);
});

// Function to handle thumbnail click
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function () {
    currentIndex = i;
    updateGalleryImage(currentIndex);
  });
}
