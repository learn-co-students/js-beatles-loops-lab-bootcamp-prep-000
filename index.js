function theBeatlesPlay(musicians, instruments) {
  var musiciansPlay = {}; // create an empty array stored in a variable.
  for (i = 0; i <= musicians.length; i++) {
    musicians[i] = `${musicians[i]} plays ${instruments[i]}.`
  }
  console.log(musiciansPlay)
  return musiciansPlay;
}

// This string should be added to the empty array you created.
// The loop should make the same sentence for every member of the musicians array.
// The function should return the array of new strings.
