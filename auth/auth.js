$().ready(function () {
    if (localStorage.getItem("users").length === 0 || localStorage.getItem("users") == null){
        $.getJSON("auth/user.json", function(data){
            localStorage.setItem("users", JSON.stringify(data.users))
        });
    }

    const LOCALUSER = JSON.parse(localStorage.getItem("users"));
    console.log(LOCALUSER);
    
    maxId = 1;

    for(var i = 0; i < LOCALUSER.length; i++){
        id = LOCALUSER[i]["author_id"];
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
                    id: LOCALUSER[i]["author_id"]
                }
                localStorage.setItem('logged', JSON.stringify(logged));
            };
        }
        
        if(JSON.parse(localStorage.getItem('logged'))["logged"]){alert('correcto')};
    });

    //Register
    $('#register').submit(function () {
        event.preventDefault();
        var valiMail = false;
        var valiPass = false;

        if (LOCALUSER) {
            LOCALUSER.forEach(data => {
                if (data.userMail.toLowerCase().includes($('#email').val().toLowerCase())) {
                    alert('Correo ya registrado');
                }
            })
        }else{
            valiMail = true;
        };
        
        if( $('#password').val() ===  $('#valPass').val()){
            valiPass = true;
        }else{
            alert('Las contraseñas deben coincidir!!!')
        }

        if(valiPass && valiMail){
            let newUser = {
                author_id: maxId +1,
                name: ($('#name').val()).toLowerCase(),
                lastName: ($('#lastname').val()).toLowerCase(),
                userMail: ($('#email').val()).toLowerCase(),
                passWord: $('#password').val(),
            }
            
            
            let userList = JSON.parse(localStorage.getItem("users"));
    
            userList.push(newUser);
            localStorage.setItem("users",JSON.stringify(userList))
            console.log("Cuenta Creada con Exito")
        }
        

    });
});