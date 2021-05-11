const topSpan = document.querySelector('.bg.top');
const bottomSpan = document.querySelector('.bg.bottom');
const bgContainer = document.querySelector('.bg-container');

//Select Forms
const loginForm = document.querySelector('#login-form');
const registerForm = document.querySelector('#register-form');

//select links
const registerUrl = document.querySelector('#login-form .link');
const loginUrl = document.querySelector('#register-form .link');

let rotateVal = 1;

const toggleFormAnim = () =>{
    topSpan.style.transform = `rotateX(-180deg)`;
    setTimeout(() => {
        bottomSpan.style.transform = `rotateX(180deg)`;
        setTimeout(() =>{
            bgContainer.style.transform = `rotateY( ${rotateVal * 180}deg )`;
            setTimeout( ()=>{
                bottomSpan.style.transform = `rotateX(0)`;
                setTimeout( () => {
                    topSpan.style.transform = `rotateX(0)`;
                    rotateVal++;
                }, 1000);
            },1000);
        }, 1000);
    }, 1000);
}

registerUrl.addEventListener('click', () => {
    loginForm.classList.remove('active');
    setTimeout( () =>{
        toggleFormAnim();
        setTimeout( () =>{
            registerForm.classList.add('active');
        }, 5000);
    }, 500);
})

loginUrl.addEventListener('click', () => {
    registerForm.classList.remove('active');
    setTimeout( () => {
        toggleFormAnim();
        setTimeout( () => {
            loginForm.classList.add('active');
        }, 5000);
    }, 500);
})