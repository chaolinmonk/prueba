$().ready(function () {
    //Login

    $('#login').submit(function () {
        event.preventDefault();
        var email = ($('#email').val()).toLowerCase();
        var pass = $('#password').val();
        
        $.getJSON("auth/user.json", function(data){
            var logAuth = false;
            data.users.forEach(users => {
                if(users.userMail == email && users.passWord == pass) logAuth = true
            });
            console.log(logAuth ? "Sesion Iniciada" && window.location.replace("index.html") : "Datos incorrectos");
        });
    });

    //Register
    $('#register').submit(function () {
        event.preventDefault();
        var email = ($('#email').val()).toLowerCase();
        var name = ($('#name').val()).toLowerCase();
        var lastname = ($('#lastname').val()).toLowerCase();
        var pass = $('#password').val();
        var valPass = $('#valPass').val();
        
        console.log(email);
        console.log(name); 
        console.log(lastname);
        console.log(pass);
        console.log(valPass);
        
        if(pass === valPass){
            
        }
        
    });
});