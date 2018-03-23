var musicians = ["Sting", "Bon Jovi", "Cyndi Lauper", "Bananarama"];
var instruments = ["piano", "guitar", "cymbals", "like an Egyptian"];

function theBeatlesPlay(musicians, instruments) {
  var artistsArray = new Array();
  var musicianPlays = " plays "

  for (let i = 0; i < musicians.length; i++) {
    artistsArray.push(musicians[i] + musicianPlays + instruments[i]);
  }
  return artistsArray;
}

const facts = ["He was less talented than other members of the Beatles", "He had unfortunate taste in sideburns", "His conduct towards women, especially when younger, was deeply unfortunate", "Imagine is perhaps one of the most bathetic songs penned in modern history, and the competition is fierce"]

function johnLennonFacts(facts) {
    var factsExclamation = new Array();
    
    function factsCount() {
      let i = 0; i <facts.length; i++
    }
    while (factsCount()) {
      factsExclamation.push(facts[i] + "!!!");
    }
    return factsExclamation;
}
