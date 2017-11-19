function theBeatlesPlay (musicians, instruments) {
  var Beatlesloops = []
    for (let i = 0; i < musicians.length; i++ ) {
      Beatlesloops.push(musicians[i]+ " plays "+ instruments[i])
        }
        return Beatlesloops
  }

function johnLennonFacts  (facts) {
  var Beatlesloops = [...facts
    ]
    var NewBeatlesloops = []
    let i = 0
      while (i < Beatlesloops.length) {
        NewBeatlesloops.push(Beatlesloops[i] + "!!!")
        ++i
}
return NewBeatlesloops
}

function iLoveTheBeatles (parameter) {
  var empty = []
    let i = 0
  do {
    empty.push("I love the Beatles!");
    i++;
    }
    while (i <= parameter && parameter < 15)
    return empty
}
