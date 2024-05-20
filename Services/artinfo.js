export function getArtInfo() {
    const users = JSON.parse(localStorage.getItem('users')) || [{users:null}];
    const artworkList = JSON.parse(localStorage.getItem('obras')) || [{artworkList:null}];
    const sel = JSON.parse(localStorage.getItem("selection")) || [{sel:null}];
    const selection = sel[0].selection;
    const Art_id =  selection-1;
    const autor = users[artworkList[Art_id].autor_id-1].name + " " + users[artworkList[Art_id].autor_id-1].lastName;
    console.log(autor)
    console.log(Art_id)
    console.log(artworkList[Art_id].name)
    $("#buy-artwork h1").text(artworkList[Art_id].name); 
    $("#Descripcion").text(artworkList[Art_id].desc);
    $("#Historia").text(artworkList[Art_id].historia);
    $("#Etiqueta").text(artworkList[Art_id].etiqueta);   
    $("#likes").text(artworkList[Art_id].likes);    
    $("#favorites").text(artworkList[Art_id].favorites);    
    $("#buybtn").text("$ " + artworkList[Art_id].precio);
    $("#img-artwork").html(`<img src="/sources/IMG/${artworkList[Art_id].img}" alt=""></img>`)
    $('#autor').text(autor)
    
}
$(document).ready(() => {
    getArtInfo();
});