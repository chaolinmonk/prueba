$().ready(function () {
    if (localStorage.length === 0){
        $.getJSON("auth/user.json", function(data){
            localStorage.setItem("users", JSON.stringify(data.users))
        });
    }
    const LOCALUSER = JSON.parse(localStorage.getItem("users"));
    console.log(LOCALUSER);

    //Login
    $('#login').submit(function () {
        event.preventDefault();
        var email = ($('#email').val()).toLowerCase();
        var pass = $('#password').val();
        var logAuth = false;
        
        for (var i = 0; i < LOCALUSER.length; i++){
            userMail = LOCALUSER[i]["userMail"];
            passWord = LOCALUSER[i]["passWord"];

            if(userMail === email && passWord === pass) logAuth = true;
        }
        
        console.log(logAuth ? "Sesion Iniciada" : "Datos Incorrectos");
    });

    //Register
    $('#register').submit(function () {
        event.preventDefault();
        let newUser = {
            name: ($('#name').val()).toLowerCase(),
            lastName: ($('#lastname').val()).toLowerCase(),
            userMail: ($('#email').val()).toLowerCase(),
            passWord: $('#password').val(),
        }
        
        let userList = JSON.parse(localStorage.getItem("users"));

        userList.push(newUser);
        localStorage.setItem("users",JSON.stringify(userList))
        console.log("Cuenta Creada con Exito")

    });
});