var w = 500;
var h = 110;
var barPadding = 2;

var svg = d3.select("#chart").append("svg").attr("width", w).attr("height", h);

function barChart() {
  svg
    .selectAll("rect")
    .data(wombatSightings)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
      return i * (w / wombatSightings.length);
    })
    .attr("y", function (d) {
      return h - d.wombats * 4;
    })
    .attr("width", function (d, i) {
      return w / wombatSightings.length - barPadding;
    })
    .attr("height", function (d) {
      return d.wombats * 4;
    })
    .attr("fill", function (d) {
      return "rgb(0, " + Math.round(d.wombats * 7) + ", 0)";
    });

  svg
    .selectAll("text")
    .data(wombatSightings)
    .enter()
    .append("text")
    .text(function (d) {
      return d.wombats;
    })
    .attr("x", function (d, i) {
      return (
        i * (w / wombatSightings.length) +
        (w / wombatSightings.length - barPadding) / 2
      );
    })
    .attr("y", function (d, i) {
      return h - d.wombats * 4 + 14;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "beige")
    .attr("text-anchor", "middle");
}

d3.csv("task2.4data.csv").then(function (data) {
  console.log(data);
  wombatSightings = data;

  barChart(wombatSightings);
});
