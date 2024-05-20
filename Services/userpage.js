import { addArtCard } from "../Components/Artcard.js";
import { artHoverListener } from "./CheckArtist.js";

export function display(search = "", target = "#User-details-Projects") {
    const obrasGuardadas = JSON.parse(localStorage.getItem('obras')) || [];
    const logged = JSON.parse(localStorage.getItem('logged')) || [{ logged: null }];
    const Artist_id = logged["id"];
    console.log(Artist_id);
    let found = false;
    
    $(target).empty();

    if (obrasGuardadas.length) {
        obrasGuardadas.forEach(obra => {
            if ((Artist_id === obra.autor_id && search === "") || 
                (Artist_id === obra.autor_id && obra.name.toLowerCase().includes(search.toLowerCase()))) {
                $(target).append(addArtCard(obra.id, obra.link, obra.img, obra.name, obra.desc));
                found = true;
            }
            console.log(obra.autor_id);
        });
    } else {
        console.log('No hay obras guardadas en localStorage');
    }

    if (!found) {
        $(target).append($("<p>No se encontraron obras, prueba con otra búsqueda.</p>"));
    }

    artHoverListener();
}

$(document).ready(() => {
    display();
});