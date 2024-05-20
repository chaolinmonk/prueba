export function addArtCard(id, link, img, title, desc) {
    var artcard = $(
        '<div class="artcontainer">' +
            '<div class="artcontainer-img">' +
            '<div class="imgtext">' +
                `<a href="../sources/IMG/${img}" name = ${id} class="artcontainer-bigtext">${title}</a>` +
                `<p class="artcontainer-smalltext">${desc}</p>` +
            '</div>' +
            `<img src="${img}" alt="Placeholder">` +
            '</div>' +
        '</div>'
    );
    return artcard;
};
