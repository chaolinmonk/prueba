function getArtGalery(search = "", filtro = "Obras") {
    const urlart = "http://127.0.0.1:8000/arte/";
    const urlartista = "http://127.0.0.1:8000/artista/";
    const url = filtro === "Obras" ? urlart : urlartista;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("confirmando");
            $("#rescontent").empty(); // Limpiar resultados anteriores
            data.forEach(item => {
                if (search === "" || item.nom_arte.toLowerCase().includes(search.toLowerCase())) {
                    renderArt(item);
                }
            });
        })
        .catch(error => console.error('Error:', error));
}

function saveElection(art) {
    localStorage.setItem("saveElection", art);
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
                    `<a class="artcontainer-bigtext irArte" href="Artwork.html" data-id="${data.id}">${data.nom_arte}</a>` +
                    `<p class="artcontainer-smalltext">${data.desc}</p>` +
                '</div>' +
                `<img src="./sources/IMG/${data.imagen_url}" alt="Placeholder">` +
            '</div>' +
        '</div>'
    );
    $("#rescontent").append(artcard);
    console.log(data.imagen_url);
}

$(document).ready(() => {
    getArtGalery();

    $('#search-button').click(() => {
        const searchValue = $('#search').val();
        getArtGalery(searchValue);
    });

    // Usa delegación de eventos para manejar clics en los elementos .irArte
    $(document).on('click', '.irArte', function() {
        saveElection($(this).data('id'));
    });
});
