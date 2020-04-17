
const city = "prefabs/city/city.html";
const backpack = "prefabs/backpack/backpack.html";
const tavern = "prefabs/tavern/tavern.html";

var content = document.getElementById("content");
var app;

function init(){
    // setting up the page
    app = new Vue({
        
        el: '#screen',

        data: {
            location: 'City',
            location_url: city
        },

        methods: {

            go_city: function(){
                app.location = 'City'
                app.location_url = city
            
            },
            
            go_backpack: function(){
                app.location = 'BackPack'
                app.location_url = backpack
            },

            go_tavern: function(){
                app.location = 'Tavern'
                app.location_url = tavern
            
            },

        }
    })
}

// initialize the page
init();