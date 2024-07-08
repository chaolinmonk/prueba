function getArt(){
    const url = "http://127.0.0.1:8000/arte/";
    if (filtro == "Obras") {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                return data 
            })
            .catch(error => console.error('Error:', error));
    }
}