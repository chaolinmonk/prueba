
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

