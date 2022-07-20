"use strict";

//https://api.giphy.com/v1/gifs/search?q=
//api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym

//add click listener on search button with preventDefault to avoid page refresh
//get input value from form searchGif
//take the input value and put it in a api gif request
//write an async await function that assigns a var to the api object.data.img
//pass that var into displayGif div
//remove button removes the entire img > displayGif div should be empty


const GIF_API_URL = "https://api.giphy.com/v1/gifs/search";
const api_key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const $displayGif = $(".displayGifs");

/** Inserts an image into the DOM */
function displayGif(gifURL) {
  $displayGif.append($('<img>', { src: gifURL }));
}

/** Gets a url for a gif */
async function searchGif(query) {
  console.log("You're seaching for", query);
  let giffyObj = await getGif(query);
  let gifURL = giffyObj.data.data[0].images.original.url;

  return gifURL;
}

/** searches Giphy API for user input query */
async function getGif(searchTerm) {
  let gifImg = await axios.get(GIF_API_URL, { params: { q: searchTerm, api_key } });
  console.log("get", gifImg);

  return gifImg;
}

/** Controller function; takes input and clears input area */
async function findAndDisplayGif(event) {
  event.preventDefault();

  const $query = $("input").val();
  $("input").val("");

  let gifURL = await searchGif($query);
  displayGif(gifURL);
}

/** removes all elements in display area */
function removeGifs() {
  $displayGif.empty();
}

$("form").on("submit", findAndDisplayGif);
$("#removeImg").on("click", removeGifs);
