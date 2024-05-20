import {display} from "./getArtGal.js";
$(document).ready(
    $(".Artsearch-btn").click(()=>{
        $("#artcont").empty();
        var valor = $(".Artsearch_input").val();
        var tipo = $(".Artsearch-select").val();
        display(valor,tipo);
    })
)
