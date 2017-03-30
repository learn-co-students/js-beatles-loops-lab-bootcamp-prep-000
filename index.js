function theBeatlesPlay(musicians, instruments) {
  let notepad = []
  for (let i = 0 ; i < musicians.length ; i++) {
    notepad.push(musicians[i] + " plays " + instruments[i]);
  }
  return notepad;
}

function johnLennonFacts(list) {
  let listMod = list;
  let ticker = listMod.length;
  while (ticker > 0) {
    listMod[ticker - 1] = listMod[ticker - 1] + "!!!";
    ticker--;
  }
  return listMod;
}

function iLoveTheBeatles(n) {
  let ticker = n
  let ranting = []
  do {
    ranting.push("I love the Beatles!");
    ticker++;
  } while (ticker < 15);
  return ranting;
}
