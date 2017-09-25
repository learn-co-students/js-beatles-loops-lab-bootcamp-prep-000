
function theBeatlesPlay(players, instruments) {
    var allPlayers = [];
    for (var i=0; i < players.length; i++) {
        allPlayers.push(players[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}

var johnLennonFacts = function (array) {
	var i = 0;
	var arrayCount = array.length
	var newArray = [];

	while (arrayCount > 0) {
		newArray.push(array[i] + "!!!");
		i++;
		arrayCount--;
	}
	return(newArray);
};

function iLoveTheBeatles(x) {
    var array = [];
    do {
      array.push("I love the Beatles!");
      x++;
    }while (x < 15);

    return array;
}
