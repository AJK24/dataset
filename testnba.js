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

//map
function map(array, transform) {
	  var mapped = [];
	    for (var i = 0; i < array.length; i++)
		        mapped.push(transform(array[i]));
	      return mapped;
}

//reduce
function reduce(array, combine, start) {
	  var current = start;
	    for (var i = 0; i < array.length; i++)
		        current = combine(current, array[i]);
	      return current;
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
print(JSON.stringify(filter(players, function(players){
	if(players.Position == "PG"){
		return players.Name;
	}
}))); 


print('\n');


//MAP
//
var celtic = (filter(players, function(person) {
	if(person.TeamDrafted == "Bucks"){
		return person.Name;
	}
}));

print(celtic);
print('\n');


//print new array of players who played for that team.
print(map(celtic, function(celtic){
	return celtic.Name;
	
}));



