const home_button = document.getElementById("homeButton");

const header_about = document.getElementById("header_about");
const header_projects = document.getElementById("header_projects");
const header_contact = document.getElementById("header_contact");

const about_target = document.getElementById("about_target");
const projects_target = document.getElementById("projects_target");
const contact_target = document.getElementById("contact_target");

header_about.addEventListener("click", () => {
    about_target.scrollIntoView({behavior: "smooth"});
})

header_projects.addEventListener("click", () => {
    projects_target.scrollIntoView({behavior: "smooth"});
})

header_contact.addEventListener("click", ()=>{
    contact_target.scrollIntoView({behavior: "smooth"});
})

home_button.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
})

const github_Banner_Button = document.getElementById("github");
github_Banner_Button.addEventListener("click", ()=>{
    window.open('https://github.com/DrakoulisE', '_blank');
})

const project_gyrogyro_button = document.getElementById("project_gyrogyro");

project_gyrogyro_button.addEventListener("click", ()=>{
    window.open('https://drakoulise.github.io/gyrogyro/', '_blank');
})