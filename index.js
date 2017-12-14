function theBeatlesPlay(arr1, arr2) {
  var combinations = [];

  for (let i = 0; i < arr1.length; i++) {
    combinations.push(arr1[i] + ' plays ' + arr2[i]);
  }

  return combinations;
}

function johnLennonFacts(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + "!!!";
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = [];
  do{
    array.push("I love the Beatles!")
    number++
  }while (number < 15)
  return array
}
