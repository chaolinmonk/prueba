let navBar = document.getElementById("HeroMenu");
let navBarAnalisis = navBar.getBoundingClientRect();
let navY = navBarAnalisis.top + window.scrollY;
let navBarChildren= navBar.children;
window.addEventListener('scroll',()=>{
    console.log(window.scrollY +" "+ navY +" "+ navBarAnalisis.top);
    if(window.scrollY >= navY){
        navBar.style.position = "fixed";
        navBar.style.backgroundColor = "#F5F0EC";
        navBar.style.backgroundImage = "none";
        navBar.style.top="0px";
        navBar.style.color="#1F1300";
    }else if(window.scrollY < navY){
        navBar.removeAttribute('style');
    }
});