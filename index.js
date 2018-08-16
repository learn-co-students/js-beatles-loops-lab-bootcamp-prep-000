function theBeatlesPlay (musicians, instruments) { 
const array = [];  
  for (var i= 0; i < musicians.length; i++ ) 
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  
  return array;
}

