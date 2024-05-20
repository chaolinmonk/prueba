const autores = [
    {
        "id":1,
        "name":"Estefan ",
        "lastName":"Kramer",
        "userMail":"Este.Kramer@",
        "passWord":"camelCase123",
        "desc":"Las mejores escenas se dan cuando se graban con el lente del amor.",
        "img" :"artista2.jpg",
        "link":"artista.html"
    },
    {
        "id":2,
        "name":"Bob",
        "lastName":"Ross",
        "userMail":"b.ross@",
        "passWord":"camelCase123",
        "desc":"Siete palabras: ESENCIA.",
        "img" :"grandebobross.png",
        "link":"artista.html"
    },
    {
        "id":3,
        "name":"Nicolás",
        "lastName":"Maduro",
        "userMail":"n.Maduro@",
        "passWord":"camelCase123",
        "desc":"Amo la verdad y la democracia.",
        "img" :"gedimburgo-escocia-reino-unido-25-de-mayo-de-2023-imagenes-de-la-vista-previa-de-prensa-de-la-nueva-exposicion-del-artista-peter-howson-en-el-city-art-centre-de-edimburgo-titulada-c.jpg",
        "link":"artista.html"
    },
    {
        "id":4,
        "name":"Eduardo",
        "lastName":"Bravo",
        "userMail":"ed.bravod@duocuc.cl",
        "passWord":"locopepe_69",
        "desc":"",
        "img":"",
        "link":""
    }, 
    {
        "id":5,
        "name":"Diego",
        "lastName":"Quioza",
        "userMail":"diego.quiozagonzales@gmail.com",
        "passWord":"locopepe_420",
        "desc":"",
        "img":"",
        "link":""
    },
    {
        "id":6,
        "name":"test",
        "lastName":"test",
        "userMail":"test@tester.com",
        "passWord":"tester123",
        "desc":"",
        "img":"",
        "link":""
    }
]
if(localStorage.getItem("users") == null){
    localStorage.setItem('users', JSON.stringify(autores));
}