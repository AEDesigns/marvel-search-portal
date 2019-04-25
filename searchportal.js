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


function addNewHtmlElement(resultsArr){
    var htmlDiv = document.createElement('div');
    for(var i = 0; i < resultsArr.length; i++){
        const currentArrayMemberTitle = resultsArr[i].title || resultsArr[i].name;
        const currentArrayMemberDescription = resultsArr[i].description;
        const currentArrayMemberId = resultsArr[i].id;

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
                document.getElementById('movies').appendChild(addNewHtmlElement(eventsArr));
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
            document.getElementById('comics').appendChild(addNewHtmlElement(comicsArr));
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
            document.getElementById('characters').appendChild(addNewHtmlElement(characterArr));
        })
        .catch((err) => {
            console.log(err);
        });
}
