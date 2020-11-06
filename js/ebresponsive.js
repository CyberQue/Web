burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navImage = document.querySelector('.navImage')
navList = document.querySelector('.nav-list') 

burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class-resp');
    navImage.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})