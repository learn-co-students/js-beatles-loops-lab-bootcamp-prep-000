    function theBeatlesPlay(musiciansArray, instrumentsArray) {
        var array = new Array();
        for(var i = 0; i < musiciansArray.length; i++) {
                var mystring = musiciansArray[i] + " plays " + instrumentsArray[i];
                array.push(mystring);
        }
        return array;
    }

    function johnLennonFacts(array) {
        var newArray = new Array();
        var i = 0;
        while(i < array.length) {
            newArray.push(array[i] + "!!!");
            i++;
        }
        return newArray;
    }

    function iLoveTheBeatles(number) {
      var newArray = new Array();
          do {
             newArray.push("I love the Beatles!")
             number++;
          } while (number < 15);
      return newArray;
    }
