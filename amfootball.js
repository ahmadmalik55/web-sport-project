

function calculatePlayerStanding(superBowlMVPs, nflMVPs, proBowls) {
    const totalMetrics = superBowlMVPs + nflMVPs + proBowls;

    if (totalMetrics >= 10) {
        return "Top 1-5 Football Player";
    } else if (totalMetrics >= 5) {
        return "Top 6-10 Football Player";
    } else {
        return "Not in top 10 list";
    }
}

function calculateAndDisplayStanding() {
    const superBowlMVPs = parseInt(document.getElementById("superBowlMVPs").value, 10) || 0;
    const nflMVPs = parseInt(document.getElementById("nflMVPs").value, 10) || 0;
    const proBowls = parseInt(document.getElementById("proBowls").value, 10) || 0;

    const playerStanding = calculatePlayerStanding(superBowlMVPs, nflMVPs, proBowls);
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `<p>Player Standing: ${playerStanding}</p>`;
}
