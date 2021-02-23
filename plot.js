//create variables to be used later
function Year2013(item) {
    return parseInt(item.year) == 2013;
}
    var filteredcounties = dataset.filter(Year2013);

    console.log(filteredcounties);

    var countynames2013 = filteredcounties.map(item => item.county);

    console.log(countynames2013);

    var acresburned2013 = filteredcounties.map(item => item.acres);
    acresburned2013.sort((a, b) => b - a);
    acresburned2013 = acresburned2013.slice(0, 10);
    acresburned2013 = acresburned2013.reverse();
    console.log(acresburned2013);

    var datasetnames2013 = filteredcounties.map(item => item.name);


// Initializes the page with a default plot
var trace1 = {
    x: acresburned2013,
    y: countynames2013,
    text: datasetnames2013,
    name: "California Fires",
    type: "bar",
    orientation: "h"
};
  
//Create the data array for our plot
var data = [trace1];

//Define our plot layout
var layout = {
    title: "Top Counties in Acres Burned from California Fires - 2013",
    xaxis: { title: "Acres Burned"},
    yaxis: { title: "County"},
    font: {size: 13}
};
var config = {
    responsive: true};

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout, config);

///////////////////////////////////////////////////////////////////////////////////////

//create variables to be used later
function Year2014(item) {
    return parseInt(item.year) == 2014;
}
    var filteredcounties2 = dataset.filter(Year2014);

    console.log(filteredcounties2);

    var countynames2014 = filteredcounties2.map(item => item.county);

    console.log(countynames2014);

    var acresburned2014 = filteredcounties2.map(item => item.acres);
    acresburned2014.sort((a, b) => b - a);
    acresburned2014 = acresburned2014.slice(0, 10);
    acresburned2014 = acresburned2014.reverse();
    console.log(acresburned2014);

    var datasetnames2014 = filteredcounties2.map(item => item.name);


// Initializes the page with a default plot
var trace2 = {
    x: acresburned2014,
    y: countynames2014,
    text: datasetnames2014,
    name: "California Fires",
    type: "bar",
    orientation: "h"
};
  
//Create the data array for our plot
var data2 = [trace2];

//Define our plot layout
var layout2 = {
    title: "Top Counties in Acres Burned from California Fires - 2014",
    xaxis: { title: "Acres Burned"},
    yaxis: { title: "County"},
    font: {size: 13}
};
var config = {
    responsive: true};

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot2", data2, layout2, config);


///////////////////////////////////////////////////////////////////////////////////////

//create variables to be used later
function Year2015(item) {
    return parseInt(item.year) == 2015;
}
    var filteredcounties3 = dataset.filter(Year2015);

    console.log(filteredcounties3);

    var countynames2015 = filteredcounties3.map(item => item.county);

    console.log(countynames2015);

    var acresburned2015 = filteredcounties3.map(item => item.acres);
    acresburned2015.sort((a, b) => b - a);
    acresburned2015 = acresburned2015.slice(0, 10);
    acresburned2015 = acresburned2015.reverse();
    console.log(acresburned2015);

    var datasetnames2015 = filteredcounties3.map(item => item.name);


// Initializes the page with a default plot
var trace3 = {
    x: acresburned2015,
    y: countynames2015,
    text: datasetnames2015,
    name: "California Fires",
    type: "bar",
    orientation: "h"
};
  
//Create the data array for our plot
var data3 = [trace3];

//Define our plot layout
var layout3 = {
    title: "Top Counties in Acres Burned from California Fires - 2015",
    xaxis: { title: "Acres Burned"},
    yaxis: { title: "County"},
    font: {size: 13}
};
var config = {
    responsive: true};

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot3", data3, layout3, config);

///////////////////////////////////////////////////////////////////////////////////////

//create variables to be used later
function Year2016(item) {
    return parseInt(item.year) == 2016;
}
    var filteredcounties4 = dataset.filter(Year2016);

    console.log(filteredcounties4);

    var countynames2016 = filteredcounties4.map(item => item.county);

    console.log(countynames2016);

    var acresburned2016 = filteredcounties4.map(item => item.acres);
    acresburned2016.sort((a, b) => b - a);
    acresburned2016 = acresburned2016.slice(0, 10);
    acresburned2016 = acresburned2016.reverse();
    console.log(acresburned2016);

    var datasetnames2016 = filteredcounties4.map(item => item.name);


// Initializes the page with a default plot
var trace4 = {
    x: acresburned2016,
    y: countynames2016,
    text: datasetnames2016,
    name: "California Fires",
    type: "bar",
    orientation: "h"
};
  
//Create the data array for our plot
var data4 = [trace4];

//Define our plot layout
var layout4 = {
    title: "Top Counties in Acres Burned from California Fires - 2016",
    xaxis: { title: "Acres Burned"},
    yaxis: { title: "County"},
    font: {size: 13}
};
var config = {
    responsive: true};

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot4", data4, layout4, config);

///////////////////////////////////////////////////////////////////////////////////////

//create variables to be used later
function Year2017(item) {
    return parseInt(item.year) == 2017;
}
    var filteredcounties5 = dataset.filter(Year2017);

    console.log(filteredcounties5);

    var countynames2017 = filteredcounties5.map(item => item.county);

    console.log(countynames2017);

    var acresburned2017 = filteredcounties5.map(item => item.acres);
    acresburned2017.sort((a, b) => b - a);
    acresburned2017 = acresburned2017.slice(0, 10);
    acresburned2017 = acresburned2017.reverse();
    console.log(acresburned2017);

    var datasetnames2017 = filteredcounties5.map(item => item.name);


// Initializes the page with a default plot
var trace5 = {
    x: acresburned2017,
    y: countynames2017,
    text: datasetnames2017,
    name: "California Fires",
    type: "bar",
    orientation: "h"
};
  
//Create the data array for our plot
var data5 = [trace5];

//Define our plot layout
var layout5 = {
    title: "Top Counties in Acres Burned from California Fires - 2017",
    xaxis: { title: "Acres Burned"},
    yaxis: { title: "County"},
    font: {size: 13}
};
var config = {
    responsive: true};

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot5", data5, layout5, config);

