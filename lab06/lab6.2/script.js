var w = 500;
var h = 110;
var barPadding = 2;
var hPadding = 20;
var dataset = [10, 5, 21, 6, 8, 9, 19, 17, 25];
var maxValue = 25;
var sortOrder = false;

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
  .attr("fill", "slategrey")
  // .on("mouseover", function () {
  //   d3.select(this)
  //     .attr("fill", "orange")
  //     .append("title")
  //     .text(function (d) {
  //       return "This value is " + d;
  //     });
  // })
  // .on("mouseout", function (d) {
  //   d3.select(this).transition().duration(250).attr("fill", "slategrey");
  // });
  .on("mouseover", function (event, d) {
    var xPosition = parseFloat(d3.select(this).attr("x"));
    var yPosition = parseFloat(d3.select(this).attr("y"));
    svg
      .append("text")
      .attr("id", "tooltip")
      .attr("x", xPosition + xScale.bandwidth() / 3)
      .attr("y", yPosition + 15)
      .text(d);
    d3.select(this).attr("fill", "orange");
  })
  .on("mouseout", function (d) {
    d3.select("#tooltip").remove();
    d3.select(this).transition().duration(250).attr("fill", "slategrey");
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
    .attr("fill", "slategray")
    // .on("mouseover", function () {
    //   d3.select(this)
    //     .attr("fill", "orange")
    //     .append("title")
    //     .text(function (d) {
    //       return "This value is " + d;
    //     });
    // })
    // .on("mouseout", function (d) {
    //   d3.select(this).transition().duration(250).attr("fill", "slategrey");
    // })
    .on("mouseover", function (event, d) {
      var xPosition = parseFloat(d3.select(this).attr("x"));
      var yPosition = parseFloat(d3.select(this).attr("y"));
      svg
        .append("text")
        .attr("id", "tooltip")
        .attr("x", xPosition + xScale.bandwidth() / 3)
        .attr("y", yPosition + 15)
        .text(d);
      d3.select(this).attr("fill", "orange");
    })
    .on("mouseout", function (d) {
      d3.select("#tooltip").remove();
      d3.select(this).transition().duration(250).attr("fill", "slategrey");
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
    .attr("fill", "slategrey")
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

d3.select("#sort").on("click", function () {
  sortOrder = !sortOrder;
  sortBars();
});

var sortBars = function () {
  svg
    .selectAll("rect")
    .sort(function (a, b) {
      if (sortOrder) return d3.ascending(a, b);
      else return d3.descending(a, b);
    })
    .transition()
    .duration(1000)
    .attr("x", function (d, i) {
      return xScale(i);
    });
};
