//"use strict";

const chargeNewSongsGalantis = async() =>{
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
        //const galantis = document.querySelector(".lastSongs-galantis")
        //galantis.innerHTML = `Titulo de la canción. ${dataObject[i].trackName}`
    }

    } catch (e){
        console.log(e)
    }
}

chargeNewSongsGalantis();

const chargeNewSongsGaga = async() =>{
    try{
    const respuesta = await fetch("https://itunes.apple.com/search?term=lady+gaga&media=music");        
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

chargeNewSongsGaga();

const peace = async() =>{
    try{
    const respuesta = await fetch("https://itunes.apple.com/search?term=peace");        
    const resultado = await respuesta.json();
    let dataObject = resultado.results;
        for (let i = 0; i < 30; i++) {
            console.log(`La consulta ${[i+1]} es del artista ${dataObject[i].artistName} y corresponde qa un ${dataObject[i].wrapperType}`);
        }
    } catch (e){
        console.log(e)
    }
}

peace();

const adele = async() =>{
    try{
    const respuesta = await fetch("https://itunes.apple.com/search?term=adele&media=music");        
    const resultado = await respuesta.json();
    let dataObject = resultado.results;
    console.log("Los temas de Adele en 2021 son :");
    for (let i = 0; i < dataObject.length; i++) {
        const element = dataObject[i];
        const date = element.releaseDate.substring(0,4)
        if (date == "2021") {
            console.log(element.trackName)
        }

    }

    } catch (e){
        console.log(e)
    }
}

adele();

