

function calculatePlayerStanding(majorChampionships, worldNo1Weeks, pgaTourWins) {
    const totalMetrics = majorChampionships + worldNo1Weeks + pgaTourWins;

    if (totalMetrics >= 40) {
        return "Top 1-5 Golfer";
    } else if (totalMetrics >= 20) {
        return "Top 6-10 Golfer";
    } else {
        return "Notable Golfer";
    }
}

function calculateAndDisplayStanding() {
    const majorChampionships = parseInt(document.getElementById("majorChampionships").value, 10) || 0;
    const worldNo1Weeks = parseInt(document.getElementById("worldNo1Weeks").value, 10) || 0;
    const pgaTourWins = parseInt(document.getElementById("pgaTourWins").value, 10) || 0;

    const playerStanding = calculatePlayerStanding(majorChampionships, worldNo1Weeks, pgaTourWins);
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `<p>Player Standing: ${playerStanding}</p>`;
}
