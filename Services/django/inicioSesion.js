$(document).ready(() => {
    var urllog = "http://127.0.0.1:8000/usuario/";

    $("#loginbtn").click((event) => {
        event.preventDefault();
        const url = "http://127.0.0.1:8000/login/";
        let email = $("#email").val();
        let password = $("#password").val();
        const cred = {
            "email": email,
            "password": password 
        };
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cred)
        };
        fetch(url, postData)
            .then(response => response.json())
            .then((data) => {
                console.log('Success:', data)
                localStorage.setItem('open', data.token) 
            })
            .catch(error => console.error('Error:', error));
        //window.location.href = "http://127.0.0.1:5500/artista.html";
        
    });
});
