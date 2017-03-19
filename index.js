function theBeatlesPlay(musicians, instruments) {
    var array = [];
    for (var i = 0; i <= (musicians.length - 1); i++) {
        // return string that accesses first indices of each array & string should be added to new array
        array.push(musicians[i] + " plays " + instruments[i]);
    }
}
