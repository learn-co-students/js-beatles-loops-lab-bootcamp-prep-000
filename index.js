function theBeatlesPlay(musicians, instruments) {
    //use for loop
    //first time through loop, the loop should create a string using the
    //first index of the instruments array. This string should be added to the
    //array that you created. The loop should make the same sentence for every
    //person in the musicians array. The function should
    //return an array of new strings.
    var finalArray = [];
    for (let i = 0, l = musicians.length; i < l; i++) {
        finalArray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    console.log(finalArray);
    return finalArray;
}

function johnLennonFacts(facts) {
    //use while loop to add '!!!' to the end of every fact, in an array of facts
    // The function should return an array of strings with exclamation points
    var finalArray = [];
    var i = 0;
    while (facts[i]) {
        finalArray.push(facts[i] + '!!!');
        i++;
    }
    console.log(finalArray);
    return finalArray;
}

function iLoveTheBeatles(n) {
    //create a variable that stores an empty array. Then, use a do-while loop
    //inside the function that adds "I love the Beatles!" to an empty array.
    //Then the loop should increment the number passed in as a parameter. The
    //condition of the loop should check to see that the parameter number is <15
    //The function should return the array with strings 'I love the Beatles!'
    var finalArray = [];
    var i = 0;
    do {
        finalArray.push('I love the Beatles!');
        i++
    } while (n < 15 && i < (n + 1)) ;

    return finalArray;

}
