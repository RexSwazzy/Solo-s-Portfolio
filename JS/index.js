/* const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

let navbar = document.querySelector ('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
        navbar.classList.toggle('active');
} */


/* function redirectToThankYou() {
    // After the form is submitted, redirect the user
    window.location.href = "thankyou.html" // Change to your thank you page
}
 */

const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

function sendMail(){
    let params ={
        name : document.getElementById("name").value ,
        name : document.getElementById("email").value ,
        name : document.getElementById("message").value ,
    };
    
const serviceID = "service_k5hgxad";
const templateID = "template_hamdvsq"

emailjs
.send(serviceID, templateID, parms)
.then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("We received your message, please do well to check your mail later")
    })
.catch((err) => console.log(err));
}

