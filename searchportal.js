// var marvelCharacters = fetch(greatPower)
// .then(function(response){
//     console.log(response.json())
// })
// .catch(function (error) {
//     console.log(error.message);
// });

// var marvelEvents = "https://gateway.marvel.com/v1/public/events?";
// var marvelComics = "https://gateway.marvel.com/v1/public/comics?";
// var marvelCharacters = "https://gateway.marvel.com/v1/public/characters?nameStartsWith=";
// const myApiKey = "apikey=6d1f112aae8581fdaca4b89efca28a99";
// var searchInput = document.getElementById('inputTxt').Value;
// var searchArr = [];

// var greatPower = function greatResponsibility(){
//     return marvelEvents + searchinput + myApiKey
// }

var form = document.getElementById('form')

form.onsubmit = function(e) {
    e.preventDefault()

    console.log('Submit was prevented')
}