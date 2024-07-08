export function getArtGalery(search = "", filtro = "Obras") {
    const urlart = "http://127.0.0.1:8000/arte/";
    const urlartista = "http://127.0.0.1:8000/artista/";
    console.log($(".Artsearch_input").val());
    console.log(filtro);

    if (filtro == "Obras") {
        fetch(urlart)
            .then(response => response.json())
            .then(data => {
                console.log("confirmando");
                if (search == "") {
                    data.forEach(item => renderArt(item));
                } else {
                    data.forEach(item => {
                        if (item.nom_arte.toLowerCase().includes(search.toLowerCase())) {
                            renderArt(item);
                        }
                    });
                }
            })
            .catch(error => console.error('Error:', error));
    }else{
        fetch(urlartista)
            .then(response => response.json())
            .then(data => {
                console.log("confirmando");
                if (search == "") {
                    data.forEach(item => renderArt(item));
                } else {
                    data.forEach(item => {
                        if (item.nom_arte.toLowerCase().includes(search.toLowerCase())) {
                            renderArt(item);
                        }
                    });
                }
            })
            .catch(error => console.error('Error:', error));
    }
}

/**
 * Ejemplo de datos:
 * {
 *    "id": 1,
 *    "artista": 3,
 *    "nom_arte": "un Completo",
 *    "imagen_url": "aaa.jpg",
 *    "precio": 5000000,
 *    "desc": "Un completo italiano",
 *    "tec_usada": "nose",
 *    "etiquetas": "todas",
 *    "aprobado": false,
 *    "vendido": false
 * }
 */
function renderArt(data) {
    var artcard = $(
        '<div class="artcontainer">' +
            '<div class="artcontainer-img">' +
            '<div class="imgtext">' +
                `<a href="Artwork-1.html" name="${data.id}" class="artcontainer-bigtext">${data.nom_arte}</a>` +
                `<p class="artcontainer-smalltext">${data.desc}</p>` +
            '</div>' +
            `<img src= ./sources/IMG/${data.imagen_url} alt="Placeholder">` +
            '</div>' +
        '</div>'
    );
    $("#artcont").append(artcard);
    console.log(data.imagen_url);
}

$(document).ready(() => { getArtGalery() });
