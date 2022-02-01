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

  const buildHorzRect= function(w, h){
    return { 'background': 'green',             
             'color': 'rgb(255,255,255)',             
             'margin-top': '5px',
             'height': h,
             'width': w,
             'text-align': 'bottom',
             'vertical-align': 'middle',
             'line-height': h + 'px'
            };
  }

  const buildXaxis = function(){};
 
  // 1) Setup a div of size passed by user

  // Horizontal Element scaling:
  let max = 0;  
  for(let i=0; i<data.length; i++){
    dum =measureText(data[i]['label'], 16);
    if(dum > max){
      max = dum;
    }    
  }

  let base = $('<div></<div>');
  let graph = $('<div></div>');

  // Vertical element scaling:
  const titleOffsety = option.font.size; // size of title...
  const xAxisOffsety = (10+20+25); // ticks + text + title
  const graphHeight = option.height - titleOffsety - xAxisOffsety;

  // x-axis ticks:
  let k = Math.floor((option.width - (20 + max))/option.xsteps);
  let a = (k-2) + "px";
  let b = Math.floor(k/2) + "px";
  let c = k + "px";
  let stepSize = Math.floor(option.xMax/option.xsteps);
  let stepWidth = Math.floor((option.width - max - 20)/option.xsteps); 
// Main graph with repeating lines in background:
  graph.css({'width' : option.width - (20 + max), 
             'margin-left' : (20 + max),
             'height' : graphHeight,             
             'background': "repeating-linear-gradient( to right, #ffffff, #ffffff " + a + ",rgb(210,255,255) " + b + ",rgb(210,255,255) " + c + ")"
        });

// x-axis line  
  let elem1 = $('<div></div>');
  
  elem1.css({ 'background' : 'black',       
              'width': option.width - (20+max),
              'height' : '2px'              
            });
            

  let elem2 = $('<div></div>');
  elem2.css({ 'color': 'black',
              'width': option.width - (20+max),
              'height' : '5px',              
              'background': "repeating-linear-gradient( to right, #ffffff, #ffffff " + a + ",#000000 " + b + ",#000000 " + c+ ")"
            });

  // y-axis line
  let elem3 = $('<div></div>');
  elem3.css({'float':'left',
              'background' : 'black', 
              'width' : '2px',
              'height' : graphHeight,
              'margin-left' : '20px'
            });

  // element to hold labels for y-axis
  let elem4 = $('<div></div>');
  elem4.css({  'float':'left',
               'width' : max,
               'height': graphHeight
              });

  // labels of the each y bar element
  for(let i=0; i<data.length; i++){
    let div = $("<div>" + data[i]['label'] + "</div>");
    div.css({'margin-top': '5px',
            'width': measureText(data[i]['label'], 16),
            'text-align' : 'center',
            'font-size' : '16px',
            'height' : (graphHeight - data.length*5)/data.length
            });
    elem4.append(div);
  }

  // building the horizontal graph bars
  for(let i=0; i<data.length; i++){
    let div = $("<div>" + data[i]['value'] + "</div>");
    div.css(buildHorzRect(Math.floor(data[i]['value']* stepWidth/stepSize), (graphHeight - data.length*5)/data.length));
    graph.append(div);
  }

  // x-axis title:
  let elem6 = $('<div>' + option.xAxisTitle + '</div>');
  elem6.css({ 'width' : option.width-'20px',
              'margin-top' : '5px',
              'margin-left' : '20px',
              'height' : '20px',
              'text-align' : 'center'              
            });
  // element to the numbers for the axis:
  let elem7 = $('<div></div>');
  elem7.css({'width' : option.width-(max+20),
             'margin-left' : (max+20)-stepWidth/2,
             'height' : '20px',
             'margin-top' : '2px'
            });

  // Axis numbers added to divs for positioning:

  for(let i=0; i<option.xsteps; i++){
    let char = stepSize*i;
    let div = $("<div>" + char + "</div>");
    div.css({
      'float':'left',
      'width' : stepWidth,
      'height' : '20px',
      'text-align' : 'center',      
    });
    elem7.append(div);
  };

  // title box:
  let top = $('<div>' + option.title + '</div>');
  top.css({ 
    'text-align' : 'center',        
    'font-size' : option.font.size,
    'font-weight' : 'bold'
  });
  // click for the title box:
  top.on('click', function(){
    let newTitle = prompt("Please enter new title: ", option.title);
    option.title = newTitle;
    top.text(newTitle);
    
  });

  // Global div:
  element.css({
          'width'  : option.width,
          'height' : option.height,
          //'border-style' : 'solid'
  });

// Text width: $('#text').width();
// Adding elements (order is important
  graph.append(elem1);  
  graph.append(elem2);
  // base.append(elem5);
  base.append(elem4);
  base.append(elem3);
  base.append(graph);
  element.append(top);
  element.append(base);
  element.append(elem7);
  element.append(elem6);


  
};
