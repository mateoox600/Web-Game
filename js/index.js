
var position_label = document.getElementById("location-name");

var go_city_button = document.getElementById("go-city-button");
var backpack_button = document.getElementById("backpack-button");
var tavern_button = document.getElementById("tavern-button");

function init(){
    go_city_button.onclick = function(){
        position_label.innerHTML = "City";
        go_city_button.style.visibility = "hidden";
    };
    backpack_button.onclick = function(){
        position_label.innerHTML = "BackPack";
        go_city_button.style.visibility = "visible";
    };
    tavern_button.onclick = function(){
        position_label.innerHTML = "Tavern";
        go_city_button.style.visibility = "visible";
    };
}

init();