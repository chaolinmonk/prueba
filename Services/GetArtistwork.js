import { addArtCard } from "../Components/Artcard.js";
import { artHoverListener } from "./CheckArtist.js";

export function display(search = "", target = "#User-details-Projects") {
    const obrasGuardadas = JSON.parse(localStorage.getItem('obras')) || [];
    const selection = JSON.parse(localStorage.getItem('selection')) || [{ selection: null }];
    const Artist_id = selection[0].selection;
    console.log(Artist_id);
    let found = false;

    // Limpiar el contenedor antes de agregar nuevos elementos
    $(target).empty();

    if (obrasGuardadas.length) {
        obrasGuardadas.forEach(obra => {
            if ((Artist_id == obra.autor_id && search === "") || 
                (Artist_id == obra.autor_id && obra.name.toLowerCase().includes(search.toLowerCase()))) {
                $(target).append(addArtCard(obra.id, obra.link, obra.img, obra.name, obra.desc));
                found = true;
            }
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
