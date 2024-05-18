
let image = document.getElementById('hero_image');
let heading = document.getElementById('hero_h1');
let paragraph = document.getElementById('hero_para');


// function head(){
//     if(heading.innerHTML.match('Discover innovative ways to decorate')){
//         heading.innerHTML = 'yooo';
//     } 
//     // else{
//     //     image.src = 'images/desktop-image-hero-1.jpg'
//     // }
// }

function forwards(){
    if(image.src.match('images/desktop-image-hero-1.jpg')   ){
        image.src = 'images/desktop-image-hero-2.jpg';
        heading.innerText = 'We are available all across the globe';
        paragraph.innerText = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`;
    } else{
        image.src = 'images/desktop-image-hero-3.jpg';
        heading.innerText = 'Manufactured with the best materials';
        paragraph.innerText = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`;
    }
}
function backwards(){
    if(image.src.match('images/desktop-image-hero-3.jpg')){
        image.src = 'images/desktop-image-hero-2.jpg';
        heading.innerText = 'We are available all across the globe';
        paragraph.innerText = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`;
    } else{
        image.src = 'images/desktop-image-hero-1.jpg';
        heading.innerText = 'Discover innovative ways to decorate';
        paragraph.innerText = `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`;
    }
}

const menuBtnOpen = document.querySelector('#menu_open');
const menuBtnClose = document.querySelector('#menu_close');
const hamburger = document.querySelector('.hamburger');

menuBtnOpen.addEventListener('click', show);
menuBtnClose.addEventListener('click', close);

function show(){
    hamburger.classList.add('hamburger_appear');
}
function close(){
    hamburger.classList.remove('hamburger_appear');
}