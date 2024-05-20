// CheckArtist.js
export function artHoverListener() {
    $(".artcontainer-bigtext").on("mouseover", function() {
        var val = $(this).attr("name");
        console.log('Elemento:', this); // Mostrar el elemento en el que se detectó el evento
        console.log('data-id:', val);   // Mostrar el valor de data-id

        // Asegurarse de que selection[0] existe antes de asignar un valor
        const selection = JSON.parse(localStorage.getItem('selection')) || [{ selection: null }];
        selection[0].selection = val;
        localStorage.setItem('selection', JSON.stringify(selection));
    });
}