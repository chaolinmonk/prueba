
function navbarx(openSession){
    if(!openSession){
        const navopt =
        '<ul>+'
        '<li><a href="#artcont">Obras</a></li>'+
        '<li><a href="#ArtistsCarousel-section">Artistas</a></li>'+
        '<li><a href="#presentacion">¿Quienes somos?</a></li>'+
        '<li><a href="upload_form.html">Crea</a></li>'+
        '</ul>';
        $("#HeroOptions").append(navopt)
        $("#hammenucontent").append(navopt)
    }else{
        const navopt =
        '<ul>+'
        '<li><a href="#artcont">Obras</a></li>'+
        '<li><a href="#ArtistsCarousel-section">Artistas</a></li>'+
        '<li><a href="#presentacion">¿Quienes somos?</a></li>'+
        '<li><a href="upload_form.html">Crea</a></li>'+
        '</ul>';
        $("$HeroOptions").append(navopt)
        $("#hammenucontent").append(navopt)
    }
}
let navBar = document.getElementById("HeroMenu");
let navBarAnalisis = navBar.getBoundingClientRect();
let navY = navBarAnalisis.top + window.scrollY;
let navBarChildren= navBar.children;
window.addEventListener('scroll',()=>{
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
$(document).ready(()=>{
    
})

