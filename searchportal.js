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
            let eventsArr = [];
            for(let i = 0; i < eventsResult.length; i++){
                eventsArr.push({"Title": eventsResult[i].title, "Description": eventsResult[i].description, "ID": eventsResult[i].id})
            }
            console.log(eventsArr);
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
            let comicsArr = [];
            for(let i = 0; i < comicsResult.length; i++){
                comicsArr.push({"Title": comicsResult[i].title, "Description": comicsResult[i].description, "ID": comicsResult[i].id})
            }
            console.log(comicsArr);
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
            let characterArr = [];
            for(let i = 0; i < characterResult.length; i++){
                characterArr.push({"Name": characterResult[i].name, "Description": characterResult[i].description, "ID": characterResult[i].id})
            }
            console.log(characterArr);
        })
        .catch((err) => {
            console.log(err);
        });

    // Format the res data to be easily displayed

    // Create DOM elements with the correct data
}