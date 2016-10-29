function theBeatlesPlay(musicians, instruments){                            //function that passes two arguments that are arrays
  var array = [];                                                           //create an empty array and store it as a variable
  for (var i = 0; i < musicians.length; i++){                               //start at the beginning of the array and move along the array to each index up to the length of the array
    array.push(musicians[i] + " plays " + instruments[i]);                  //add a string to array that incorporates the contents of corresponding index in musicians and instruments
  }
  return array;                                                             //return the contents of array
}

function johnLennonFacts(facts){                                            //function that passes an array as an argument
  var n = 0;                                                                //define a counter variable
  while (n < facts.length){                                                 //perform a function while the counter is less than the number of indexes in facts
    facts[n] = (facts[n] + "!!!");                                          //add !!! (at the end of the string) to the contents of of each corresponding index in facts
    n++;                                                                    //increase counter variable by 1
  }
  return facts;                                                             //return the contents of facts
}

function iLoveTheBeatles(number){                                           //create a function that passes a number as an argument
  var box = [];                                                             //create a variable (box) that stores an empty array
  do{                                                                       //do-while loop that adds a string to the end of box and adds 1 to the number argument
    box.push("I love the Beatles!");
    number++;
  } while (number < 15);                                                    //only perform the body of do when number is less than 15
  return box;                                                               //return the contents of box
}
