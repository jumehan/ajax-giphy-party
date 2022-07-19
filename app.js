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

const $searchQ = $("input");

function getInput() {

}

async function getGif() {
  let gifImg = await axios.get(GIF_API_URL, {params: {q:"dad", api_key}});
  console.log("get", gifImg)
}

console.log("Let's get this party started!");

