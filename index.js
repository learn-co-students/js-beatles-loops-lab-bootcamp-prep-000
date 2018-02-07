function theBeatlesPlay (musicians, instruments) {
  let role = [];
  for(let i = 0; i<4; i++) {
    role.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return role;
}

function johnLennonFacts (facts) {
  while (facts.length>0) {
    facts.push(`!!!`);
  }
  return facts;
}