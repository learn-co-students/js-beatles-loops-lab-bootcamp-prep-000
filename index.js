function theBeatlesPlay(X,Y)
{
  array = []

  let l = X.length

  for(i = 0; i < l; i++)
  {
    array1 =[...array,`${X[i]} plays ${Y[i]}`]
    array = array1
  }

  return array1
}

 musicians =['John Lenon','Paul McCartney','George Harrison','Ringo Starr']
instruments =['Guitar','Bass Guitar','Lead Guitar','Drums']

theBeatlesPlay(musicians,instruments)
