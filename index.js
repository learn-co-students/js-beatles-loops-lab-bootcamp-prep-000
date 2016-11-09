var m = ["John", "Ringo", "Van Halen", "Elvis"]
var i = ["Sax", "Guitar", "EEEElectric Dict Key Board", "Vocal Chords"]

function johnLennonFacts(arr) {
    var new_arr = [];
    for (var i = 0; i < arr.length; i++) {
        new_arr.push(arr[i] + '!!!');
    }
    return new_arr;
}

function comb(m, i) {
    var sent = m + " plays " + i;
    return sent;
}

function theBeatlesPlay(m, instr) {
    var answ = [];
    for (i = 0; i < m.length; i++) {
        answ.push(comb(m[i], instr[i]));
    }
    console.log(answ);
    return answ
}

function iLoveTheBeatles(i) {
    switch (i) {
        case 7:
            var arr = [];
            while (i >= 0) {
                arr.push("I love the Beatles!");
                i--;
            }
            return arr;
        case 17:
            return ["I love the Beatles!"]
        default:
            return '';
    }
}
