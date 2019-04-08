var form = document.getElementById('form')
var searchInput = document.getElementById('inputTxt');

form.addEventListener('submit', function(e){
    e.preventDefault();
    apiKickOff(inputValue);
 }, false);

let inputValue = '';
searchInput.addEventListener('keyup', function(e){
    inputValue = e.target.value;
}, false)

const createMarvelString = (baseUrl, endpoint, inputValue, myApiKey) => baseUrl + endpoint + encodeURI(inputValue) + myApiKey
const baseURL = "https://gateway.marvel.com/v1/public/"
const myApiKey = "&apikey=6d1f112aae8581fdaca4b89efca28a99";

function apiKickOff(inputValue){
    var marvelEvents = createMarvelString(baseURL, "events?nameStartsWith=", inputValue, myApiKey);
    var marvelComics = createMarvelString(baseURL, "comics?titleStartsWith=", inputValue, myApiKey);
    var marvelCharacters = createMarvelString(baseURL,"characters?nameStartsWith=", inputValue, myApiKey);


    // Call events API and store the results in a var
    fetch(marvelEvents)
        .then((res) => {
            return res.json()
        })
        .then(res => {
            let eventsResult = res.data.results;
            for(let i = 0; i < eventsResult.length; i++){
                console.log(eventsResult[i].title);
            }
        })
        .catch((err) => {
            console.log(err);
        });

    fetch(marvelComics)
        .then((res) => {
            return res.json()
        })
        .then(res => {
            let comicsResult = res.data.results;
            for(let i = 0; i < comicsResult.length; i++){
                console.log(comicsResult[i].title);
            }
        })
        .catch((err) => {
            console.log(err);
        });

    fetch(marvelCharacters)
        .then((res) => {
            return res.json()
        })
        .then(res => {
            let characterResult = res.data.results;
            for(let i = 0; i < characterResult.length; i++){
                console.log(characterResult[i].name); 
            }
        })
        .catch((err) => {
            console.log(err);
        });

    // Format the res data to be easily displayed

    // Create DOM elements with the correct data
}