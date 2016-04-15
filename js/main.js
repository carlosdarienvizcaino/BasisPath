
// Main File

var FileReader = require("./filereader");
var Parser     = require("./parser");

//var filePath = "/Projects/48Hours/BasisPath/data/example1.java";

var filePath = "/Users/Carlos/workspace/48HOurs/BasisPath/data/example1.java";
var fileData = FileReader(filePath);

var dataAsAtree = new Parser(fileData);

// //Make an SVG Container
//  var svgContainer = d3.select("body").append("svg")
//                                      .attr("width", 200)
//                                      .attr("height", 200);
 
// //Draw the Circle
//  var circle = svgContainer.append("circle")
//                           .attr("cx", 30)
//                           .attr("cy", 30)
//                          .attr("r", 20);
