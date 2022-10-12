//"use strict";

const chargeSongs = async() =>{
    try{
    const respuesta = await fetch("https://itunes.apple.com/search?term=galantis&media=music");        
    const resultado = await respuesta.json();
    let release_date = "";
    for (let i = 0; i < resultado.results.length; i++) {
        release_date = (resultado.results[i].releaseDate);
    }
    console.log(release_date);


    } catch (e){
        console.log(e)
    }
}

chargeSongs();
