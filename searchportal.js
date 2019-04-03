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
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        });

    // Call comics API and store the results in a var
    // Call characters API and store the results in a var
}