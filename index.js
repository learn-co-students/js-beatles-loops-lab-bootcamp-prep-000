function theBeatlesPlay(artists, instruments) {
    let result = [];
    for(let i = 0; i < artists.length; i++){
        result.push(`${artists[i]} plays ${instruments[i]}`);
    }
    return result;
}

function johnLennonFacts(array) {
    let results = [];
    for(let i = 0; i < array.length; i++){
        results.push(`${array[i]}!!!`);
    }
    return results;
}

function iLoveTheBeatles(n) {
    let results = [];
    do {
        results.push('I love the Beatles!');
        ++n;
    } while(n < 15);
    return results;
}
