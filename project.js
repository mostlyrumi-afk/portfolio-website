let menuIcon = document.querySelector("#menu-icon");

let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {

    menuIcon.classList.toggle("bx-x");

    navbar.classList.toggle("active");

}


let contactpage = document.querySelector(".contactpage");

contactpage.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Your message has been sent successfully!");

});



















