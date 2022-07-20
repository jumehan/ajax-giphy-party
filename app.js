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

/** Appends the image URL to the DOM
 *
 * @param {string} gifURL
 */

function displayGif(gifURL) {
  $displayGif.append($('<img>', { src: gifURL }));
}

/** Finds a gif URL based on query
 *
 * @param {string} query
 * @returns: a promise for a gif URL
 */

async function searchGif(query) {
  console.log("You're seaching for", query);
  const giphyRes = await getGif(query);
  const gifURL = giphyRes.data.data[0].images.original.url;

  return gifURL;
}

/** Searches Giphy gifs based on a search term
 *
 * @param {string} searchTerm
 * @returns a promise of a Giphy API dataset
 */

async function getGif(searchTerm) {
  const gifImg = await axios.get(GIF_API_URL, { params: { q: searchTerm, api_key } });
  console.log("get", gifImg);

  return gifImg;
}

/** Controller function;
 *  Takes user input and clears input area
 */
async function findAndDisplayGif(event) {
  event.preventDefault();

  const $query = $("input").val();
  $("input").val("");

  const gifURL = await searchGif($query);
  displayGif(gifURL);
}

/** removes all elements in display area */
function removeGifs() {
  $displayGif.empty();
}

$("form").on("submit", findAndDisplayGif);
$("#removeImg").on("click", removeGifs);
//TODO: docstring add parameters, const for non reassigned variables