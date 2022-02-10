# barChart
## About
This API provides developers with an easy way to add horizontal bar charts to webpages served to their clients. It allows you to build a single or stacked horizontal bar charts. Here's an example of a single bar chart:

![Bar chart Example Image](/barExample.png)

You can find an interactive examples [here](https://p00ko.github.io/barChart/).
## API Features
* Easily set desired width and height in pixels
* Dynamic title allows your users to change it on the webpage
* Title has customizable font and text color
* X-axis title can be easily set with your chosen color and font size. Axis ticks has customizable spacing and max value
* Y-axis shows the bar labels with customizable font size and color
* Bar color and bar spacing is set by the developer. Each bar can have either have a label or not and the positioned as needed
* The multi-valued bar chart supports bar and label color customization

## How to use
To implement the API, you'll need to include [JQuery](https://jquery.com/). Additionally, you will need to include a path to the barGraph script in your html source:
```
<script src="barGraph.js"></script>
```
The function you call to generate a graph has 3 parameters:
```
drawBarChart(data, options, element)
```
The `data` is the object contains values that define the bars in the chart. The `options` specify how you want to customize the look of the graph and the `element` is the element on your page which will house the graph.

### Data 
```
'[ {'value': [1,2,3],'color' :['red','yellow','green'],'labelColor' :['black'], 'barLabel': 'Tim' }' ]
```
The bars in the graph are defined by an array of object called data. The object consists of a `value` key which refers to an array of values defining each stacked bar. The `color` key correspond to the color of each bar in the stack and likewise, the `labelColor` corresponds to the color of the label on each bar. If no color is passed for a given label (leaving it 'undefined') that label will not be shown. If a bar color is left 'undefined', it will be assigned a random color. The 'barLabel' is the string that will be added along the Y-axis next to the bar stack. 

### Options
```
{ width: 500,                                             ( px )
height: 300,                                              ( px )
barSpacing: 4,                                            ( px )
graphFont: 16,                                            ( px )
barLabelPosition: 'center',                               ( bottom, center, top)
yLableColor: 'green',                                     ( any CSS rgb value )
backgroundBarColor: 'rgb(100,255,255)',                   ( any CSS rgb value )
titleFont: {size: 24, color: "black"},                    ( px // any CSS rgb value )
title: "Saying Thanks!",                                  ( String )
xAxisTitle: 'Average thank you\'s per day',               ( String )
xAxisTitleFont: {size: 24, color: "black"},               ( px // any CSS rgb value )
xMax: 60,                                                 ( max value in bar units )
xsteps: 6 }                                               ( x-axis tick spacing )
```
The API allows you to set graph `option` to get your graph looking just the way you want on your page. The `width` and `height` specify the size of the graph in pixels (px) that will be passed to the `element` you specified. The `barSpacing` is the distance between bars in px. The graph font specifies the size of the fonts of all text on the graph such as labels, y-axis labels and x-axis numbers. The `barLabelPosition` sets the position of the label on the bar. The `yLableColor` sets the color of the barLabels strings, while `backgroundBarColor` set the color of the repeating lines on the background of the graph. The `titleFont` and `title` specify the look and content of the graph title. The `xAxisTitle`, `xAxisTitleFont`, `xMax` and `xsteps` define the x-axis title look, and length and tick spacing.

### Element
```
$("#graph")
``` 
The element passed needs to be a JQuery element, usually a `<div>` where you want to put the bar chart on the page.

## Known Issues
* If the length of the bars are larger than the xMax value of the graph, it can break the graph
* All strings are assumed to occupy only 1 line. Multi-line text may lead to unexpected behavior.
* Setting width/height (less 150px) to very small values can break graph.
* Bars may be slightly shifted by 1 or 2 pixels, causing a slight misalignment with x-axis ticks. This is due to integer rounding.

## Upcoming Feature
* Additional color customization
* Interactive bars such animations on hover and pop-up text on click
* Dynamic x-axis and y-axis scaling

## References
* [JQuery](https://jquery.com/)
