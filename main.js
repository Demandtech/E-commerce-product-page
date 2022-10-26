'use strict'
const productImageSlides = document.querySelectorAll(".product-image-slide");
const modalProductSlides = document.querySelectorAll(".modal-image-slide");
const productImages = document.querySelector(".product-images-container");
const productThumbnails = document.querySelectorAll('.thumbnail')
const orderControl = document.querySelector('.controls-btn')
const counterEl = document.querySelector('.counter')
const notification = document.querySelector(".cart-notification");
const addCartBtn = document.querySelector(".add-cart");
const modal = document.querySelector(".product-modal");
const modalContainer = document.querySelector('.modal-container')
const closeModal = document.querySelector('.modal-close');
const basketContent =  document.querySelector('.basket-content')
const productName = 'Fall Limited Edition Sneakers'
const btnNext = document.querySelector(".nav-next");
const btnPrev = document.querySelector(".nav-prev");
const modalNext = document.querySelector('.modalNext')
const modalPrev = document.querySelector('.modalPrev')
const modalNavigation = document.querySelector('.modal-navigation')
const thumbnails = document.querySelector(".product-tumbnails");
const modalThumbnails = document.querySelector('.modal-product-tumbnails')
const orderContainer = document.querySelector('.basket-content')

let curSlide = 0;
const maxSlide = productImageSlides.length
let counter = 0;
let price = 125;

notification.textContent = counter;
notification.style.display = "none";

orderContainer.addEventListener('click', function(e){
    const  deleteOrder = e.target;
    if(deleteOrder.classList.contains('delete-icon')){
        console.log(deleteOrder);
        basketContent.innerHTML = `<div class="empty-cart">
                                      <p>Your cart is empty</p>
                                 </div>`;
       counter = 0;
       notification.style.display = "none";
       counterEl.textContent = counter;
    }
})

//Order count control
if (counter == 0) {
    basketContent.innerHTML = `<div class="empty-cart">
                                      <p>Your cart is empty</p>
                                 </div>`;
}

orderControl.addEventListener('click', function(e){
 
 if(e.target.closest('.plus') && counter >= 0){
  counter ++
  counterEl.textContent = counter
  
 } else if(e.target.closest('.minus') && counter >0){
     counter--;
     counterEl.textContent = counter;
     // notification.textContent = counter;
 }
})

addCartBtn.addEventListener('click', ()=>{
  notification.textContent = counter;
  if(counter > 0){
   notification.style.display = 'block'
   let totalPrice = price * counter;
   basketContent.innerHTML = `
   <div class="new-order">
    <div class="order-wrapper">
        <div class="order">
                <img class="order-tumbnail" src="./images/image-product-1-thumbnail.jpg" alt="image-product-1-thumbnail">
                <div>
                    <p class="name">${productName}</p>
                    <p class="total-price">$${price} x ${counter} <strong>$${totalPrice.toFixed(2)}</strong></p>
                </div>
                <img id="delete-icon" class="delete-icon" src="./images/icon-delete.svg" alt="">
        </div>
        <button class="checkout-btn">
                checkout
        </button>
     </div>
    </div>`;
 }
})


//Modal
const displayModal = function(){
     
}
 
//Slider
function gotoSlide(slides, slide) {
    slides.forEach((s, i) => {
        s.style.transform = `translateX(${
            100 * (i - slide)
        }%)`;

        s.addEventListener("click", function (e) {
            if (window.innerWidth > 426) {
                modal.classList.add(
                    "active-modal"
                );
            }
        });
    });
}

function nextSlide(slides) {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    gotoSlide(slides, curSlide);
    activeThumbnail(curSlide);
}

function prevSlide(slides){
    if (curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    }
    // curSlide--
    gotoSlide(slides, curSlide);
    activeThumbnail(curSlide)
}

gotoSlide(productImageSlides, 0);
//Next btn
btnNext.addEventListener('click', function(){
    nextSlide(productImageSlides);
})

//Prev btn
btnPrev.addEventListener('click', function(){
    prevSlide(productImageSlides)
})

document.addEventListener("keydown",(e)=> {
    e.key === "ArrowRight" &&
        nextSlide(productImageSlides);
    e.key === "ArrowLeft" &&
        prevSlide(productImageSlides);
    
 });

 //activate thumbnail
 const activeThumbnail = function(slide) {
    document.querySelectorAll(".thumbnail-img").forEach(thumb=>{
       thumb.classList.remove('thumbnail-active') 
    });

    document.querySelector(`.thumbnail-img[data-slide="${slide}"]`).classList.add('thumbnail-active')
 }
 activeThumbnail(0)

thumbnails.addEventListener('click', function(e){ 
    if(e.target.classList.contains('thumbnail-img')){
       const slides = e.target.dataset.slide;
       gotoSlide(productImageSlides, slides); 
       activeThumbnail(slides);
    }   
})




//Modals EventListeners
closeModal.addEventListener('click', ()=>{
    modal.classList.remove("active-modal");
})

gotoSlide(modalProductSlides, 0);
modalNext.addEventListener('click', ()=>{
    nextSlide(modalProductSlides);
    modalActiveThumbnail(curSlide)
})
modalPrev.addEventListener('click', function(){
  prevSlide(modalProductSlides)
  modalActiveThumbnail(curSlide)
})



const modalActiveThumbnail = function (slide) {
    document.querySelectorAll(".modal-thumbnail-img").forEach((thumb) => {
            thumb.classList.remove("thumbnail-active");
        });

    document.querySelector(`.modal-thumbnail-img[data-slide="${slide}"]`).classList.add("thumbnail-active");
};
modalActiveThumbnail(0);

modalThumbnails.addEventListener("click",function (e) {
        if (e.target.classList.contains("modal-thumbnail-img")) {
            const slides = e.target.dataset.slide;
            gotoSlide(modalProductSlides, slides);
            modalActiveThumbnail(slides);
        }
    }
);




