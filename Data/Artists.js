const autores = [
    {
        "id":1,
        "name":"Estefan ",
        "lastName":"Kramer",
        "userMail":"Este.Kramer@",
        "passWord":"camelCase123",
        "desc":"Las mejores escenas se dan cuando se graban con el lente del amor.",
        "img" :"../sources/IMG/artista2.jpg",
        "link":"artista.html"
    },
    {
        "id":2,
        "name":"Bob",
        "lastName":"Ross",
        "userMail":"b.ross@",
        "passWord":"camelCase123",
        "desc":"Siete palabras: ESENCIA.",
        "img" :"../sources/IMG/grandebobross.png",
        "link":"artista.html"
    },
    {
        "id":3,
        "name":"Nicolás",
        "lastName":"Maduro",
        "userMail":"n.Maduro@",
        "passWord":"camelCase123",
        "desc":"Amo la verdad y la democracia.",
        "img" :"../sources/IMG/gedimburgo-escocia-reino-unido-25-de-mayo-de-2023-imagenes-de-la-vista-previa-de-prensa-de-la-nueva-exposicion-del-artista-peter-howson-en-el-city-art-centre-de-edimburgo-titulada-c.jpg",
        "link":"artista.html"
    }
]
localStorage.setItem('autores', JSON.stringify(autores));