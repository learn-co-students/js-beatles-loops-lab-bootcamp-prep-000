function theBeatlesPlay(musicians, instruments)
{
    var result = [];
    for (let i = 0; i < musicians.length; i++)
    {
        result.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return result;
}

function johnLennonFacts(array)
{
    let i = array.length - 1;
    while (i >= 0) {
        array[i] = `${array[i]}!!!`;
        i--;
    }
    return array;
}

function iLoveTheBeatles(numb)
{
    var array = [];
    do {
        array.push("I love the Beatles!");
        numb++;
    } while (numb < 15);
    return array;
}
