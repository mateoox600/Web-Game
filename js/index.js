
// importing html elements
var position_label = document.getElementById("location-name");
var go_city_button = document.getElementById("go-city-button");
var backpack_button = document.getElementById("backpack-button");
var tavern_button = document.getElementById("tavern-button");
var content = document.getElementById("content");

function init(){
    // setting up the click event for the button
    go_city_button.onclick = function(){ go_city(); };
    backpack_button.onclick = function(){ go_backpack(); };
    tavern_button.onclick = function(){ go_tavern(); };
}

// updating html element to go to the city
function go_city(){
    position_label.innerHTML = "City";
    go_city_button.style.visibility = "hidden";
    content.src = "prefabs/city/city.html";

}

// updating html element to go to the backpack
function go_backpack(){
    position_label.innerHTML = "BackPack";
    go_city_button.style.visibility = "visible";
    content.src = "prefabs/backpack/backpack.html";
}

// updating html element to go to the tavern
function go_tavern(){
    position_label.innerHTML = "Tavern";
    go_city_button.style.visibility = "visible";
    content.src = "prefabs/tavern/tavern.html";
}

init();