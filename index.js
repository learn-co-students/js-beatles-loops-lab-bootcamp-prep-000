'use strict'
let musicians = ['John Lenon', 'Ringo Starr','Stuart Sutcliffe','Paul McCartney','George Harrison','Pete Best'];
let instruments = ['Guitar','Drums','Bass','Bass Guitar','Lead guitar','Drums'];
let message = [];
let i;
function theBeatlesPlay(musicians, instruments){

  for(i = 0; i < musicians.length;i++){
      message.push(musicians[i] + ' plays ' + instruments[i]);
    }
    return message;
  }

  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
function johnLennonFacts(facts){

  var newFacts = [];
  var n = 0;
  while (n < facts.length) {
      newFacts.push(facts[n] +"!!!");
      n++;
    }
  return newFacts;
  }

  function iLoveTheBeatles(num) {
      var iLoveBeatles = [];
      do {
          iLoveBeatles.push('I love the Beatles!');
          num++;
      } while (num < 15);
      return iLoveBeatles;
  }
