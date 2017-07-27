function theBeatlesPlay(musicians, instruments) {
  let tmpArr = []; // const arr = []
  for (let i=0; i < musicians.length; i++) { // let i = 0, l = musicians.length; i < l
    let str = musicians[i] + " plays " + instruments[i]; // `${mus[i]} plays ${ins[i]}`
    tmpArr.push(str);
  }
  return tmpArr;
}

function johnLennonFacts(facts) {
  let n = 0 // const shoutedFacts = [] << make copy to fill
  while (n < facts.length) {
    facts[n] = facts[n] + "!!!"
    n++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  let arr = []; // const arr = [] ===> let can be updated, const cannot => http://wesbos.com/let-vs-const/, i.e. properties can, but assignment cannot
  do {
    arr.push("I love the Beatles!")
    n++;
  } while(n < 15);
  return arr;
}
