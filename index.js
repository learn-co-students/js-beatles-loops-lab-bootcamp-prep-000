// add solution here
function theBeatlesPlay(musicians, instruments) {
  let ans=[];
  for (let i = 0; i <musicians.length; i++) {
    ans.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return ans;
}

function johnLennonFacts(ar) {
  let ans = [];
  for (let i = 0; i<ar.length; i++) {
    ans.push(`${ar[i]}!!!`);
  }
  return ans;
}

function iLoveTheBeatles(num) {
  let ans = [];
  do {
    ans.push("I love the Beatles!");
    num++;
  } while (num<15);
  return ans;
}
