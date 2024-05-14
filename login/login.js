$().ready(function () {
    /*
    $.getJSON("login/user.json", function(data){
        data.users.forEach(users => {
            console.log(users.userName)
            console.log(users.passWord)
        });
    })
    */
    $('form').submit(function () {
        event.preventDefault();
        email = $('#email').val();
        pass = $('#password').val();
        
        $.getJSON("login/user.json", function(data){
            data.users.forEach(users => {
                if(users.userMail == email && users.passWord == pass){
                    console.log('login exitoso');
                       
                }else{
                    console.log('Te equivocaste aweonao');
                };
            });
        })
    });
});