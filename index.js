var theBeatlesPlay = function (musicians, instruments) {

  "use strict";

  var response = [];

  for (var i = 0; i < musicians.length; i++) {
    response.push(musicians[i] + " plays " + instruments[i]);
  }

  return response;
};


var johnLennonFacts = function (facts) {

  "use strict";

  var i = 0;

  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }

  return facts;
};

var iLoveTheBeatles = function (num) {

  "use strict";

  var response = [];

   do {
     response.push("I love the Beatles!");
     num++;
   } while (num < 15);

   return response;
};
