const data1 = [ {'value': [17],'color' :[],'labelColor' :['black'], 'barLabel': 'Tim' },
               {'value': [11], 'color' :[], 'labelColor' :['white'], 'barLabel': 'Larry'},
               {'value' : [7], 'color' :[], 'labelColor' :['white'], 'barLabel' : 'Cledus'},
               {'value' : [26], 'color' :[], 'labelColor' :['black'], 'barLabel': 'Ronny'},
               {'value' : [31], 'color' :[], 'labelColor' :['white'], 'barLabel':'Cremi'},               
              ];


const data2 = [ {'value': [17,1,3],'color' :['red','yellow','green'],'labelColor' :['black'], 'barLabel': 'Tim' },
               {'value': [11,5,4], 'color' :['red','yellow','green'], 'labelColor' :[, , 'black'], 'barLabel': 'Larry'},
               {'value' : [49,7,3], 'color' :['red','yellow','green'], 'labelColor' :[, ,], 'barLabel' : 'Cledus'},
               {'value' : [26,12,3], 'color' :['red','yellow','green'], 'labelColor' :[, 'black', ], 'barLabel': 'Ronny'},
               {'value' : [7,31,3], 'color' :['red','yellow','green'], 'labelColor' :[,'grey', 'black'], 'barLabel':'Cremi'},               
               {'value': [24,22,3], 'color' :['red','yellow','green'], 'labelColor' :['black',,], 'barLabel': 'Koko'}
              ]; 

const options1 = {
                  width: 500,
                  height: 300,
                  barSpacing: 4,
                  graphFont: 16,                  
                  barLabelPosition: 'center',
                  yLableColor: 'green',
                  backgroundBarColor: 'rgb(100,255,255)',
                  titleFont: {size: 24, color: "black"},
                  title: "Saying Thanks!",                  
                  xAxisTitle: 'Average thank you\'s per day',
                  xAxisTitleFont: {size: 24, color: "black"},                  
                  xMax: 60,
                  xsteps: 6
                };
let element1 = $("#graph");

const options2 = {
  width: 600,
  height: 300,
  barColor: "blue",
  barSpacing: 4,
  graphFont: 16,
  barLabelColor: "red",                  
  barLabelPosition: 'center',
  yLableColor: 'green',
  backgroundBarColor: 'rgb(220,220,220)',
  titleFont: {size: 24, color: "black"},
  title: "Saying Thanks!",                  
  xAxisTitle: 'Thank you\'s per day',
  xAxisTitleFont: {size: 24, color: "black"},                  
  xMax: 60,
  xsteps: 10
};

let element2 = $("#stackedHorizontalBC");
drawBarChart(data1, options1, element1);
drawBarChart(data2, options2, element2);
