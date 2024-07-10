function changeChartTo2019() {
  document.getElementById("petChart").src = "2019chart.png";
  document.getElementById("petChart").alt = "chart of pet ownership in 2019";
  document.getElementById("figCaption").innerHTML =
    "Fig 1. Percent of most popular pets owned by Australians in 2019";
  document.getElementById("2019button").className = "selected";
  document.getElementById("2021button").className = "";
  document.getElementById("bothButton").className = "";
}

function changeChartTo2021() {
  document.getElementById("petChart").src = "2021chart.png";
  document.getElementById("petChart").alt = "chart of pet ownership in 2021";
  document.getElementById("figCaption").innerHTML =
    "Fig 2. Percent of most popular pets owned by Australians in 2021";
  document.getElementById("2019button").className = "";
  document.getElementById("2021button").className = "selected";
  document.getElementById("bothButton").className = "";
}

function changeChartToBoth() {
  document.getElementById("petChart").src = "bothchart.png";
  document.getElementById("petChart").alt =
    "chart of pet ownership in 2019 and 2021";
  document.getElementById("figCaption").innerHTML =
    "Fig 3. Percent of most popular pets owned by Australians in 2019 and 2021";
  document.getElementById("2019button").className = "";
  document.getElementById("2021button").className = "";
  document.getElementById("bothButton").className = "selected";
}
