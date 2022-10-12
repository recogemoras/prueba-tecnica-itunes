"use strict";

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
        document.write("<b>Las últimas 10 canciones de Galantis:<br></b>");
    for (let i = 0; i < 10; i++) {
        release_date = (dataObject[i].releaseDate);
        document.write(dataObject[i].trackName); document.write("<br>");
    }
    } catch (e){
        console.log(e);
        console.log("Error en API chargeNewSongsGalantis");
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
        document.write("<br>");
        document.write("<b>Las últimas 10 canciones de Lady Gaga:<br></b>");
    for (let i = 0; i < 10; i++) {
        release_date = (dataObject[i].releaseDate);
        document.write(dataObject[i].trackName); document.write("<br>");
    }
    } catch (e){
        console.log(e);
        console.log("Error en API chargeNewSongsGaga");
    }
}
chargeNewSongsGaga();

const peace = async() =>{
    try{
    const respuesta = await fetch("https://itunes.apple.com/search?term=peace&limit=2000");        
    const resultado = await respuesta.json();
    let dataObject = resultado.results;
    document.write("<br>");
    document.write("<b>30 resultados de la búsqueda peace:<br></b>");
        for (let i = 0; i < 30; i++) {
            document.write(`La consulta ${[i+1]} es del artista <b>${dataObject[i].artistName}</b> y corresponde a un <b>${dataObject[i].wrapperType}</b>`); document.write("<br>");
        }
    } catch (e){
        console.log(e);
        console.log("Error en API peace");
    }
}
peace();

const adele = async() =>{
    try{
    const respuesta = await fetch("https://itunes.apple.com/search?term=adele&media=music&limit=200");        
    const resultado = await respuesta.json();
    let dataObject = resultado.results;
    document.write("<br>");
    document.write("<b>Los temas de Adele en 2021 son :<br></b>");
    for (let i = 0; i < dataObject.length; i++) {
        const element = dataObject[i];
        const date = element.releaseDate.substring(0,4)
        if (date == "2021") {
            document.write(element.trackName); document.write("<br>");
        }

    }

    } catch (e){
        console.log(e);
        console.log("Error en API adele");
    }
}
// Por falta de conocimiento de la API no he podido encontrar la propiedad ratingIndex, éste es un simulacro del resultado:
adele();

const podcast = async() =>{
    try{
    const respuesta = await fetch("https://itunes.apple.com/search?term=podcast&ratingIndex&limit=10");        
    const resultado = await respuesta.json();
    let dataObject = resultado.results;
    document.write("<br>");
    document.write("<b>Los 10 podcast mejor valorados son :<br></b>");
    for (let i = 0; i < 10; i++) {
        document.write(dataObject[i].trackName); document.write("<br>");
    }
    } catch (e){
        console.log(e);
        console.log("Error en API podcast");
    }
}
podcast();

const peliculas = async() =>{
    try{
    const respuesta = await fetch("https://itunes.apple.com/search?term=movies&ratingIndex&limit=10");        
    const resultado = await respuesta.json();
    let dataObject = resultado.results;
    document.write("<br>");
    document.write("<b>Las 10 películas mejor valoradas son :<br></b>");
    for (let i = 0; i < 10; i++) {
        document.write(dataObject[i].trackName); document.write("<br>");
    }
    } catch (e){
        console.log(e);
        console.log("Error en API peliculas");
    }
}
peliculas();