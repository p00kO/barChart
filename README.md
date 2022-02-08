# barChart
## About
This API provides developers with an easy way to add horizontal bar charts to webpages served to their clients. It allows for single or stacked horizontal bar charts. Here's an example of a single bar chart:

![Bar chart Example Image](/barExample.png)

## API Features
* Easily set desired width and height in pixels
* Dynamic title allows your users to change it on the webpage
* Titile has customizable font and text color
* X-axis title can be easily set with your chosen color and font size. Axis ticks has customizable spacing and max value. 
* Y-axis shows the bar labels with customizable font size and color. 
* Bar color and bar spacing is set but the developper. Each bar can have a lable or not and the position of the label can be set. 
* The multi-valued bar chart suports bar and label color custimization.

## How to use
To impliment the API, you'll need to include [JQuery](https://jquery.com/). Additionally, you will need to include a reference to the location of the barGraph script in your html source:
`<script src="barGraph.js"></script>`
The function you call to generate a graph has 3 parameters:
`drawBarChart(data, options, element)`
The data is the object which contains values you will display in the chart. The options specify how you want to customize the look of the graph and the element is the element on your page which will house the graph.
### Data 
`'[ {'value': [1,2,3],'color' :['red','yellow','green'],'labelColor' :['black'], 'barLabel': 'Tim' }' ]`
The bars in the graph are defined by an array of object called data. the object consists of a `value` key which refers to an array of values which correspond each stacked bar. The `color` key correspond to the color of each bar in the stack and likewise, the `labelColor` corresponds to the color of the label on each bar. If no color is passed for a given label (leaving it 'undefined') that label will not be shown. if a bar color is left 'undefined', it will be assigned a random color. The 'barLabel' is the string that will be added at along the Y-axis next to the bar.

### Options
`             {
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
                }`

### Element
    `$("#graph")`
The element passed need to be a JQuery element, usually a `<div>` where you want to put the bar chart on the page.

## Known Issues
* if the length of the bars are larger than the max value of the graph, it can break the graph

## Upcomming Feature
* teleportation

## References
* [JQuery](https://jquery.com/)

