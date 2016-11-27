

function theBeatlesPlay(arrMusicians, arrInstruments){
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var arrMusInstr = [];

  for (var i = 0; i < musicians.length; i++){
    arrMusInstr.push(`${musicians[i]} plays ${instruments[i]}`);
  };
  return arrMusInstr;
};

function johnLennonFacts(arrJohnFacts){
  var i = 0;
  var arrJohnExPoints = [];
  while (i < arrJohnFacts.length){
    arrJohnExPoints.push(`${arrJohnFacts[i]}!!!`);
    i++;
  };
  return arrJohnExPoints;
};

function iLoveTheBeatles(num){
  var arr = [];
  do{
    num++;
    arr.push("I love the Beatles!");
  } while(num < 15);
  return arr;
};
