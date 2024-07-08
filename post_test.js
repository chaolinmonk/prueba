$(document).ready(()=>{
    $("#upload_form").click(()=>{
        console.log("hola baby")
        const newUser = {
            "nom": $("#nom").val(),
            "ap_pat": $("#ap_pat").val(),
            "email": $("#email").val(),
            "password": $("#password").val(),
            "desc": $("#desc").val(),
            "pfp": $("#pfp").val(),
            "is_staff": false
        };
        const postData ={
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newUser)
        }

        fetch("http://127.0.0.1:8000/usuario/", postData)
            .then(response => response.json())
            .then(data => console.log('Success:', newUser))
            .catch(error => console.error('Error:', error));

        fetch("http://127.0.0.1:8000/usuario/")
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    })
})