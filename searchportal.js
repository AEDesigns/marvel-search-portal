var marvelCharacters = fetch(greatPower)
.then(function(response){
    console.log(response.json())
})
.catch(function (error) {
    console.log(error.message);
});

var marvelEvents = "https://gateway.marvel.com/v1/public/events?";
var marvelComics = "https://gateway.marvel.com/v1/public/comics?";
var marvelCharacters = "https://gateway.marvel.com/v1/public/characters?nameStartsWith=";
const myApiKey = "apikey=6d1f112aae8581fdaca4b89efca28a99";
var searchArr = [];

var greatPower = function greatResponsibility(){
    return marvelEvents + searchinput + myApiKey
}

var form = document.getElementById('form')
var searchInput = document.getElementById('inputTxt');

form.addEventListener('submit', function(e){
    e.preventDefault();
    apiKickOff(inputValue);
 }, false);

 function apiKickOff(inputValue){
    console.log(inputValue);
}

let inputValue = '';

searchInput.addEventListener('keyup', function(e){
    inputValue = e.target.value;
}, false)
