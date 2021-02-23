var geoData = "acres_structures.csv";
var data,map;
var colorScale = {
    '2013': '#B6A6CA',
    '2014': '#6D98BA',
    '2015': '#FC814A',
    '2016': '#D282A6',
    '2017': '#64B6AC',
    '2018': '#EEC170',
    '2019': '#6D98BA'
};

function initMap(){

    var streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
    });
    return streets
};


function getData(streets) {
    d3.csv(geoData)
        .then(function(csv) {
        data = csv;
        
        var fire2013 = data.filter(item => item.year = 2013);
        fireLayer2013 = addMarkers(fire2013);
        
        var fire2014 = data.filter(item => item.year = 2014);
        fireLayer2014 = addMarkers(fire2014);
        
        var fire2015 = data.filter(item => item.year = 2015);
        fireLayer2015 = addMarkers(fire2015);
        
        var fire2016 = data.filter(item => item.year = 2016);
        fireLayer2016 = addMarkers(fire2016);
        
        var fire2017 = data.filter(item => item.year = 2017);
        fireLayer2017 = addMarkers(fire2017);
        
        var fire2018 = data.filter(item => item.year = 2018);
        fireLayer2018 = addMarkers(fire2018);

        var fire2019 = data.filter(item => item.year = 2019);
        fireLayer2019 = addMarkers(fire2019);
        
        var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
            attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
            maxZoom: 18,
            id: "dark-v10",
            accessToken: API_KEY
            });

        var outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
            attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
            maxZoom: 18,
            id: "outdoors-v11",
            accessToken: API_KEY
            });
        
        var baseMaps = {
            Streets: streets,
            Dark: dark,
            Outdoors: outdoors
        };

        var fireMaps = {
            "2013": fireLayer2013,
            "2014": fireLayer2014,
            "2015": fireLayer2015,
            "2016": fireLayer2016,
            "2017": fireLayer2017,
            "2018": fireLayer2018,
            "2019": fireLayer2019
        }
        myMap = L.map("map", {
            center: [34.0522, -118.2437],
            zoom: 5,
            layers: [streets, fireLayer2013]});

        L.control.layers(baseMaps,fireMaps).addTo(myMap)
    });
}


function addMarkers(data) {
    var fireMarkers = [];
    
    data.forEach(function(d) {
        var marker = L.circleMarker([+d.latitude,+d.longitude])
        .bindPopup("<h3>" + d.name + "<h3><h3>Acres Burned: " + d.acres + "</h3><h3>County: " + d.county + "</h3>");
        
        var color = colorScale[+d.year] || '#aaa';
        
        marker.setStyle({
            radius: 6,
            fillColor: color,
            fillOpacity: 1,
            color: '#ddd',
            weight: 0.5 
        });
        
        fireMarkers.push(marker)
    })
    var fireLayer = L.layerGroup(fireMarkers)
    return fireLayer
}

var streets = initMap();
getData(streets);