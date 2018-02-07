function theBeatlesPlay (musicians, instruments) {
  let role = [];
  for(let i = 0; i<4; i++) {
    role.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return role;
}

/*function johnLennonFacts (facts) {
  while (facts.length < 5) {
    let exclaim = "!!!";
    console.log(facts + exclaim);
  }
  return facts;
}*/

function iLoveTheBeatles (n) {
  let love =[];
  do {
    love.push(`I love the Beatles!`);
    n++;
  } while (n<15)
  return love;
}