$().ready(function(){
    if(JSON.parse(localStorage.getItem('logged'))['logged'] == false){
        alert('Debes iniciar sesion para ingresar un arte');
    }
    const ARTWORK = localStorage.getItem("artwork");
    var maxId = 1;
    const USERID = JSON.parse(localStorage.getItem('logged'))['id'];

    if(ARTWORK === null){
        $.getJSON("artwork/artwork.json", function(data){
            localStorage.setItem("artwork", JSON.stringify(data.artwork))
        });
    }

    for(var i = 0; i < JSON.parse(ARTWORK).length; i++){
        id = JSON.parse(ARTWORK)[i]["id"];
        if(id > maxId){maxId = id};
    }

    console.log(JSON.parse(ARTWORK));

    $("#picUpload").submit(function() {
        valid = true;

        let newArtwork = {
            id: maxId+1,
            artworkName: $("#artworkName").val(),
            imageUrl: $("input[type=file]").val().replace(/C:\\fakepath\\/i, ''),
            precio: parseInt($("#precio").val()),
            historia: $("#historia").val(),
            descripcion: $("#descripcion").val(),
            tecUsada: $("#tecUsada").val(),
            etiqueta: $("#etiqueta").val(),
            artistaId: USERID
        };

        Object.keys(newArtwork).forEach(function(key){
            if(newArtwork[key] === "" || newArtwork[key] === null) {
                valid = false
            }
        })
        if(isNaN(newArtwork.precio)){
            alert('El precio debe contener solo numeros')
            valid = false;
        }

        if(valid){
            let artworkList=JSON.parse(ARTWORK);
    
            artworkList.push(newArtwork);
            localStorage.setItem("artwork", JSON.stringify(artworkList));
            alert("carga exitosa");
        }
    })
    
});