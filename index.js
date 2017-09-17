function theBeatlesPlay(arr1, arr2) {

  var newArr = []

  for(var i=0; i<arr1.length; i++ ) {

    for(var i=0; i<arr2.length; i++) {

      var newEle = arr1[i]+" plays "+arr2[i]

      newArr[i]=newEle

    }


  }

  return newArr
}

function johnLennonFacts (arg) {

  var modArr = [];

  var i =0

  while (i<arg.length) {

    modArr[i] = arg[i]+"!!!"

    i++

  }

  return modArr
}


function iLoveTheBeatles(i) {

  var newArr =[]

  do{

    newArr.push("I love the Beatles!")

    i++
  } while(i < 15)

  return newArr
}
