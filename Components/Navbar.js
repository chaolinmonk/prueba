

const navBarElement = `
    <div id="HeroMenu">
        <a href="index.html" id="HeroTitle">
            <div>Grupo <span>0</span></div>
        </a>
        <div id="HeroOptions">
            <ul>
                <li><a href="obras.html">Obras</a></li>
                <li><a href="Artistas.html">Artistas</a></li>
                <li><a href="upload_form.html">Crea</a></li>
                <li><a href="login.html">Ingresa</a></li>
            </ul>
        </div>
        <div id="HeroLogin" class="col lg-4"></div>
    </div>`;

const navBarElementLogged = `
    <div id="HeroMenu">
        <a href="index.html" id="HeroTitle">
            <div>Grupo <span>0</span></div>
        </a>
        <div id="HeroOptions">
            <ul>
                <li><a href="obras.html">Obras</a></li>
                <li><a href="Artistas.html">Artistas</a></li>
                <li><a href="upload_form.html">Crea</a></li>
                <li><a href="Cart.html">Carrito</a></li>
                <li><a href="artista.html">perfil</a></li>
            </ul>
        </div>
        <div id="HeroLogin" class="col lg-4"></div>
    </div>`;

$(document).ready(() => {
    // Llama a openSession() para verificar el estado de la sesión
    const sessionActive = openSession(); // Asegúrate de que openSession() retorne un booleano

    let navFinal = "";
    if (!sessionActive) {
        console.log("Sesión no activa");
        navFinal = navBarElement;
    } else {
        console.log("Sesión activa");
        navFinal = navBarElementLogged;
    }

    // Agrega el HTML de la barra de navegación al body
    $("body").append(navFinal);

    // Aplica los estilos
    $("#HeroTitle a *").css({
        fontSize: "30px",
        fontFamily: '"Roboto Mono", monospace'
    });

    $("#HeroTitle").css({
        width: "150px"
    });

    const indexCSS = {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        height: "50px",
        fontFamily: '"Roboto Mono", monospace',
        backgroundColor: "rgba(5,11,12,1)",
        top: "0px",
        filter: "blur(0px)",
        transition: "1s",
        zIndex: "100",
        paddingLeft: "60px",
        color: "#FFF"
    };

    $("#HeroMenu").css(indexCSS);
});
