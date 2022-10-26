'use strict'

const navList = document.querySelector('.nav-list');
const navItem = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll(".nav-link");
const navBg = document.querySelector(".nav-bg");
const basket = document.querySelector(".basket");

//Active nav-link
for(let i = 0; i < navLinks.length; i++){
 navLinks[i].addEventListener('click', function(){
  let current = document.getElementsByClassName('active');
  current[0].className =  current[0].className.replace('active', '')
  this.className +=' active'
  navBg.classList.remove("menu-open");
 })
}
//Basket Display
document.querySelector('.cart').addEventListener('click', function(){
 basket.classList.toggle('basket-display')
})

//Hamburger toggle
document.querySelector('.hamburger-open').addEventListener('click', ()=>{
  navBg.classList.add('menu-open')
})

document
    .querySelector(".hamburger-close")
    .addEventListener("click", () => {
        navBg.classList.remove("menu-open");
    });