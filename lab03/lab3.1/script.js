var w = 800;
var wPadding = 45;
var h = 200;
var hPadding = 15;

var dataset = [
  [475, 44],
  [5, 20],
  [480, 90],
  [250, 50],
  [100, 33],
  [330, 95],
  [410, 12],
  [25, 67],
  [85, 21],
  [220, 88],
  [600, 100],
];

var xScale = d3
  .scaleLinear()
  .domain([
    d3.min(dataset, function (d) {
      return d[0];
    }),
    d3.max(dataset, function (d) {
      return d[0];
    }),
  ])
  .range([wPadding, w - wPadding]);

var yScale = d3
  .scaleLinear()
  .domain([
    d3.min(dataset, function (d) {
      return d[1];
    }),
    d3.max(dataset, function (d) {
      return d[1];
    }),
  ])
  .range([h - hPadding, hPadding]);

var svg = d3.select("#chart").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", function (d, i) {
    return xScale(d[0]);
  })
  .attr("cy", function (d) {
    return yScale(d[1]);
  })
  .attr("r", 5)
  .attr("fill", "slategrey");

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function (d) {
    return d[0] + "," + d[1];
  })
  .attr("x", function (d, i) {
    return xScale(d[0]);
  })
  .attr("y", function (d, i) {
    return yScale(d[1]) - 5;
  })
  .attr("font-family", "system-ui")
  .attr("font-size", "12px");

svg.select("circle").attr("fill", "red");
