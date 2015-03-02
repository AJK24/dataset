//Andrew Klump
//CMP 237
//February 2015
//Testing the nbauk.js file with reduce map and filter

load('nbauk.js');
var players = JSON.parse(UK);

//used to reduce the array to the number of players who played past 2010
function calPlayers(){
	if(players.Year >= 2010){
		return players.Name;
	}
}

//used to filter to only the players who played point guard
function getpg(name, position){
	if(players.Position === 'PG'){
		return players.Name;
	}

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
print(players.filter(getpg));


//print new array of players who played for that team.
//print(players.map(getteam("Raptors")));



