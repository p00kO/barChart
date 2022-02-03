const data = [ {'value': [17,1,3],'color' :['blue', '#ff2277', 'orange'],'labelColor' :['black', 'white','black'], 'barLabel': 'Tim' },
               {'value': [11,5,4], 'color' :['blue', '#ff2277', 'orange'], 'labelColor' :['black', 'white', 'black'], 'barLabel': 'Larry'},
               {'value' : [49,7,3], 'color' :['blue', '#ff2277', 'orange'], 'labelColor' :['white', 'black', 'black'], 'barLabel' : 'Cledus'},
               {'value' : [26,12,3], 'color' :['orange', '#ff2277', 'orange'], 'labelColor' :['black', 'black', 'black'], 'barLabel': 'Ronny'},
               {'value' : [7,31,3], 'color' :['blue', '#999911', 'orange'], 'labelColor' :['grey', 'black', 'black'], 'barLabel':'Cremi'},
               {'value' : [9,9,3], 'color' :['blue', '#ff2277', 'orange'], 'labelColor' :['black', 'black','black'], 'barLabel' : 'Koko'},
               {'value': [24,22,3], 'color' :['blue', '#335533', '#335533'], 'labelColor' :['black', '#001100', 'black'], 'barLabel': 'PeterPo'}
              ]; 
const options = {
                  width: 800,
                  height: 300,
                  barColor: "blue",
                  barSpacing: 4,
                  graphFont: 20,
                  barLabelColor: "red",                  
                  barLabelPosition: 'center',
                  yLableColor: 'green',
                  backgroundBarColor: 'rgb(100,255,255)',
                  titleFont: {size: 24, color: "black"},
                  title: "Title of the Graph",
                  xAxisTitle: 'Average thank you\'s per day',
                  xAxisTitleFont: {size: 24, color: "black"},                  
                  xMax: 60,
                  xsteps: 12
                };
let element = $("#graph");

// const data = [ {'value': [17],'color' :['blue'],'labelColor' :['black'], 'barLabel': 'Tim' },
//                {'value': [11], 'color' :['blue', '#ff2277', 'orange'], 'labelColor' :['black', 'white', 'black'], 'barLabel': 'Larry'},
//                {'value' : [7], 'color' :['blue', '#ff2277', 'orange'], 'labelColor' :['white', 'black', 'black'], 'barLabel' : 'Cledus'},
//                {'value' : [26], 'color' :['orange', '#ff2277', 'orange'], 'labelColor' :['black', 'black', 'black'], 'barLabel': 'Ronny'},
//                {'value' : [31], 'color' :['blue', '#999911', 'orange'], 'labelColor' :['grey', 'black', 'black'], 'barLabel':'Cremi'},               
//               ];



drawBarChart(data, options, element);