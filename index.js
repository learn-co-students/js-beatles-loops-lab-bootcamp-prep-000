"use strict";

function theBeatlesPlay (musicians, instruments) {
  const temp = [];
  for (let i = 0; i < musicians.length; i++) {
    temp.push(musicians[i] + " plays " + instruments[i]);
  }
  return temp;
}

function johnLennonFacts (facts) {
  const jlemon = [];
  var i = 0;
  while (i < facts.length) {
    jlemon[i] = facts[i] + "!!!";
    i++;
  }
  return jlemon;
}

function iLoveTheBeatles (num) {
  const heartBeat = [];
  do {
    heartBeat.push("I love the Beatles!");
    num++;
  }  while (num < 15);
  return heartBeat;
}
