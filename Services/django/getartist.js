$(document).ready(()=>{
    const url = "http://127.0.0.1:8000/profile";
    const token = localStorage.getItem('open'); 
    console.log(token)
    const postData = {
        method: 'POST',
        headers: {
            'Authorization' : `token ${token}`,
            'Content-Type': 'application/json'
        }
    };
    fetch(url, postData)
        .then(response => response.json())
        .then((data) => {
            console.log('Success:', data)
            $("#username").text( data.nom + " " + data.ap_pat)
            $("#desc").text( data.desc)
        })
        .catch(error => console.error('Error:', error));
})
