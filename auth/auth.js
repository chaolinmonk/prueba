$().ready(function () {
    const LOCALUSER = JSON.parse(localStorage.getItem("users"));
    console.log(LOCALUSER);
    
    maxId = 1;

    for(var i = 0; i < LOCALUSER.length; i++){
        id = LOCALUSER[i]["id"];
        if(id > maxId){maxId = id};
    }
    
    if(localStorage.getItem("logged") == null){
        localStorage.setItem("logged", localStorage.setItem('logged', '{"logged":false}'))
    }
    
    //Login
    $('#login').submit(function () {
        event.preventDefault();
        var email = ($('#email').val()).toLowerCase();
        var pass = $('#password').val();
        
        for (var i = 0; i < LOCALUSER.length; i++){
            userMail = LOCALUSER[i]["userMail"];
            passWord = LOCALUSER[i]["passWord"];

            if(userMail === email && passWord === pass){
                let logged = {
                    logged: true,
                    mail: userMail,
                    id: LOCALUSER[i]["id"]
                }
                localStorage.setItem('logged', JSON.stringify(logged));
            };
        }
        

        if(JSON.parse(localStorage.getItem('logged'))["logged"]){
            alert('Sesión Iniciada')
            window.location.href = "./usuario.html"
        };
        
    });

    //Register
    $('#register').submit(function () {
        event.preventDefault();
        var valiMail = false;
        var valiPass = false;

        LOCALUSER.forEach(data => {
            if (data.userMail.toLowerCase().includes($('#email').val().toLowerCase())) {
                alert('Correo ya registrado');
            }else{
            valiMail = true;
            }});
        
        if( $('#password').val() === $('#valPass').val()){
            valiPass = true;
            console.log("xd")
        }else{
            alert('Las contraseñas deben coincidir!!!')
        }
        console.log(valiMail,valiPass)
        if(valiPass && valiMail){
            let newUser = {
                id: maxId +1,
                name: ($('#name').val()).toLowerCase(),
                lastName: ($('#lastname').val()).toLowerCase(),
                userMail: ($('#email').val()).toLowerCase(),
                passWord: $('#password').val(),
                img: "defaultuser.jpg",
                link: "artista.html",
                desc: "Sin descripción"
            }
            
            let userList = JSON.parse(localStorage.getItem("users"));
    
            userList.push(newUser);
            localStorage.setItem("users",JSON.stringify(userList))
            alert("Cuenta Creada con Exito")
            let logged = {
                logged: true,
                mail: ($('#email').val()).toLowerCase(),
                id: maxId +1
            }
            localStorage.setItem('logged', JSON.stringify(logged));
            if(JSON.parse(localStorage.getItem('logged'))["logged"]){
                alert('Sesión Iniciada')
                window.location.href = "./usuario.html"
            };
        }
        
    });
});