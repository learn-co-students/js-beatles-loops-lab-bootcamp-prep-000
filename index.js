function theBeatlesPlay (musicians, instruments) {
  let role = [];
  for(let i = 0; i<4; i++) {
    role.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return role;
}











function johnLennonFacts (facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
}






function iLoveTheBeatles (n) {
  let love =[];
  do {
    love.push(`I love the Beatles!`);
    n++;
  } while (n<15)
  return love;
}