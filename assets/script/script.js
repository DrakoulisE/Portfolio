const home_button = document.getElementById("homeButton");

const header_about = document.getElementById("header_about");
const header_projects = document.getElementById("header_projects");
const header_contact = document.getElementById("header_contact");

header_about.addEventListener("click", () => {
    document.querySelector(".about").scrollIntoView({behavior: "smooth"});
})

header_projects.addEventListener("click", () => {
    document.querySelector(".project").scrollIntoView({behavior: "smooth"});
})

header_contact.addEventListener("click", ()=>{
    document.querySelector(".contact").scrollIntoView({behavior: "smooth"});;
})

home_button.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { 
        document.querySelector("header").classList.add("scrolled");
    } else {
        document.querySelector("header").classList.remove("scrolled");
    }
});

const github_Banner_Button = document.getElementById("github");
github_Banner_Button.addEventListener("click", ()=>{
    window.open('https://github.com/DrakoulisE', '_blank');
})

const project_gyrogyro_button = document.getElementById("project_gyrogyro");

project_gyrogyro_button.addEventListener("click", ()=>{
    window.open('https://drakoulise.github.io/gyrogyro/', '_blank');
})