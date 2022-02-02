const data = [ {'value': 17,'label': 'Tim' },
               {'value': 11, 'label': 'Larry'},
               {'value' : 49, 'label' : 'Cledus'},
               {'value' : 26, 'label': 'Ronny'},
               {'value' : 7, 'label':'Cremi'},
               {'value' : 9, 'label' : 'Koko'},
               {'value': 24, 'label': 'PeterPo'}
              ]; 
const options = {
                  width: 600,
                  height: 350,
                  barColor: "black",
                  barSpacing: 5,
                  barLabelColor: "red",                  
                  barLabelPosition: 'center',
                  backgroundBarColor: 'rgb(100,255,255)',
                  font: {size: 24, color: "black"},
                  title: "Title of the Graph",
                  xAxisTitle: 'Average thank you\'s per day',                  
                  xMax: 70,
                  xsteps: 6
                };
let element = $("#graph");


drawBarChart(data, options, element);