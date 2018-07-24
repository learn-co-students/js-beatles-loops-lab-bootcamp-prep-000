var musicians = ['Shakira', 'MCR', 'The Beatles']
var instruments = ['Sax', 'Flute','Piano']

function theBeatlesPlay(array1, array2){
    var x = []
    for (var z =0; z<(array1.length); z++){
    var y = String(array1[z] + " plays " + array2[z])
    x.push(y)
    }
  return x 
}

