let navBarElement = 
    '<div id="HeroMenu" class="row-fluid">'+
        '<div id="HeroTitle" class="col lg-4">'+
            '<a href="">'+
            '<h1>Grupo <span>0</span></h1>'+
            '</a>'+
        '</div>'+
    '<div id="HeroOptions" class="col lg-4">'+
      '<ul>'+
        '<li><a href="#artcont">Obras</a></li>'+
        '<li><a href="#ArtistsCarousel-section">Artistas</a></li>'+
        '<li><a href="#presentacion">¿Quienes somos?</a></li>'+
        '<li><a href="upload_form.html">Crea</a></li>'+
      '</ul>'+
    '</div>'+
    '<div id="HeroLogin" class="col lg-4">'+
    '</div>';
$(document).ready(()=>{
    $("body").append(navBarElement);
    let navBar = $("#HeroMenu");
    let navBarAnalisis = navBar[0].getBoundingClientRect();
    let navY = navBarAnalisis.top + $(window).scrollTop();
    let navBarChildren = navBar.children();
    console.log("hola")
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= navY) {
            navBar.css({
                position: "fixed",
                backgroundColor: "#F5F0EC",
                backgroundImage: "none",
                top: "0px",
                color: "#1F1300"
            });
        } else if ($(window).scrollTop() < navY) {
            navBar.removeAttr('style');
        }
        console.log(navBarAnalisis)
    });
})

