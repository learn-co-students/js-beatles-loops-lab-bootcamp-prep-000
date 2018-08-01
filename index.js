// TODO + Create a function `theBeatlesPlay`, which accepts two parameters- an array of musicians and an array of instruments. The body of the function should create an empty array stored in a variable. The function should also contain a for loop which loops over the array of musicians. You'll want to be careful about what value you set your counter variable to store. (Hint: Think about what the first index of an array is). The first time through the loop, the body of the loop should create a string using the first index of the musicians array and the first index of the instruments array: `"John Lennon plays guitar"`. This string should be added to the empty array you created. The loop should make the same sentence for every member of the musicians array. The function should return the array of new strings.

function theBeatlesPlay(musicians, instruments){
    var newArr = [];
    for(let i = 0; i < musicians.length; i++){
        newArr.push(musicians[i] + " plays " + instruments[i]);
    }
    return newArr;
}