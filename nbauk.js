//Andrew Klump
//CMP237
//February 2015
//This is a data set of basketball players who played at Kentucky and played in the NBA from the past 15 years - only including players who have been drafted



var UK = "[\n " +  [ '{ "Name": "James Young", "YearDrafted": 2014, "RoundSelected": "1st", "YearsPro": "1", "TeamDrafted": "Celtics","Position": "SG" }', 
	'{ "Name": "Julius Randle", "YearDrafted": 2014 , "RoundSelected": "1st", "YearsPro": 1 , "TeamDrafted": "Lakers","Position": "PF" }',
       	'{ "Name": "ArchieGoodwin", "YearDrafted": 2013 , "RoundSelected": "1st", "YearsPro": "2", "TeamDrafted": "Thunder", "Position": "SG" }',
       	'{ "Name": "Nerlens Noel", "YearDrafted": 2013 , "RoundSelected": "1st", "YearsPro": "2", "TeamDrafted": "76ers", "Position": "C"}',
       	'{ "Name": "Darius Miller", "YearDrafted": 2012 , "RoundSelected": "2nd", "YearsPro": "3", "TeamDrafted": "Pelicans", "Position": "SG" }',
       	'{"Name": "Doron Lamb", "YearDrafted":  2012 , "RoundSelected": "2nd", "YearsPro": "3", "TeamDrafted": "Bucks", "Position": "SG" }',
	'{ "Name": "Marquis Teague", "YearDrafted": 2012 , "RoundSelected": "1st", "YearsPro": "3", "TeamDrafted": "Bulls", "Position": "PG" }',
	'{ "Name": "Terrence Jones", "YearDrafted": 2012 , "RoundSelected": "1st", "YearsPro": "3", "TeamDrafted": "Rockets", "Position": "PF" }',
	'{ "Name": "Michael Kidd-Gilchrist", "YearDrafted": 2012 , "RoundSelected": "1st", "YearsPro": "3", "TeamDrafted": "Hornets", "Position": "SF" }',
	'{ "Name": "Anthony Davis", "YearDrafted": 2012 , "RoundSelected": "1st", "YearsPro": "3", "TeamDrafted": "Pelicans", "Position": "PF" }', 
	'{ "Name": "Deandre Liggins", "YearDrafted": 2011 , "RoundSelected": "2nd", "YearsPro": "4", "TeamDrafted": "Magic", "Position": "SF" }', 
	'{ "Name": "Josh Harrellson", "YearDrafted": 2011 , "RoundSelected": "2nd", "YearsPro": "4", "TeamDrafted": "Pelicans", "Position": "SF" }', 
	'{ "Name": "Brandon Knight", "YearDrafted": 2011 , "RoundSelected": "1st", "YearsPro": "4", "TeamDrafted": "Pistons", "Position": "PG" }', 
	'{ "Name": "Enes Kanter", "YearDrafted": 2011 , "RoundSelected": "1st", "YearsPro": "4", "TeamDrafted": "Jazz", "Position": "C"}', 
	'{ "Name": "DanielOrton", "YearDrafted": 2010 , "RoundSelected": "1st", "YearsPro": "5", "TeamDrafted": "Magic", "Position": "C" }', 
	'{"Name": "Eric Bledsoe", "YearDrafted": 2010, "RoundSelected": "1st","YearsPro": "5", "TeamDrafted": "Thunder", "Position": "PG" }',
       	'{ "Name": "Patrick Patterson", "YearDrafted": 2010 , "RoundSelected": "1st", "YearsPro": "5", "TeamDrafted": "Rockets", "Position": "PG" }',
       	'{ "Name":"Demarcus Cousins", "YearDrafted": 2010 , "RoundSelected": "1st", "YearsPro": "5", "TeamDrafted": "Kings", "Position": "C" }',
       	'{ "Name": "John Wall", "YearDrafted": 2010 , "RoundSelected": "1st", "YearsPro": "5","TeamDrafted": "Wizards", "Position": "PG" }', 
	'{ "Name": "Jodie Meeks","YearDrafted": 2009 , "RoundSelected": "2nd", "YearsPro": "6", "TeamDrafted": "Bucks", "Position": "SG" }',
       	'{ "Name": "Joe Crawford", "YearDrafted": 2008 , "RoundSelected": "2nd", "YearsPro": "7", "TeamDrafted": "Lakers", "Position": "SF" }', 
	'{ "Name": "Rajon Rondo", "YearDrafted": 2006 , "RoundSelected": "1st", "YearsPro": "9", "TeamDrafted": "Suns","Position": "PG" }',
       	'{ "Name": "Keith Bogans", "YearDrafted": 2003 , "RoundSelected": "2nd", "YearsPro": "12", "TeamDrafted": "Bucks", "Position": "SG"}',
       	'{ "Name": "Tayshaun Prince", "YearDrafted": 2002 , "RoundSelected":"1st", "YearsPro": "13", "TeamDrafted": "Pistons", "Position": "SF" }', 
	'{"Name": "Michael Bradley", "YearDrafted": 2001 , "RoundSelected": "1st","YearsPro": "5", "TeamDrafted": "Raptors", "Position": "PF" }'].join(",\n ") + "\n]";

if(typeof module != "undefined" && module.exports){
	module.exports = UK;
}

