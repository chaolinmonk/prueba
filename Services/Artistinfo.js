export function getartistinfo() {
    const users = JSON.parse(localStorage.getItem('users')) || [{users:null}]
    const selection = JSON.parse(localStorage.getItem('selection')) || [{ selection: null }];
    const Artist_id = selection[0].selection;
    console.log(Artist_id);
    
    console.log(users[Artist_id-1].name + users[Artist_id-1].lastName + users[Artist_id-1].desc);
    $("#profile p").text(users[Artist_id-1].name + " " + users[Artist_id-1].lastName); 
    $("#User-details-description p").text(users[Artist_id-1].desc);
    $("#picture").html(`<img src="/sources/IMG/${users[Artist_id-1].img}" alt=""></img>`)
}

$(document).ready(() => {
    getartistinfo();
});
