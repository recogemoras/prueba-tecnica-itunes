"use strict";

const newestGalantisSongs = async() =>{
    try{
    const response = await fetch("https://itunes.apple.com/search?term=galantis&media=music");        
    const result = await response.json();
    let release_date = result.results.releaseDate;
    let dataObject = result.results;
        dataObject.sort( (a,b) =>{
            if(a.releaseDate == b.releaseDate){
                return 0;
            }
            if(a.releaseDate < b.releaseDate){
                return 1;
            }
            return -1;
        });
        document.write("<b>The 10 last released songs by Galantis:<br></b>");
    for (let i = 0; i < 10; i++) {
        release_date = (dataObject[i].releaseDate);
        document.write(dataObject[i].trackName); document.write("<br>");
    }
    } catch (e){
        console.log(e);
        console.log("API call error - newestGalantisSongs");
    }
}
newestGalantisSongs();

const newestGagaSongs = async() =>{
    try{
    const response = await fetch("https://itunes.apple.com/search?term=lady+gaga&media=music");        
    const result = await response.json();
    let release_date = result.results.releaseDate;
    let dataObject = result.results;
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
        document.write("<b>The 10 last released songs by Lady Gaga:<br></b>");
    for (let i = 0; i < 10; i++) {
        release_date = (dataObject[i].releaseDate);
        document.write(dataObject[i].trackName); document.write("<br>");
    }
    } catch (e){
        console.log(e);
        console.log("API call error - newestGagaSongs");
    }
}
newestGagaSongs();

const titlesWithPeace = async() =>{
    try{
    const response = await fetch("https://itunes.apple.com/search?term=peace&limit=2000");        
    const result = await response.json();
    let dataObject = result.results;
    document.write("<br>");
    document.write("<b>30 media results with the word 'peace' in the title:<br></b>");
        for (let i = 0; i < 30; i++) {
            document.write(`${[i+1]} from artist <b>${dataObject[i].artistName}</b> with media type <b>${dataObject[i].wrapperType}</b>`); document.write("<br>");
        }
    } catch (e){
        console.log(e);
        console.log("API call error - titlesWithPeace");
    }
}
titlesWithPeace();

const adelesReleases = async() =>{
    try{
    const response = await fetch("https://itunes.apple.com/search?term=adele&media=music&limit=200");        
    const result = await response.json();
    let dataObject = result.results;
    document.write("<br>");
    document.write("<b>All the songs released by Adele in the year 2021 are:<br></b>");
    for (let i = 0; i < dataObject.length; i++) {
        const element = dataObject[i];
        const date = element.releaseDate.substring(0,4)
        if (date == "2021") {
            document.write(element.trackName); document.write("<br>");
        }

    }

    } catch (e){
        console.log(e);
        console.log("API call error - adelesReleases");
    }
}

adelesReleases();

// Por falta de conocimiento de la API no he podido encontrar la propiedad ratingIndex, éste es un simulacro del resultado:

const bestRatingIndexPodcasts = async() =>{
    try{
    const response = await fetch("https://itunes.apple.com/search?term=podcast&ratingIndex&limit=10");        
    const result = await response.json();
    let dataObject = result.results;
    document.write("<br>");
    document.write("<b>The 10 podcasts with the best rating index are:<br></b>");
    for (let i = 0; i < 10; i++) {
        document.write(dataObject[i].trackName); document.write("<br>");
    }
    } catch (e){
        console.log(e);
        console.log("API call error - bestRatingIndexPodcasts");
    }
}
bestRatingIndexPodcasts();

const bestRatingIndexMovies = async() =>{
    try{
    const response = await fetch("https://itunes.apple.com/search?term=movies&ratingIndex&limit=10");        
    const result = await response.json();
    let dataObject = result.results;
    document.write("<br>");
    document.write("<b>The 10 movies with the best rating index are:<br></b>");
    for (let i = 0; i < 10; i++) {
        document.write(dataObject[i].trackName); document.write("<br>");
    }
    } catch (e){
        console.log(e);
        console.log("API call error - bestRatingIndexMovies");
    }
}
bestRatingIndexMovies();