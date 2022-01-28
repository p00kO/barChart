const data = [4,7,3,9,15];
const options = {
                  width: 500,
                  height: 300,
                  barColor: "black",
                  labelColor: "red",
                  barSpacing: 5,
                  x_axis: {title: "Years", label: "bottom"},
                  y_axis: {title: "Production", label: top},
                  font: {size: 12, color: "black"},
                  title: "Title of the Graph"
                };
let element = $("#graph");


drawBarChart(data, options, element);