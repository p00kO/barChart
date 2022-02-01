const data = [ {'value': 17,'label': 'Tim' },
               {'value': 2, 'label': 'Larry'},
               {'value' : 1, 'label' : 'Cledus'},
               {'value' : 26, 'label': 'Ronny'},
               {'value' : 7, 'label':'Cremi'},
               {'value' : 9, 'label' : 'Koko'},
               {'value': 30, 'label': 'PeterPo'}
              ]; 
const options = {
                  width: 600,
                  height: 300,
                  barColor: "black",
                  barSpacing: 5,
                  barLabelColor: "red",                  
                  barLabelPosition: 'center',                 
                  font: {size: 18, color: "black"},
                  title: "Title of the Graph",
                  xAxisTitle: 'Total Output',                  
                  xMax: 50,
                  xsteps: 10
                };
let element = $("#graph");


drawBarChart(data, options, element);