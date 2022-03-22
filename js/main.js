const movieInput=document.querySelector("#movie-name");
const movieSearchButton=document.querySelector("#movie-search");
const movieList=document.querySelector("#movie-list");
const Key="XXXXXXXXXX"; // http://www.omdbapi.com/    --> get key


const getMovie=(movieName)=>{
    let url=`http://www.omdbapi.com/?apikey=${Key}&s=${movieName}`;
    let data=fetch(url)
         .then(res=>res.json())  
         .then(data=>data.Search) ;    
    return data;
}


const movieCard=(movie)=>{
    return `
        <div class="movie-card">
            <div class="movie-header">
                <span class="movie-title">${movie.Title}</span>
                <span class="movie-year">${movie.Year}</span>
            </div>
            <div class="movie-body">
                <img src="${movie.Poster}" alt="${movie.Title}" srcset="">
            </div>            
        </div>    
    `;    
}



const createMovieList=(searchMovie)=>{
    let movies=getMovie(searchMovie);
    movieList.innerHTML="";
    movies.then(x=>{
        x.forEach(movie => {            
            movieList.innerHTML+=movieCard(movie);
        });
    })  
}


movieSearchButton.addEventListener("click",()=>{
        event.preventDefault();
        createMovieList(movieInput.value);

})







