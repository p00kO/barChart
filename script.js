const data = [17,2,1,26,7,9,35,65]; // --> [{value: 3, label: "January"},{value: 70, label: "February"}]
const options = {
                  width: 800,
                  height: 300,
                  barColor: "black",
                  barSpacing: 5,
                  barLabelColor: "red",                  
                  barLabelPosition: 'bottom',                 
                  font: {size: 12, color: "black"},
                  title: "Title of the Graph",
                  titleFontSize: '24px',
                  titleColor: 'black',
                  xAxisTitle: 'Total Output'
                };
let element = $("#graph");


drawBarChart(data, options, element);