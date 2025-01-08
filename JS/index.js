document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
const menuButton = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');
const toggleBtn = document.querySelector(".toggleBtn");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
// mobileMenu.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     console.log('The menu icon was clicked')
// });
toggleBtn.addEventListener("click", (e) => {
    navbar.classList.toggle("shownavbar");
    // console.log(navbar.classList);
    const screenwidth = window.innerWidth;
    if (navbar.classList.contains("shownavbar") && screenwidth <= 900) {
      // e.target.classList.remove("fa-bars");
      // e.target.classList.add("fa-times");
    }
  });
  body.addEventListener("click", (e) => {
    const clickX = e.clientX;
    const clickY = e.clientY;
    const screenwidth = window.innerWidth;
    const clickElement = e.target.classList[1];
    // console.log(clickY);
    if (
      screenwidth <= 900 &&
      clickX > 300 &&
      clickY >= 80 &&
      clickElement !== "toggleBtn"
    ) {
      navbar.classList.remove("shownavbar");
    }
  });
// let navbar = document.querySelector ('.navbar');

// document.querySelector('#menu-icon').onclick = () =>{
//         navbar.classList.toggle('active');
// } 


/* function redirectToThankYou() {
    // After the form is submitted, redirect the user
    window.location.href = "thankyou.html" // Change to your thank you page
}
 */

const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

// Vicky commented out here
// function sendMail(){
//     let params ={
//         name : document.getElementById("name").value ,
//         name : document.getElementById("email").value ,
//         name : document.getElementById("message").value ,
//     };
    
// const serviceID = "service_k5hgxad";
// const templateID = "template_hamdvsq"

// emailjs
// .send(serviceID, templateID, parms)
// .then((res) => {
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("message").value = "";
//         console.log(res);
//         alert("We received your message, please do well to check your mail later")
//     })
// .catch((err) => console.log(err));
// }

// Vicky stopped commenting out here and added her own

// Initialize EmailJS with your Public Key
(function () {
    emailjs.init("NAgetjM71Gt9QtTlo"); 
  })();
  
  // Redirect to Thank You page
  const redirectToThankYou = () => {
    console.log("Redirecting to Thank You page...");
    window.location.href = "./html/thank-you.html"; 
  };
  
  // Function to send email using EmailJS
//   const sendMail = (e) => {
//     e.preventDefault(); // Prevent default form submission
  
//     // Get the form data
//     const form = document.getElementById("contactForm");
//     const formData = {
//       userName: form.userName.value,
//       userEmail: form.userEmail.value,
//       userPhone: form.userPhone.value,
//       userAddress: form.userAddress.value,
//       userMessage: form.userMessage.value,
//     };
  
//     // EmailJS send function
//     emailjs
//       .send("service_k5hgxad", "template_hamdvsq", formData)
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//           alert("Your message has been sent successfully!");
//           redirectToThankYou(); // Redirect to Thank You page
//         },
//         (error) => {
//           console.error("FAILED...", error);
//           alert("Failed to send your message. Please try again.");
//         }
//       );
//   };
const sendMail = (e) => {
    e.preventDefault();
    console.log("Simulating email send...");
    redirectToThankYou();
  };
  // Attach sendMail to form submit event
  document.getElementById("contactForm").addEventListener("submit", sendMail);
  


})