

function calculatePlayerStanding(championships, mvpAwards, scoringTitles) {
    const totalMetrics = championships + mvpAwards + scoringTitles;

    if (totalMetrics >= 5) {
        return "Top 1-5 Player";
    } else if (totalMetrics >= 2) {
        return "Top 6-10 Player";
    } else {
        return "Doesn't make the list";
    }
}

function calculateAndDisplayStanding() {
    
    const championships = parseInt(document.getElementById("championships").value, 10) || 0;
    const mvpAwards = parseInt(document.getElementById("mvpAwards").value, 10) || 0;
    const scoringTitles = parseInt(document.getElementById("scoringTitles").value, 10) || 0;

    const playerStanding = calculatePlayerStanding(championships, mvpAwards, scoringTitles);
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `<p>Standing: ${playerStanding}</p>`;
}
