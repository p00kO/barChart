const drawBarChart = function(data, option, element){  

  const yAxisSpacing = 20;  
  const xAxisTicksHeight = 10;
  const xAxisTextHeight = 20;
  const xAxisTitleHeight = 25;
  const tickLineWidth = 2;  
  const tickLineLength = 5;
  const axisLineThickness = 2;  
// Left Y labels:
  let maxWordLength = 0;  
  for(let i=0; i<data.length; i++){
    dum =measureText(data[i]['barLabel'], option.graphFont);
    if(dum > maxWordLength){
      maxWordLength = dum;
    }    
  }    
  const titleOffsety = option.titleFont.size; 
  const xAxisOffsety = (xAxisTicksHeight + xAxisTextHeight + xAxisTitleHeight);
  const graphHeight = option.height - titleOffsety - xAxisOffsety;
  let stepSize = Math.floor(option.xMax/option.xsteps);
  let stepWidth = Math.floor((option.width - maxWordLength - yAxisSpacing)/option.xsteps);   
  // Array for CSS repearing-linear-gradient used to buld ticks:  
  const ticks = [(stepWidth-tickLineWidth) + "px",  
                 Math.floor(stepWidth/2) + "px", 
                 stepWidth+ "px"];   
  // Straight from StackOverflow --> Estimates the px width of a string based on
  // statistical measurments of the width of each asci char.
  function measureText(str, fontSize = 10) {
    const widths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2796875,0.2765625,0.3546875,0.5546875,0.5546875,0.8890625,0.665625,0.190625,0.3328125,0.3328125,0.3890625,0.5828125,0.2765625,0.3328125,0.2765625,0.3015625,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.2765625,0.2765625,0.584375,0.5828125,0.584375,0.5546875,1.0140625,0.665625,0.665625,0.721875,0.721875,0.665625,0.609375,0.7765625,0.721875,0.2765625,0.5,0.665625,0.5546875,0.8328125,0.721875,0.7765625,0.665625,0.7765625,0.721875,0.665625,0.609375,0.721875,0.665625,0.94375,0.665625,0.665625,0.609375,0.2765625,0.3546875,0.2765625,0.4765625,0.5546875,0.3328125,0.5546875,0.5546875,0.5,0.5546875,0.5546875,0.2765625,0.5546875,0.5546875,0.221875,0.240625,0.5,0.221875,0.8328125,0.5546875,0.5546875,0.5546875,0.5546875,0.3328125,0.5,0.2765625,0.5546875,0.5,0.721875,0.5,0.5,0.5,0.3546875,0.259375,0.353125,0.5890625]
    const avg = 0.5279276315789471
    return Math.floor(str
      .split('')
      .map(c => c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg)
      .reduce((cur, acc) => acc + cur) * fontSize);
  };

  const buildElement = function(w,h, val = ''){
    let elem = $('<div>' +val+ '</div>');
    elem.css({'width' : w,
              'height' : h
            });
    return elem;
  };

  const buildTitle = function(){
    // title box:
    let top = $('<div>' + option.title + '</div>');
    top.css({ 
      'text-align' : 'center',        
      'font-size' : option.titleFont.size,
      'font-weight' : 'bold'
    });
    // click for the title box:
    top.on('click', function(){
      let newTitle = prompt("Please enter new title: ", option.title);      
      if(newTitle != null) option.title = newTitle;      
      top.text(option.title);    
    });
    return top;
  };

  const buildXaxis = function(){  
    
    const leftSideOffset = yAxisSpacing + maxWordLength;
    
    // x-axis line:
    let elem1 = buildElement(option.width - leftSideOffset, axisLineThickness)
                  .css({'background' : 'black',
                        'margin-left' : leftSideOffset
                       });
    // x-axis ticks:                  
    let elem2 = buildElement(option.width - leftSideOffset, tickLineLength)
                  .css({'color': 'black',
                        'margin-left' : leftSideOffset,
                        'background': "repeating-linear-gradient( to right, #ffffff, #ffffff " + ticks[0] + ",#000000 " + ticks[1] + ",#000000 " + ticks[2] + ")"
                      });    
    // x-axis title:
    let elem3 = buildElement(option.width - leftSideOffset, xAxisTitleHeight , option.xAxisTitle)
                  .css({'margin-top' : tickLineLength,                                    
                        'text-align' : 'center',
                        'margin-left' : leftSideOffset,
                        'font-size' : option.graphFont
                      });    
    // x-axis numbers:
    let elem4 = buildElement(option.width - leftSideOffset, xAxisTextHeight)
    elem4.css({'margin-top' : axisLineThickness,
               'margin-left' : leftSideOffset - (option.graphFont / 2)
              });    
    for(let i=0; i<option.xsteps; i++){
      let char = stepSize*i;
      let div = buildElement(stepWidth, xAxisTextHeight, char)      
                .css({ 'float':'left',                
                       'text-align' : 'left',
                       'font-size' : option.graphFont      
                    });
      elem4.append(div);
    };
    let xAxis = $('<div></div>');
    xAxis.append(elem1);
    xAxis.append(elem2);
    xAxis.append(elem4);
    xAxis.append(elem3);

    return xAxis;
  };

  const buildYaxis = function(){
  // y-axis line
    let elem3 = buildElement(axisLineThickness, graphHeight)
                .css({'float':'left',
                      'background' : 'black', 
                      'margin-left' : yAxisSpacing
                     });
  //labels for y-axis
    let elem4 = buildElement(maxWordLength,graphHeight)
                .css({'float':'left',                         
                    });
  // labels of the each y bar element
    let h = Math.floor(graphHeight/data.length)
    for(let i=0; i<data.length; i++){
      let div = buildElement(measureText(data[i]['barLabel'], option.graphFont),     
                      h , data[i]['barLabel'] )
                    .css({'text-align' : 'center',
                          'line-height': h + 'px',
                          'vertical-align': 'middle',
                          'color' : option.yLableColor,
                          'font-size' : option.graphFont
                        });
      elem4.append(div);    
    }
    let yAxis = $('<div></div>');
    yAxis.append(elem4);
    yAxis.append(elem3);
    return yAxis;
  }
  
  const buildGraph = function(){
        
    const leftSideOffset = yAxisSpacing + maxWordLength;
    // set background lines:
    let graph = buildElement( option.width - leftSideOffset, graphHeight)
                .css({'margin-left' : leftSideOffset,
                      'background': "repeating-linear-gradient( to right, #ffffff, #ffffff " + ticks[0] + "," + option.backgroundBarColor + " " + ticks[1] + "," + option.backgroundBarColor + " " + ticks[2] + ")"
              });
    // building the horizontal graph bars
    let h = Math.floor((graphHeight - data.length*option.barSpacing)/data.length);    
    for(let i=0; i<data.length*3; i++){
      let div = $('<div></div>');
      if(i%3 === 1){                
        let j = Math.floor(i/3);
        let sum = 0;
        data[j]['value'].forEach(function(item){
          sum += item;
        });
        let bar = buildElement(Math.floor(sum * stepWidth/stepSize) ,h)
                    .css({'display':'flex'});
        let offset = 0;
        data[j]['value'].forEach(function(item, index){
          let partdiv = buildElement(Math.floor(item * stepWidth/stepSize), h, item )
                      .css({'background': data[j]['color'][index],
                             'color': data[j]['labelColor'][index],
                             'text-align': option.barLabelPosition,
                             'vertical-align': 'middle',                    
                             'line-height': h + 'px',
                             'font-size' : option.graphFont                                                     
                        });
          bar.append(partdiv);
        });        
        div.append(bar);
      }else {
        // vertical bar spacing:        
         div = buildElement(option.width - leftSideOffset, option.barSpacing/2);    
      }           
      graph.append(div);
    };
    return graph;
  };
  // Global div:
  element.css({
          'width'  : option.width,
          'height' : option.height          
        });
  let base = $('<div></<div>');
  base.append(buildYaxis()); 
  base.append( 
        buildGraph()        
      );
  element.append(buildTitle());
  element.append(base);
  element.append(buildXaxis());

};
