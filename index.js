let theBeatlesPlay = (musicians, instruments) => {
  let band = [];

  for (let i = 0; i < musicians.length; i++) {
    band.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return band;
}

let johnLennonFacts = (facts) => {
  let i = 0;

  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }

  return facts;
}

let iLoveTheBeatles = (num) => {
  let beatleLove = [];
  do {
    beatleLove.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return beatleLove;
}
