
function calculateAthleteStanding(olympicGoldMedals, worldChampionshipGolds, majorMarathonWins) {
    const totalMetrics = olympicGoldMedals + worldChampionshipGolds + majorMarathonWins;

    if (totalMetrics >= 10) {
        return "Top 1-5 Athlete";
    } else if (totalMetrics >= 5) {
        return "Top 6-10 Athlete";
    } else {
        return "Not in top 10 list";
    }
}

function calculateAndDisplayStanding() {
    const olympicGoldMedals = parseInt(document.getElementById("olympicGoldMedals").value, 10) || 0;
    const worldChampionshipGolds = parseInt(document.getElementById("worldChampionshipGolds").value, 10) || 0;
    const majorMarathonWins = parseInt(document.getElementById("majorMarathonWins").value, 10) || 0;

    const athleteStanding = calculateAthleteStanding(olympicGoldMedals, worldChampionshipGolds, majorMarathonWins);
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `<p>Athlete Standing: ${athleteStanding}</p>`;
}
