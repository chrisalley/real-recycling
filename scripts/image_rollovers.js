
// Creates two arrays of image sources, for mouseover and mouseout images.
function createImageLists() {
  imageList = new Array();
  imageRollOverList = new Array();
  
  imageList[0] = "images/home.png";
  imageList[1] = "images/metals.png";
  imageList[2] = "images/glass.png";
  imageList[3] = "images/cardboard.png";
  imageList[4] = "images/paper.png";
  imageList[5] = "images/plastics.png";
  imageList[6] = "images/contact.png";      
      
  imageRollOverList[0] = "images/home_rollover.png";
  imageRollOverList[1] = "images/metals_rollover.png";
  imageRollOverList[2] = "images/glass_rollover.png";
  imageRollOverList[3] = "images/cardboard_rollover.png";
  imageRollOverList[4] = "images/paper_rollover.png";
  imageRollOverList[5] = "images/plastics_rollover.png";
  imageRollOverList[6] = "images/contact_rollover.png";
}
    
//  Replaces an image will another image when it is rolled over.
function showRollOverImage(imageNumber) {
  var imageId = "image" + imageNumber;
  document.getElementById(imageId).src = imageRollOverList[imageNumber];
}

// Replaces a rollover image will it's normal version when the mouse is moved off it.
function showNormalImage(imageNumber) {
  var imageId = "image" + imageNumber;
  document.getElementById(imageId).src = imageList[imageNumber];
}

// Preloads all of the rollover images that are to be used on the page.
function preloadImages() {
  createImageLists();
  images = new Array();
  for (var i = 0; i < imageRollOverList.length; i++) {
    images[i] = new Image();
    images[i].src = imageRollOverList[i];
  }
}