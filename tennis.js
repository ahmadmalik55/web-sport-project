function calculatePlayerStanding(grandSlamTitles, olympicGoldMedals, atpTourFinalsWins) {
    const totalMetrics = grandSlamTitles + olympicGoldMedals + atpTourFinalsWins;

    if (totalMetrics >= 30) {
        return "Top 1-5 Tennis Player";
    } else if (totalMetrics >= 20) {
        return "Top 6-10 Tennis Player";
    } else {
        return "Not in top 10 list";
    }
}

function calculateAndDisplayStanding() {
    
    const grandSlamTitles = parseInt(document.getElementById("grandSlamTitles").value, 10) || 0;
    const olympicGoldMedals = parseInt(document.getElementById("olympicGoldMedals").value, 10) || 0;
    const atpTourFinalsWins = parseInt(document.getElementById("atpTourFinalsWins").value, 10) || 0;

    const playerStanding = calculatePlayerStanding(grandSlamTitles, olympicGoldMedals, atpTourFinalsWins);
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `<p> Standing: ${playerStanding}</p>`;
}