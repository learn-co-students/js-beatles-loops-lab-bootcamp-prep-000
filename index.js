function theBeatlesPlay(musicians, instruments) {
    let tem = [];
    Object.keys(musicians).forEach(function (key) {
        tem.push(`${musicians[key]} plays ${instruments[key]}`)
    });
    return tem;
}

function johnLennonFacts(array) {
    let tem = [];
    Object.keys(array).forEach(function (key) {
        tem[key] = array[key].concat('!!!');
    });
    return tem;
}
function iLoveTheBeatles(numberOfTimes) {
    let dataToReturn = [];
    if (numberOfTimes >= 17) {
        dataToReturn.push('I love the Beatles!');
    } else {
        for (let counter = 0; counter <= numberOfTimes; counter++) {
            dataToReturn.push('I love the Beatles!');
        }
    }

    return dataToReturn;
}

