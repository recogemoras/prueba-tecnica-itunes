//"use strict";

const chargeNewSongs = async() =>{
    try{
    const respuesta = await fetch("https://itunes.apple.com/search?term=galantis&media=music");        
    const resultado = await respuesta.json();
    let release_date = resultado.results.releaseDate;
    let dataObject = resultado.results;
        dataObject.sort( (a,b) =>{
            if(a.releaseDate == b.releaseDate){
                return 0;
            }
            if(a.releaseDate < b.releaseDate){
                return 1;
            }
            return -1;
        });
    for (let i = 0; i < 10; i++) {
        release_date = (dataObject[i].releaseDate);
        console.log(dataObject[i].trackName)
    }
    } catch (e){
        console.log(e)
    }
}

chargeNewSongs();
