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

function addNewEventsElement(eventsArr){
    var htmlDiv = document.createElement('div');
    for(var i = 0; i < eventsArr.length; i++){
        const currentArrayMemberTitle = eventsArr[i].title;
        const currentArrayMemberDescription = eventsArr[i].description;
        const currentArrayMemberId = eventsArr[i].id;

        var eventsH4 = document.createElement('h4');
        eventsH4.innerText = currentArrayMemberTitle;
        htmlDiv.appendChild(eventsH4);

        var eventsID = document.createElement('h5');
        eventsID.innerText = "ID: " + currentArrayMemberId;
        htmlDiv.appendChild(eventsID);

        var eventsP = document.createElement('p');
        eventsP.innerText = "Description: " + currentArrayMemberDescription;
        htmlDiv.appendChild(eventsP);
    }
    return htmlDiv
}

function addNewComicsElement(comicsArr){
    var htmlComicsDiv = document.createElement('div');
    for(var i = 0; i < comicsArr.length; i++){
        const currentArrayMemberTitle = comicsArr[i].title;
        const currentArrayMemberDescription = comicsArr[i].description;
        const currentArrayMemberId = comicsArr[i].id;

        var comicsH4 = document.createElement('h4');
        comicsH4.innerText = currentArrayMemberTitle;
        htmlComicsDiv.appendChild(comicsH4);

        var eventsID = document.createElement('h5');
        eventsID.innerText = "ID: " + currentArrayMemberId;
        htmlComicsDiv.appendChild(eventsID);

        var eventsP = document.createElement('p');
        eventsP.innerText = "Description: " + currentArrayMemberDescription;
        htmlComicsDiv.appendChild(eventsP);
    }
    return htmlComicsDiv
}

function addNewCharactersElement(characterArr){
    var htmlCharDiv = document.createElement('div');

    for(var i = 0; i < characterArr.length; i++){
        const currentArrayMemberTitle = characterArr[i].name;
        const currentArrayMemberDescription = characterArr[i].description;
        const currentArrayMemberId = characterArr[i].id;

        var characterH4 = document.createElement('h4');
        characterH4.innerText = currentArrayMemberTitle;
        htmlCharDiv.appendChild(characterH4);

        var charID = document.createElement('h5');
        charID.innerText = "ID: " + currentArrayMemberId;
        htmlCharDiv.appendChild(charID);

        var charP = document.createElement('p');
        charP.innerText = "Description: " + currentArrayMemberDescription;
        htmlCharDiv.appendChild(charP);
    }
    return htmlCharDiv
}

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
                eventsArr.push({title: eventsResult[i].title, description: eventsResult[i].description, id: eventsResult[i].id})
                }
                document.getElementById('movies').appendChild(addNewEventsElement(eventsArr));
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
                comicsArr.push({title: comicsResult[i].title, description: comicsResult[i].description, id: comicsResult[i].id})
            }
            document.getElementById('comics').appendChild(addNewComicsElement(comicsArr));
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
                characterArr.push({name: characterResult[i].name, description: characterResult[i].description, id: characterResult[i].id})
            }
            document.getElementById('characters').appendChild(addNewCharactersElement(characterArr));
        })
        .catch((err) => {
            console.log(err);
        });

    // Format the res data to be easily displayed

    // Create DOM elements with the correct data
}