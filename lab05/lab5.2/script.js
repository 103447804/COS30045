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

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function (d) {
    return d;
  })
  .attr("x", function (d, i) {
    return xScale(i) + xScale.bandwidth() / 2;
  })
  .attr("y", function (d, i) {
    return h - yScale(d) + 10;
  })
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "white")
  .attr("text-anchor", "middle");

d3.select("#update").on("click", function () {
  var numValues = dataset.length;

  dataset = [];
  for (var i = 0; i < numValues; i++) {
    var newNumber = Math.floor(Math.random() * maxValue);
    dataset.push(newNumber);
  }

  svg
    .selectAll("rect")
    .data(dataset)
    .attr("y", function (d) {
      return h - yScale(d);
    })
    .attr("height", function (d) {
      return yScale(d);
    })
    .attr("fill", function (d) {
      return "rgb(" + Math.round(d * 10) + ", 0, 0)";
    });

  svg
    .selectAll("text")
    .data(dataset)
    .text(function (d) {
      return d;
    })
    .attr("x", function (d, i) {
      return xScale(i) + xScale.bandwidth() / 2;
    })
    .attr("y", function (d, i) {
      return h - yScale(d) + 14;
    });
});

d3.select("#t1").on("click", function () {
  var numValues = dataset.length;

  dataset = [];
  for (var i = 0; i < numValues; i++) {
    var newNumber = Math.floor(Math.random() * maxValue);
    dataset.push(newNumber);
  }

  svg
    .selectAll("rect")
    .data(dataset)
    .transition()
    .duration(2000)
    .ease(d3.easeCircleOut)
    .delay(function (d, i) {
      return (i / dataset.length) * 1000;
    })
    .attr("y", function (d) {
      return h - yScale(d);
    })
    .attr("height", function (d) {
      return yScale(d);
    })
    .attr("fill", function (d) {
      return "rgb(" + Math.round(d * 10) + ", 0, 0)";
    });

  svg
    .selectAll("text")
    .data(dataset)
    .text(function (d) {
      return d;
    })
    .attr("x", function (d, i) {
      return xScale(i) + xScale.bandwidth() / 2;
    })
    .attr("y", function (d, i) {
      return h - yScale(d) + 14;
    });
});

d3.select("#t2").on("click", function () {
  var numValues = dataset.length;

  dataset = [];
  for (var i = 0; i < numValues; i++) {
    var newNumber = Math.floor(Math.random() * maxValue);
    dataset.push(newNumber);
  }

  svg
    .selectAll("rect")
    .data(dataset)
    .transition()
    .duration(3000)
    .ease(d3.easeElasticOut)
    .delay(function (d, i) {
      return (i / dataset.length) * 1000;
    })
    .attr("y", function (d) {
      return h - yScale(d);
    })
    .attr("height", function (d) {
      return yScale(d);
    })
    .attr("fill", function (d) {
      return "rgb(" + Math.round(d * 10) + ", 0, 0)";
    });

  svg
    .selectAll("text")
    .data(dataset)
    .text(function (d) {
      return d;
    })
    .attr("x", function (d, i) {
      return xScale(i) + xScale.bandwidth() / 2;
    })
    .attr("y", function (d, i) {
      return h - yScale(d) + 14;
    });
});
