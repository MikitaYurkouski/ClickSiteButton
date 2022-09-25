var slider1 = createNewSlider();

{
    imagesUrls: [],
    currentImageIndex: 0,
    showPrevBtn: null, // document.querySelector(".show-prev-btn"), //getElementById меняем на querySelector
    showNextBtn: null, // document.querySelector(".show-next-btn"),//getElementById меняем на querySelector
    slideImage: null, // document.querySelector(".slide-img"),//getElementById меняем на querySelector

    start: function (elId) {
        var that = this;


        var elSelector = "#" + elId;
        var el = document.querySelector(elSelector); //"#itk-slider1" заменяем на поиск по ID и пишем переменную elSelector
 
        this.showPrevBtn = el.querySelector(".show-prev-btn");
        this.showNextBtn = el.querySelector(".show-next-btn");
        this.slideImage = el.querySelector(".slide-img");

        //subscribe to events
        this.showPrevBtn.addEventListener("click", function(e) {
            that.onShowPrevBtnClick(e);
        });
        this.showNextBtn.addEventListener("click", function(e) {
            that.onShowNextBtnClick();
        });

    //create images array
    this.imagesUrls.push("https://www.auto-data.net/images/f44/BMW-3-Series-Touring-F31.jpg");
    this.imagesUrls.push("https://avcdn.av.by/advertimageoriginal/0000/0034/7945.jpeg");
    this.imagesUrls.push("https://a.d-cd.net/Zcv5tHAfg4kBKR8YxtIIsbqp1Uw-960.jpg");
    this.imagesUrls.push("https://a.d-cd.net/bZpIVc4_5-j6jWC14mNtrozY9ZY-960.jpg");



    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = true;
    },

    onShowPrevBtnClick: function(e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        //disable prev button if need
        if (this.currentImageIndex === 0) {
            showPrevBtn.disabled = true;
        }
    },

    onShowNextBtnClick: function(e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;
        //disable next button if need
        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    }


};
