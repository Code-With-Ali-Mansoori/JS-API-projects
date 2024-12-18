let Input = document.querySelector('#input');
const button = document.querySelector('#button');
const main_body = document.querySelector('.main-body');

//Movie detals Access 

const Movie_Img = document.querySelector('#mov-img');
const Movie_Tittle = document.querySelector('#Movie-Heading');
const details_2_line = document.querySelector('#second-line');
const Genere = document.querySelector('#Genere');
const Writer_Name = document.querySelector('.Writer');
const Movie_Plot = document.querySelector('.Plot');
const language = document.querySelector('#lang-par');
const Awards = document.querySelector('#Awards');



let MovieFetch =  async ()=>{
    const searchInput = Input.value;   

    const movie_poster = `http://www.omdbapi.com/?s=${searchInput}&page=1&apikey=3d849202`;
    const movie_API = `https://www.omdbapi.com/?t=${searchInput}&apikey=3d849202`;

    const fetchingMovie = fetch(movie_API)
        .then(res => res.json())
        .then(data => MovieDetail(data));

    const FetchPoster = fetch(movie_poster)
        .then(res=> res.json())
        .then(img => ImageMovie(img));
}  

function ImageMovie(img){
    Movie_Img.src = `${img.Poster}`;   

}

function MovieDetail(data){

    Movie_Tittle.innerHTML = `${data.Title}`;
    Genere.innerHTML= `Genere: ${data.Genre}`;
    Writer_Name.innerHTML = `Writer: ${data.Writer}`;
    Movie_Plot.innerHTML = `Plot: ${data.Plot}`;
    language.innerHTML = `Language: ${data.Language}`;
    Awards.innerHTML = `Awards: ${data.Awards}`;
    details_2_line.innerHTML = 
     `   <span class="sc">Year: ${data.Year}</span>
        <span class="sc" id="Rating">Rating: ${data.imdbRating}</span>
        <span class="sc">Released: ${data.Released}</span> `; 
}

button.addEventListener('click',()=>{
    MovieFetch();
})