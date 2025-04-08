const home_button = document.getElementById("homeButton");

const header_about = document.getElementById("header_about");
const header_projects = document.getElementById("header_projects");
const header_contact = document.getElementById("header_contact");

header_about.addEventListener("click", () => {
    document.querySelector(".about").scrollIntoView({behavior: "smooth"});
    if(window.innerWidth <= 767){
        document.querySelector("nav").classList.add("hidden");
        document.querySelector("#bar_menu_close").classList.add("hidden");
        document.querySelector("#bar_menu_open").classList.remove("hidden");
    }
})

header_projects.addEventListener("click", () => {
    document.querySelector(".project").scrollIntoView({behavior: "smooth"});
    if(window.innerWidth <= 767){
        document.querySelector("nav").classList.add("hidden");
        document.querySelector("#bar_menu_close").classList.add("hidden");
        document.querySelector("#bar_menu_open").classList.remove("hidden");
    }
})

header_contact.addEventListener("click", ()=>{
    document.querySelector(".contact").scrollIntoView({behavior: "smooth"});
    if(window.innerWidth <= 767){
        document.querySelector("nav").classList.add("hidden");
        document.querySelector("#bar_menu_close").classList.add("hidden");
        document.querySelector("#bar_menu_open").classList.remove("hidden");
    }
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

function mobileView(){
    if(window.innerWidth <= 767){
        let menu = document.querySelector(".mobile_nav_button");
        let closeIcon = document.querySelector("#bar_menu_close");
        let openIcon = document.querySelector("#bar_menu_open");
        let nav = document.querySelector("nav");

        nav.classList.add("nav_menu_mobile");
        nav.classList.add("hidden");
        menu.classList.remove("hidden");

        menu.addEventListener("click", () => {
            if(closeIcon.classList.contains("hidden")){
                closeIcon.classList.remove("hidden");
                openIcon.classList.add("hidden");
                nav.classList.remove("hidden");
            }
            else{
                closeIcon.classList.add("hidden");
                openIcon.classList.remove("hidden");
                nav.classList.add("hidden");
            }
        })

    }
    else{
        document.querySelector(".mobile_nav_button").classList.add("hidden");
        document.querySelector("nav").classList.remove("nav_menu_mobile");
        document.querySelector("nav").classList.remove("hidden");
    }
}

window.onload = mobileView();

window.addEventListener("resize", () => {
    mobileView();
})

if(window.innerWidth <= 767){
    let menu = document.querySelector(".mobile_nav_button");
    let closeIcon = document.querySelector("#bar_menu_close");
    let openIcon = document.querySelector("#bar_menu_open");
    let nav = document.querySelector("nav");

    nav.classList.add("nav_menu_mobile");
    nav.classList.add("hidden");
    menu.classList.remove("hidden");

    menu.addEventListener("click", () => {
        if(closeIcon.classList.contains("hidden")){
            closeIcon.classList.remove("hidden");
            openIcon.classList.add("hidden");
            nav.classList.remove("hidden");
        }
        else{
            closeIcon.classList.add("hidden");
            openIcon.classList.remove("hidden");
            nav.classList.add("hidden");
        }
    })

}
else{
    document.querySelector(".mobile_nav_button").classList.add("hidden");
    document.querySelector("nav").classList.remove("nav_menu_mobile");
    document.querySelector("nav").classList.remove("hidden");
}