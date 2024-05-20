import { addArtCard } from "../Components/Artcard.js";
import { artHoverListener } from "./CheckArtist.js";
//#artcont
export function display(search = "",type = "Obras", tarjet = "#artcont") {
    const obrasGuardadas = JSON.parse(localStorage.getItem('obras'));
    const Artistas = JSON.parse(localStorage.getItem('autores'));
    var found = false;
    if(type === "Obras"){
        if (obrasGuardadas) {
            obrasGuardadas.forEach(obra => {
                if (search === "" || obra.name.toLowerCase().includes(search.toLowerCase())) {
                    $(tarjet).append(addArtCard(obra.id, obra.link, obra.img, obra.name, obra.desc));
                    found = true;
                }
            });
        } else {
            console.log('No hay obras guardadas en localStorage');
        }
        if(!found){
            $(tarjet).append($("<p>No se encontraron obras, prueba con otra busqueda.</p>"))
        }
    }else{
        if (Artistas) {
            Artistas.forEach(Artista => {
                if (search === "" || Artista.autor_name.toLowerCase().includes(search.toLowerCase())) {
                    $(tarjet).append(addArtCard(Artista.autor_id,Artista.autor_link, Artista.autor_img, Artista.autor_name, Artista.autor_desc));
                    console.log(Artista.autor_name);
                    found = true;
                }
            });
        } else {
            console.log('No hay obras guardadas en localStorage');
        }
    }
    if(!found && type === "Obras"){
        $(tarjet).append($("<p>No se encontraron Artistas, prueba con otra busqueda.</p>"))
    }
    artHoverListener();
}
$(document).ready(()=>{
    display();
})