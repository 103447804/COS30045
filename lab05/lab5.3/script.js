var w = 500;
var h = 110;
var barPadding = 2;
var hPadding = 20;
var dataset = [10, 5, 21, 6, 8, 9, 19, 17, 25];
var maxValue = 25;

var xScale = d3
  .scaleBand()
  .domain(d3.range(dataset.length))
  .rangeRound([0, w])
  .paddingInner(0.05);

var yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, h]);

var svg = d3.select("#chart").append("svg").attr("width", w).attr("height", h);
svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", function (d, i) {
    return xScale(i);
  })
  .attr("y", function (d) {
    return h - yScale(d);
  })
  .attr("width", xScale.bandwidth())
  .attr("height", function (d) {
    return yScale(d);
  })
  .attr("fill", function (d) {
    return "rgb(" + Math.round(d * 10) + ", 0, 0)";
  });

d3.select("#add").on("click", function () {
  var newNumber = Math.floor(Math.random() * maxValue);
  dataset.push(newNumber);

  xScale.domain(d3.range(dataset.length));

  var bars = svg.selectAll("rect").data(dataset);

  bars
    .enter()
    .append("rect")
    .attr("x", w)
    .attr("y", function (d) {
      return h - yScale(d);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", function (d) {
      return yScale(d);
    })
    .attr("fill", function (d) {
      return "rgb(" + Math.round(d * 10) + ", 0, 0)";
    })
    .merge(bars)
    .transition()
    .duration(500)
    .attr("x", function (d, i) {
      return xScale(i);
    })
    .attr("y", function (d) {
      return h - yScale(d);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", function (d) {
      return yScale(d);
    });
});

d3.select("#remove").on("click", function () {
  dataset.pop();
  xScale.domain(d3.range(dataset.length));
  yScale.domain([0, d3.max(dataset)]);

  var bars = svg.selectAll("rect").data(dataset);
  bars
    .enter()
    .append("rect")
    .attr("x", w)
    .attr("y", function (d) {
      return h - yScale(d);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", function (d) {
      return yScale(d);
    })
    .attr("fill", function (d) {
      return "rgb(" + Math.round(d * 10) + ", 0, 0)";
    })
    .merge(bars)
    .transition()
    .duration(500)
    .attr("x", function (d, i) {
      return xScale(i);
    })
    .attr("y", function (d) {
      return h - yScale(d);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", function (d) {
      return yScale(d);
    });
  bars.exit().transition().duration(500).attr("x", w).remove();
});
