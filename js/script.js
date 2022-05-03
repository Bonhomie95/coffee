let loginForm = document.querySelector('.login-form');
let menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector('.header .nav');
document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.add('active');
}

document.querySelector('#close-login-form').onclick=()=>{
    loginForm.classList.remove('active');
}

menuBtn.onclick=()=>{
    navBar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
}

window.onscroll=()=>{
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
}