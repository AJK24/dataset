//Andrew Klump
//CMP 237
//February 2015
//Testing the nbauk.js file with reduce map and filter

load('nbauk.js');
var players = JSON.parse(UK);


//filter 
function filter(array, test) {
	  var passed = [];
	    for (var i = 0; i < array.length; i++) {
		        if (test(array[i]))
				      passed.push(array[i]);
			  }
	      return passed;
}






//used to reduce the array to the number of players who played past 2010
function getName(name){
	if(players.Name === name){
		return players.Name;
	}
}


//returns the name of the team who drafted the player based on who the user wants to see
function getteam(name, team, usrteam){
	if(team === usrteam){
		return name;
	}

}











//REDUCE
//prints the last(oldest)  player in the list.
//b is oldest, a is youngest
print(JSON.stringify(players.reduce(function(a, b){
	return a.years > b.years ? a : b;
})));

print('\n');


///FILTER
//print list of pointguards
print(JSON.stringify(filter(players, function(item){
	if(item.Position == "PG"){
		return item.Name;
	}
}))); 


//MAP
//print new array of players who played for that team.
print(players.map(getteam("Raptors")));



