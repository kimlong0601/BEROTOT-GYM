//menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");
const menuClose = document.querySelector(".menu-close");
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
})
menuClose.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    menu.classList.remove("active");
})


//header shrink
const headerShrink = document.querySelector(".header-section")
window.addEventListener("scroll", () => {
    if(document.body.scroollTop > 20 || document.documentElement.scrollTop > 20){
        headerShrink.classList.add("shrink");
    }
    else{
        headerShrink.classList.remove("shrink");
    }
});


//scroll into view
const links = document.querySelectorAll(".nav-link");
    links.forEach((item) => {
        item.addEventListener("click", () => {
            const view = document.getElementById(item.getAttribute("data-link"));
            view.scrollIntoView({behavior:"smooth", block:"center"});
        })
    })

//scroll to Top
const scrollTop = document.getElementById("scrollTop-btn");
//show button
window.addEventListener("scroll", () => {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        scrollTop.style.display = "block";
    }else{
        scrollTop.style.display = "none";
    }
})
//scollTop click
function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//calculate bmi
const calculateForm = document.getElementById("calculate-form");
const calculateCm = document.getElementById("height");
const calculateKg = document.getElementById("weight");
const calculateMessage = document.getElementById("calculate-message");

const calculateBMI = (e) =>{
    e.preventDefault()
    //Check the field have a value
    if(calculateCm.value === '' || calculateKg.value === ''){
        calculateMessage.classList.remove("color-green")
        calculateMessage.classList.add("color-red")
        //show message
        calculateMessage.textContent = 'Please, fill in Height and Weight ✍️'
        //remove message
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3500)
    }
    else{
        const cm = calculateCm.value/100;
        const kg = calculateKg.value;
        const bmi = Math.round(kg/(cm*cm));
        //show bmi 
        if(bmi < 18.5){
            calculateMessage.classList.add("color-green")
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😔`
        }
        else if(bmi < 25){
            calculateMessage.classList.add("color-green")
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 🥳`
        }
        else{
            calculateMessage.classList.add("color-green")
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😬`
        }
        //clear the input field
        calculateCm.value = ''
        calculateKg.value = ''
        //remove message in 4 seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)
    }
}

calculateForm.addEventListener("submit", calculateBMI);



//Email 
const contactForm = document.getElementById("contact__form")
const email = document.getElementById("contact__email")
const message = document.getElementById("contact__message")

const checkEmail = (e) => {
    e.preventDefault()
    //check if input have value
    if(email.value === ''){
        message.classList.remove("color-green")
        message.classList.add("color-red")
        //show message
        message.textContent = "Please! Enter the email ✍️."
        //time out
    }
    else{
        message.classList.remove("color-red")
        message.classList.add("color-green")
        message.textContent = "Subcribe succesful 👌." 
    }

    email.value = ''
    setTimeout(() => {
        message.textContent = ''
    }, 4000)
}

contactForm.addEventListener("submit", checkEmail);




/*=Scroll reveal animation=*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
})
//header
sr.reveal(`.nav-link`,{interval: 300})
sr.reveal(`.nav-button`,{origin: "bottom"})
sr.reveal(`.nav-logo`)
//home 
sr.reveal(`.hero-content__data`)
sr.reveal(`.hero-content__images img`, {delay: 400, origin: 'bottom'})
//logo
sr.reveal(`.logo-content img`, {interval: 300})
//programs
sr.reveal(`.programs-header__subtitle`)
sr.reveal(`.programs-header__title`)
sr.reveal(`.programs-card`, {delay: 400, interval: 200})
//about
sr.reveal(`.about-content__images img`,{origin: "bottom"})
sr.reveal(`.data-subtitle`)
sr.reveal(`.data-title`)
sr.reveal(`.data-description`, {delay: 600})
sr.reveal(`.data-milestone`, {delay: 700})
//price
sr.reveal(`.price-heading`)
sr.reveal(`.price-content__box`,{delay: 400, interval: 200, origin: "bottom"})
//BMI
sr.reveal(`.data__title`)
sr.reveal(`.calculate-content__image img`,{origin: "bottom"})
sr.reveal(`.data__description`, {delay: 400, origin: "left"})
sr.reveal(`.calculate__box`, {delay: 600, interval: 200, origin:"left"})
sr.reveal(`.calculate`,{delay: 700, origin:"left"})
//footer
sr.reveal(`.footer__logo`)
sr.reveal(`.footer__title`)
sr.reveal(`.footer__description`, {origin: "left", delay: 400})
sr.reveal(`.footer__form`, {origin: "left", delay: 400})
sr.reveal(`.footer__link`, {origin: "bottom", delay: 400, interval: 200})