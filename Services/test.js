import { addArtCard } from "../Components/Artcard.js";
import { artHoverListener } from "./CheckArtist.js";

export function display2(){
    fetch('http://127.0.0.1:8000/usuario/')  
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}