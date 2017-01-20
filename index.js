var musicians = [];
var instruments = [];
function theBeatlesPlay (musicians,instruments) {
    var array = [];
     for (let i = 0; i < musicians.length; i++) {
      // array.push (`${musicians} plays ${instruments}`)
      array.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return array;
}

// function johnLennonFacts (array) {
//     while (array>0) {
//         return array.push (`${array[1]} !!!`)
//     }
// return array
// }
function johnLennonFacts (array) {
    var f = 0;
    while (f<array.length) {
        array.push (`${array[f]}!!!`)
        f++;
    }
}
