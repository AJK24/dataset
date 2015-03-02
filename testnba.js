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
function calPlayers(){
	if(players.Year >= 2010){
		return players.Name;
	}
}

//used to filter to only the players who played point guard
function getpg(){
///	if(players.Position === "PG"){
//		return players.Name;
//	}
	return players.Position == "PG";


}

//returns the name of the team who drafted the player based on who the user wants to see
function getteam(name, team, usrteam){
	if(team === usrteam){
		return name;
	}

}












//print number of players past 2010
print(players.reduce(calPlayers));

//print list of pointguards
print(JSON.stringify(filter(players, function(item){
	if(item.Position == "PG"){
		return item.Name;
	}
}))); 

//print new array of players who played for that team.
//print(players.map(getteam("Raptors")));



