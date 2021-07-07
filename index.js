function theBeatlesPlay(arraymus,arrayinst){
    const music = [];
    
    for (let index = 0, len = arraymus.length; index < len; index++) {
      music.push(`${arraymus[index]} plays ${arrayinst[index]}`);
    }
    
  return music;
}
    
    
function johnLennonFacts(lennon){
  const shoutedFacts = [];
  
  let index = 0;
  
  while (index < lennon.length){
    shoutedFacts.push(`${lennon[index]}!!!`)  
    index++
  }
  return shoutedFacts
}

function iLoveTheBeatles(n) {
 var proto = [];
    do { proto.push("I love the Beatles!") 
    n++
    } while (n < 15)
    
  return proto
  
}

