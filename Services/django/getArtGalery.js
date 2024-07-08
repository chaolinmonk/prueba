export function getArtGalery(){
    const url = "http://127.0.0.1:8000/arte/"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => renderArt(item));
        })
        .catch(error => console.error('Error:', error));
}
/**
 {
    "id": 1,
    "artista": 3,
    "nom_arte": "un Completo",
    "imagen_url": "aaa.jpg",
    "precio": 5000000,
    "desc": "Un completo italiano",
    "tec_usada": "nose",
    "etiquetas": "todas",
    "aprobado": false,
    "vendido": false
 }
*/
function renderArt(data){
    var artcard = $(
        '<div class="artcontainer">' +
            '<div class="artcontainer-img">' +
            '<div class="imgtext">' +
                `<a href="Artwork-1.html" name = ${data.id} class="artcontainer-bigtext">${data.nom_arte}</a>` +
                `<p class="artcontainer-smalltext">${data.desc}</p>` +
            '</div>' +
            `<img src="../sources/IMG/amebas.png" alt="Placeholder">` +
            '</div>' +
        '</div>'
    );
    $("#artcont").append(artcard);
    console.log(data.imagen_url);
}
$(document).ready(()=>{getArtGalery()})