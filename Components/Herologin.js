function login(){
    let loginoptions = $(
        '<ul>'+
            '<li><a href="register.html">Registrate</a></li>'+
            '<li><a href="login.html">Iniciar Sesión</a></li>'+
        '</ul>'
    );
    if(localStorage.getItem("logged") == null){
        return loginoptions;    
    }else if(JSON.parse(localStorage.getItem('logged'))['logged'] == true){
        loginoptions = $(
            '<ul>'+
                '<li><a href="Usuario.html">Perfil</a></li>'+
            '</ul>'
        ); 
        return loginoptions;   
    }
    return loginoptions;
}
    $().ready(()=>{
        $("#HeroLogin").append(login());
    })