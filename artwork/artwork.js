$().ready(function(){
    if(JSON.parse(localStorage.getItem('logged'))['logged'] == false){
        alert('Debes iniciar sesion para ingresar un arte');
    }
    const ARTWORK = localStorage.getItem("obras");
    var maxId = 1;
    const USERID = JSON.parse(localStorage.getItem('logged'))['id'];

    for(var i = 0; i < JSON.parse(ARTWORK).length; i++){
        id = JSON.parse(ARTWORK)[i]["id"];
        if(id > maxId){maxId = id};
    }

    console.log(JSON.parse(ARTWORK));

    $("#picUpload").submit(function() {
        valid = true;

        let newArtwork = {
            id: maxId+1,
            name: $("#artworkName").val(),
            likes: 0,
            favorites:0,
            link:"Artwork-1.html",
            img: $("input[type=file]").val().replace(/C:\\fakepath\\/i, ''),
            precio: parseInt($("#precio").val()),
            historia: $("#historia").val(),
            desc: $("#descripcion").val(),
            tecnica: $("#tecUsada").val(),
            etiqueta: $("#etiqueta").val(),
            autor_id: USERID
        };

        Object.keys(newArtwork).forEach(function(key){
            if(newArtwork[key] === "" || newArtwork[key] === null) {
                
                valid = false
            }
        })
        if(valid === false){
            alert("Debe completar todos los campos");
        }
        if(isNaN(newArtwork.precio)){
            alert('El precio debe contener solo numeros')
            valid = false;
        }

        if(valid == true){
            let artworkList=JSON.parse(ARTWORK);
            console.log(newArtwork)
            artworkList.push(newArtwork);
            localStorage.setItem("obras", JSON.stringify(artworkList));
            alert("carga exitosa");
        }
    })
    
});