const drawBarChart = function(data, option, element){  
  
  const buildHorzRect= function(w, h){
    return { 'background': 'green',
             'color': 'rgb(255,255,255)',
             'margin-top': '5px',
             'margin-left': '10px',             
             'height': h,
             'width': w,              
             'text-align': 'right',
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
  base.css({'width' : option.width, 
         'height' : option.height,
        'background': 'rgb(210,255,255)'
        });

  let elem1 = $('<div>' + 1 + '</div>');
  let elem2 = $('<div>' + 2 + '</div>');

  elem1.css({'display': 'inline-block', 'background': 'orange', 'width' : '5px', 'height': '30px', 'margin-right' : '45px'});
  elem2.css({'display': 'inline-block', 'background': 'red', 'width' : '5px', 'height': '30px', 'margin-right' : '45px'});

  for(let i=0; i<data.length; i++){
    let div = $("<div>" + data[i] + "</div>");
    div.css(buildHorzRect(data[i] * 25, (option.height - data.length*5)/data.length));
    base.append(div);
  }
  element.append(base);
  element.append(elem1);
  element.append(elem2);

};