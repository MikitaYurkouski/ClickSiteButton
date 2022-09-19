var imagesUrls = [];
var currentImageIndex = 0;
//find elements
var showPrevBtn = document.getElementById ("show-prev-btn");
var showNextBtn = document.getElementById ("show-next-btn");
var slideImage = document.getElementById ("slide-img");

//subscribe to events
showPrevBtn.addEventListener("click", onShowPrevBtnClick);
showNextBtn.addEventListener("click", onShowNextBtnClick);

//create images array
// var imagesUrls = []; Перенесли выше
imagesUrls.push ("https://www.auto-data.net/images/f44/BMW-3-Series-Touring-F31.jpg");
imagesUrls.push ("https://avcdn.av.by/advertimageoriginal/0000/0034/7945.jpeg");
imagesUrls.push ("https://a.d-cd.net/Zcv5tHAfg4kBKR8YxtIIsbqp1Uw-960.jpg");
imagesUrls.push ("https://a.d-cd.net/bZpIVc4_5-j6jWC14mNtrozY9ZY-960.jpg");

//var currentImageIndex = 0; Перенесли выше

slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true




//finction definition
function onShowPrevBtnClick (e) {
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;

    //disable prev button if need
    if (currentImageIndex === 0 ) {
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick (e) {
    currentImageIndex++;
      slideImage.src = imagesUrls[currentImageIndex];
      showPrevBtn.disabled = false;
    //disable next button if need
      if (currentImageIndex === (imagesUrls.length - 1) ) {
        showNextBtn.disabled = true;
    }
}
