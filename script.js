//Stores all the numbers and math signs shows in the display screen.
var calcArray = [];

//Pushes numbers to the display screen
var buttonsNumbers = {
  buttonNums: function(val){
    var displayScreen = document.getElementById('displayFrame');
    displayScreen.innerHTML += val;
  }
};

//Pushes math signs to the display screen.
var buttonsOperators = {
   buttonOperatorTracker: function(sign){
     var display = document.getElementById('displayFrame');
     var x = display.innerHTML;
     var indexTrack = 0;
     var valFlag = 0;
     
     //Loop through x to get the index of the last sign used.
    for(i = 0; i < x.length; i++){
      if(x[i] == '+' || x[i] == '*' || x[i] == '/' || x[i] == '-'){
        indexTrack = i;
        valFlag = 1;
      }
    }
     
    //If signs exists, then extract the number that is displayed after the sign and push it to array
    //Push the sign to array after
    if(valFlag == 1){
      calcArray.push(x.substring(indexTrack+1,x.length))
      display.innerHTML += sign;
      calcArray.push(sign);
    }
    //Push the number to array if no sign exists, then push the sign
    else{
      calcArray.push(x);
      display.innerHTML += sign;
      calcArray.push(sign);
    }
   },
  
  buttonPlus: function(){
     this.buttonOperatorTracker('+');
  },
   buttonMultiply: function(){
     this.buttonOperatorTracker('*');
   },
  buttonDivide: function(){
    this.buttonOperatorTracker('/');
  },
  buttonMinus: function(){
    this.buttonOperatorTracker('-');
  },
  
   buttonEqual: function(){
          
    var displayEqual = document.getElementById('displayFrame');
     
    var displayFrame = displayEqual.innerHTML;
    var indexTracker = 0;
    var valFlag2 = 0;
     
     //Loop through displayFrame to get the index of the last sign used.
    for(i = 0; i < displayFrame.length; i++){
      if(displayFrame[i] == '+' || displayFrame[i] == '*' || displayFrame[i] == '/' || displayFrame[i] == '-'){
        indexTracker = i;
        valFlag2 = 1;
      }
    }
    
     //Push the last number after the last sign that was missing in the array.
    if(valFlag2 == '1'){
      calcArray.push(displayFrame.substring(indexTracker+1, displayFrame.length))
    }
     
     //Executes operators in chronological order. Currently does not take BEDMAS into consideration.
     result = 0;
     for(j = 0; j < calcArray.length-1; j++){
       
       console.log("0",calcArray[0]);
       console.log("1",calcArray[1]);
       console.log("2",calcArray[2]);
       console.log("3",calcArray[3]);
       console.log("4",calcArray[4]);
     
       if(calcArray[j] == '+'){
         var result = parseInt(calcArray[j-1]) + parseInt(calcArray[j+1]);
         calcArray[j+1] = result;
        }
       
       else if(calcArray[j] == '-'){
         var result = parseInt(calcArray[j-1]) - parseInt(calcArray[j+1]);
         calcArray[j+1] = result;
        }
       
       else if(calcArray[j] == '*'){
         var result = parseInt(calcArray[j-1]) * parseInt(calcArray[j+1]);
         calcArray[j+1] = result;
        }
       
       else if(calcArray[j] == '/'){
         var result = parseInt(calcArray[j-1]) / parseInt(calcArray[j+1]);
         calcArray[j+1] = result;
        }
       console.log("0",calcArray[0]);
       console.log("1",calcArray[1]);
       console.log("2",calcArray[2]);
       console.log("3",calcArray[3]);
       console.log("4",calcArray[4]);
  }
     //console.log(result);
     displayEqual.innerHTML = result;
  },
  
   buttonClear: function(){
     var display = document.getElementById('displayFrame');
     display.innerHTML = '';
     calcArray = [];
     //console.log(calcArray.length);
  },
};

var buttonsExecute = {
  eventListenerFunction(idName, number){
    var execute = document.getElementById(idName);
    execute.addEventListener('click', function(){
      buttonsNumbers.buttonNums(number);
    })
  },
  
  setUpEventListeners: function(){
    this.eventListenerFunction('zero', 0);
    this.eventListenerFunction('one', 1);
    this.eventListenerFunction('two', 2);
    this.eventListenerFunction('three', 3);
    this.eventListenerFunction('four', 4);
    this.eventListenerFunction('five', 5);
    this.eventListenerFunction('six', 6);
    this.eventListenerFunction('seven', 7);
    this.eventListenerFunction('eight', 8);
    this.eventListenerFunction('nine', 9);
    
    var executePlus = document.getElementById('plus');
    executePlus.addEventListener('click', function(){
      buttonsOperators.buttonPlus();
    });
    
    var executeMultiply = document.getElementById('multiply');
    executeMultiply.addEventListener('click', function(){
      buttonsOperators.buttonMultiply();
    });
    
    var executeDivide = document.getElementById('divide');
    executeDivide.addEventListener('click', function(){
      buttonsOperators.buttonDivide();
    });
    
    var executeMinus = document.getElementById('minus');
    executeMinus.addEventListener('click', function(){
      buttonsOperators.buttonMinus();
    });
    
    var executeEqual = document.getElementById('equal');
    executeEqual.addEventListener('click', function(){
      buttonsOperators.buttonEqual();
    });
    
    var executeClear = document.getElementById('clear');
    executeClear.addEventListener('click', function(){
      buttonsOperators.buttonClear();
    });
  }
};
  
buttonsExecute.setUpEventListeners();
