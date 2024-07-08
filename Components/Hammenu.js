export function showHamMenu(){
    $(document).ready(function() {
        $("#Hambtn button").click(()=>{
            $("#hammenucontent").css({
                "right":"0px",
                "display":"block"
            });
            console.log("hola")
        })
        
    });
}

export function hideHamMenu() {
    $(document).ready(function() {
        const totalw = "100vw";
        $("#hammenucontent").click(() => {
            $("#hammenucontent").css({
                "right": `calc(${totalw} * -1)`,
                "display": "block"
            });
        });
    });
}