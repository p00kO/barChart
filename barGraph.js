const drawBarChart = function(data, option, element){  
  
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

  const setGraphBackground = function(){
  };
  
  const setGraphAxis = function(){  
  };
  
  const setBars = function(){    
  };
  
  // 1) Setup a div of size passed by user




  let base = $('<div></<div>');
  let graph = $('<div></div>');

  const titleOffsety = option.font.size; // size of title...
  const xAxisOffsety = (10+20+25); // ticks + text + title

  const graphHeight = option.height - titleOffsety - xAxisOffsety;


  graph.css({'width' : option.width - '80px', 
             'margin-left' : '80px',
             'height' : graphHeight,             
             'background': "repeating-linear-gradient( to right, #ffffff, #ffffff 48px,rgb(210,255,255) 25px,rgb(210,255,255) 50px)"
        });

  
  let elem1 = $('<div></div>');
  elem1.css({ 'background' : 'black',       
              'width': option.width -'20px',               
              'height' : '2px'              
            });

  let elem2 = $('<div></div>');
  elem2.css({ 'color': 'black',
              'width': option.width - '20px',
              'height' : '5px',              
              'background': "repeating-linear-gradient( to right, #ffffff, #ffffff 48px,#000000 25px,#000000 50px)"
            });
  
  let elem3 = $('<div></div>');
  elem3.css({'float':'left',
              'background' : 'black', 
              'width' : '2px',
              'height' : graphHeight,
              'margin-left' : '20px'
            });
  
  let elem4 = $('<div></div>');
  elem4.css({  'float':'left',
               'width' : '60px',
               'height': graphHeight
              });

  for(let i=0; i<data.length; i++){
    let div = $("<div>" + 'jammy' + "</div>");
    div.css({'margin-top': '5px',
            'width': '60px',
            'text-align' : 'center',
            'height' : (graphHeight - data.length*5)/data.length
            });
    elem4.append(div);
  }


  for(let i=0; i<data.length; i++){
    let div = $("<div>" + data[i] + "</div>");
    div.css(buildHorzRect(data[i] * 10, (graphHeight - data.length*5)/data.length));
    graph.append(div);
  }


  let elem6 = $('<div>' + option.xAxisTitle + '</div>');
  elem6.css({ 'width' : option.width-'20px',
              'margin-top' : '5px',
              'margin-left' : '20px',
              'height' : '20px',
              'text-align' : 'center'              
            });
  let elem7 = $('<div></div>');
  elem7.css({'width' : option.width-'55px',
             'margin-left' : '55px',
             'height' : '20px',
             'margin-top' : '2px'
            });


  for(let i=0; i<10; i++){
    let char = 5*i;
    let div = $("<div>" + char + "</div>");
    div.css({
      'float':'left',
      'width' : '50px',
      'height' : '20px',
      'text-align' : 'center',      
    });
    elem7.append(div);
  }

  let top = $('<div>' + option.title + '</div>');
  top.css({ 
    'text-align' : 'center',        
    'font-size' : option.font.size,
    'font-weight' : 'bold'
  });
  top.on('click', function(){
    let newTitle = prompt("Please enter new title: ", option.title);
    option.title = newTitle;
    top.text(newTitle);
    
  });

  element.css({
          'width'  : option.width,
          'height' : option.height,
          'border-style' : 'solid'
  });

// Text width: $('#text').width();

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
