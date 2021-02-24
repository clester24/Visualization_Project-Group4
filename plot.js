function init() {
  // Select the HTML Dropdown element
  var selector = d3.select("#selDataset");
  
  // Add list of Years to "Select Year" HTML Dropdown menu
    d3.json("data.js").then(() => {
      var YearID = [2013, 2014, 2015, 2016, 2017,2019, 2019];
      YearID.forEach((ID) => {
        selector
        .append("option")
        .text(ID)
        .property("value", ID);
      });
    
    // Build plot using the first sample Year ID
    // for when the page 1st loads
    const firstYear = YearID[0];
    updateCharts(firstYear);
  });
}

//Create function to update chart data
//from the data json object, to build the plots
function updateCharts(year) {    
  d3.json("data.js").then((jsonfile) => {
  var dataset = jsonfile;
  var filterArray = dataset.filter(thing => thing.year == year);
  console.log(filterArray);
  var result = filterArray;
  var acres_burned = result.map(item => item.acres);
  var county_names = result.map(item => item.county);
  var name_of_fire = result.map(item => item.name); 

  // Bar Chart Trace
  var trace1 = {
      x: acres_burned.slice(0,10).reverse(),
      y: name_of_fire.slice(0,10).map(name_of_fire => `${name_of_fire}`).reverse(),
      text: county_names.slice(0,10).reverse(),
      name: "California Fires Bar Chart",
      type: "bar",
      orientation: "h"
  };
  //data
  var data = [trace1];
  //layout
  var layout = {
    showlegend: false,
    title: "Year:" + year,
    width: 1000,
    height: 700,
    yaxis: {
      tickson: "boundaries",
      ticklen: 100,
      showdividers: true,
      dividercolor: 'grey',
      dividerwidth: 2,
    }
  };
 
  // Render the plot to the div tag with id "bar"
  Plotly.newPlot("bar", data, layout);   
});
}

function optionChanged(newYear) {

  // Fetch new data each time a new year is selected
  updateCharts(newYear);
}

// Initialize the dashboard
init();
