//Andrew Klump
//CMP 237
//February 2015
//Testing the nbauk.js file with reduce map and filter

load('nbauk.js');

//used to reduce the aray to the number of players who played past 2010
function calPlayers(name, year){
	if(year >= 2010){
		return name;
	}
}

//used to filter to only the players who played point guard
function getpg(name, position){
	if(position === 'pg'){
		return name;
	}

}

//returns the name of the team who drafted the player based on who the user wants to see
function getteam(name, team, usrteam){
	if(team === usrteam){
		return name;
	}

}




//print number of players past 2010
print(players.reduce(calPlayers(UK)));

//print list of pointguards
print(players.filter(getpg(UK)));


//print new array of specific teams
print(players.filter(getteam(UK)));



