function theBeatlesPlay(musiciansArray, instrumentsArray) {
    var arr = [];
    for (var i = 0; i < musiciansArray.length; i++) {
        arr.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
    }
    return arr;
}

function johnLennonFacts(arr) {
    var count = 0;
    while(count < arr.length) {
        arr[count] = `${arr[count]}!!!`;
        count++;
    }
    return arr;
}

function iLoveTheBeatles(n) {
    var arr = [];
    do {
        arr.push("I love the Beatles!");
        n++;
    } while (n < 15);

    return arr;
}
