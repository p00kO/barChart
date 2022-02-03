const drawBarChart = function(data, option, element){  
  
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

  const buildXaxis = function(a, b, c, max, stepWidth){  
    // x-axis line:
    let elem1 = buildElement(option.width - (20+max), 2)
                  .css({'background' : 'black',
                        'margin-left' : max + 20
                       });
    // x-axis ticks:                  
    let elem2 = buildElement(option.width - (20+max), 5)
                  .css({'color': 'black',
                        'margin-left' : max + 20,
                        'background': "repeating-linear-gradient( to right, #ffffff, #ffffff " + a + ",#000000 " + b + ",#000000 " + c+ ")"
                      });    
    // x-axis title:
    let elem3 = buildElement(option.width- (20+max), 20 , option.xAxisTitle)
                  .css({'margin-top' : '5px',                                    
                        'text-align' : 'center',
                        'margin-left' : max + 20,
                        'font-size' : option.graphFont
                      });    
    // x-axis numbers:
    let elem4 = buildElement(option.width-(max+20), 20)
    elem4.css({'margin-top' : '2px',
               'margin-left' : max + 20 - (option.graphFont / 2)
              });    
    for(let i=0; i<option.xsteps; i++){
      let char = stepSize*i;
      let div = buildElement(stepWidth, 20, char)      
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

  const buildYaxis = function(graphHeight, max){
  // y-axis line
    let elem3 = buildElement(2, graphHeight)
                .css({'float':'left',
                      'background' : 'black', 
                      'margin-left' : '20px'
                     });
  //labels for y-axis
    let elem4 = buildElement(max,graphHeight)
                .css({'float':'left',                         
                    });
  // labels of the each y bar element
    let h = Math.floor(graphHeight/data.length)
    for(let i=0; i<data.length; i++){
      let div = buildElement(measureText(data[i]['label'], option.graphFont),     
                      h , 
                       data[i]['label'] )
                    .css({'text-align' : 'center',
                          'line-height': h + 'px',
                          'vertical-align': 'middle',
                          'font-size' : option.graphFont
                        });
      elem4.append(div);    
    }
    let yAxis = $('<div></div>');
    yAxis.append(elem4);
    yAxis.append(elem3);
    return yAxis;
  }
  
  const buildGraph = function(max, graphHeight, a, b, c, stepWidth, stepSize, graphHeight){
    // set background lines:
    let graph = buildElement( option.width - (20 + max), graphHeight)
                .css({'margin-left' : (20 + max),
                      'background': "repeating-linear-gradient( to right, #ffffff, #ffffff " + a + "," + option.backgroundBarColor + " " + b + "," + option.backgroundBarColor + " " + c + ")"
              });

    // building the horizontal graph bars
    let h = Math.floor((graphHeight - data.length*option.barSpacing)/data.length);    
    for(let i=0; i<data.length*3; i++){
      let div = $('<div></div>');
      if(i%3 === 1){                
        let j = Math.floor(i/3);
        div = buildElement(Math.floor(data[j]['value']* stepWidth/stepSize),
                             h, data[j]['value'] )
                        .css({'background': option.barColor,
                             'color': option.barLabelColor,
                             'text-align': option.barLabelPosition,
                             'vertical-align': 'middle',
                             'line-height': h + 'px',
                             'font-size' : option.graphFont
                            });
        
      }else {        
        div = buildElement(option.width - (20 + max),
        option.barSpacing/2);    
      }     
      
      graph.append(div);
    };
    return graph;
  };

  // Horizontal Element scaling:
  let max = 0;  
  for(let i=0; i<data.length; i++){
    dum =measureText(data[i]['label'], option.graphFont);
    if(dum > max){
      max = dum;
    }    
  }
  
  // Vertical element scaling:
  const titleOffsety = option.titleFont.size; // size of title...
  const xAxisOffsety = (10+20+25); // ticks + text + title
  const graphHeight = option.height - titleOffsety - xAxisOffsety;
  let stepSize = Math.floor(option.xMax/option.xsteps);
  let stepWidth = Math.floor((option.width - max - 20)/option.xsteps); 

  let k = Math.floor((option.width - (20 + max))/option.xsteps);
  let a = (k-2) + "px";
  let b = Math.floor(k/2) + "px";
  let c = k + "px";

  // Global div:
  element.css({
          'width'  : option.width,
          'height' : option.height          
  });
  let base = $('<div></<div>');
  base.append(buildYaxis(graphHeight, max)); 
  base.append( 
        buildGraph(max, graphHeight, a, b, c, stepWidth, stepSize, graphHeight)        
      );
  element.append(buildTitle());
  element.append(base);
  element.append(buildXaxis(a,b,c,max,stepWidth));

};
