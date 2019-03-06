'use strict';
// add solution here

function theBeatlesPlay(musicians,instruments) {
  let new_array = []
  
  for(let i = 0; i < musicians.length; i++) {
    new_array.push(musicians[i] +" plays " + instruments[i]);
  }
  
  return new_array;
}

function johnLennonFacts(facts) {
  let new_facts = []
  
  let i = 0
  
  while( i < facts.length) {
    new_facts.push(facts[i] + "!!!")
    
    i += 1
  }
  
  return new_facts
  
}

function iLoveTheBeatles(num) {
  let new_nums = []
  
  
  do {
    new_nums.push("I love the Beatles!")
    num++
  } while (num < 15)
  
  return new_nums
}