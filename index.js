function theBeatlesPlay(){
  var Beatles = [
    'John Lennon plays Guitar',
    'Paul McCartney plays Bass Guitar',
    'George Harrison plays Lead Guitar',
    'Ringo Starr plays Drums'
  ];
  return Beatles;
}

var facts = [
  'He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and a boy scout',
  'He hated the sound of his own voice'
];

function johnLennonFacts(facts){
//  var facts = [
//    'He was the last Beatle to learn to drive',
//    'He was never a vegetarian',
//    'He was a choir boy and a boy scout',
//    'He hated the sound of his own voice'
//  ];
//  for (let facts = i){
//    johnLennonFacts.push( i + '!!!')
//  }
//  return facts;
  do{
    facts = facts.push('!!!');
  }
  while ( facts.length > 0)
  return facts;
}
