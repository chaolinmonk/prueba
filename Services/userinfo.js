export function getartistinfo() {
    const users = JSON.parse(localStorage.getItem('users')) || [{users:null}]
    const logged = JSON.parse(localStorage.getItem('logged')) || [{ logged: null }];
    const Artist_id = logged["id"]-1;
    console.log(Artist_id);
    
    console.log(users[Artist_id].name + users[Artist_id].lastName + users[Artist_id].desc);
    $("#profile p").text(users[Artist_id].name + " " + users[Artist_id].lastName); 
    $("#User-details-description p").text(users[Artist_id].desc);
    $("#picture").html(`<img src="/sources/IMG/${users[Artist_id].img}" alt=""></img>`)
}
$(document).ready(() => {
    getartistinfo();
});