
// Solution in JavaScript

function worldCupData () {
    return {
        groupA: {
            teamName:"Brazil",
            colours: ["Yellow", "Green"],
            players: {
                "Neymar": {goals:5, assists:3, yellowCards:1, redCards:0, minutesPlayed:400},
                "Vinicius Jr": {goals:3, assists:4, yellowCards:2, redCards:0, minutesPlayed:380},
                "Casemiro": {goals:1, assists:1, yellowCards:3, redCards:1, minutesPlayed:450},
            }

        },
        groupB: {
            teamName:"Argentina",
            colours: ["Light Blue", "White"],
            players: {
                "Messi": {goals:6, assists:5, yellowCards:1, redCards:0, minutesPlayed:480},
                "Di Maria": {goals:2, assists:3, yellowCards:2, redCards:0, minutesPlayed:390},
                "De Paul": {goals:0, assists:2, yellowCards:4, redCards:0, minutesPlayed:500},
            }

        }

    };
}

console.log(worldCupData())

function goalsScored(playerName) {
    let data = worldCupData(); // Retrieve match data
    for (let group in data) { // Loop through "home" and "away"
        if (data[group].players[playerName]) { // Check if the player exists
            return data[group].players[playerName].goals; // Return the goals

        }
    }
    return "Player not found"; // If player is not in the data
}

console.log (goalsScored("Messi"))

function minutesPlayed(playerName) {
    let data = worldCupData(); // Get match data
    for (let group in data) {// Loop through "home" and "away"
        if (data[group].players[playerName]) {// Check if team name matches
            return data[group].players[playerName].minutesPlayed;// Return the team's colors
        }
    }
    return "Player not found";// Return the team's colors
}

console.log (minutesPlayed("Messi"))

function teamColors(teamName) {
    let data = worldCupData ();// Get match data
    for (let group in data) {// Loop through "home" and "away"
        if(data[group].teamName === teamName) {// Check if team name matches
            return data[group].colours; // Return the team's colors
        }
    }
    return "Team not found"; // If no match is found
}
console.log (teamColors("Brazil"))

function teamNames () {
    let data = worldCupData ();// Get match data
    return [data.groupA.teamName, data.groupB.teamName];// Return both team names

}
console.log (teamNames())

function playerStats(playerName) {
    let data = worldCupData ();// Get match data
    for (let group in data) { // Loop through "home" and "away" 
        if (data[group].players[playerName]) {// Check if player exists
        return data[group].players[playerName];  // Return player stats
        }
    }
    return "Player not found"; // If player is not found
}
console.log(playerStats("Messi"))

function mostGoalsScored () {
    let data = worldCupData ();  // Get match data
    let maxGoals = 0;
    let topPlayer = "";
    for (let group in data) { // Loop through "home" and "away"
        for (let player in data[group].players) { // Loop through players
            if ( data[group].players[player].goals > maxGoals) { // Compare goals
                maxGoals = data[group].players[player].goals;
                topPlayer = player
            }
        }
    }
return topPlayer;  // Return player with most goals
}
console.log (mostGoalsScored())

function winningTeam () {
    let data = worldCupData();
    let teamGoals = {};
    for (let group in data) {  // Sum goals for home team
        let teamName = data[group].teamName;
        teamGoals[teamName] = Object.values(data[group].players).reduce((sum, player) => sum + player.goals, 0);
    }
    return Object.keys(teamGoals).reduce((a, b) => teamGoals[a] > teamGoals[b] ? a : b);
}
console.log (winningTeam())

function mostMinutesPlayed() {
    let data = worldCupData();
    let maxMinutes = 0;
    let topPlayer = "";
    for (let group in data) {
        for (let player in data[group].players){

        
            if (data[group].players[player].minutesPlayed > maxMinutes) {
                maxMinutes = data[group].players[player].minutesPlayed;
                topPlayer = player;
            }
        }
    }
    return topPlayer;
}
console.log (mostMinutesPlayed())

function doesTopScorerHaveMostMinutes() {
return mostGoalsScored() === mostMinutesPlayed();
}

console.log (doesTopScorerHaveMostMinutes())
