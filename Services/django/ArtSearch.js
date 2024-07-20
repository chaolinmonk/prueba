import getArtGalery from "./getArtGalery"

$(document).ready(()=>{
    console.log("ssfsdfgsdf")
    $('#sbtn').click(()=>{
        $("#artcont").empty()
        console.log("listo")
        let search = $(".Artsearch_input").val();
        let filter = $(".Artsearch-select").val();
        getArtGalery(search,filter);
    })
})