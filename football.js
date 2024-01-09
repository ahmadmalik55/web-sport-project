function calculatePlayerStanding(goals, assists, appearances) {
    const totalStats = goals + assists + appearances;

    if (totalStats >= 1000) {
        return "Top 1-5";
    } else if (totalStats >= 750) {
        return "Top 6-10";
    } else {
        return "Not in the top 10";
    }
}

function calculateAndDisplayStanding() {
    
    const goals = parseInt(document.getElementById("goals").value, 10) || 0;
    const assists = parseInt(document.getElementById("assists").value, 10) || 0;
    const appearances = parseInt(document.getElementById("appearances").value, 10) || 0;

    const playerStanding = calculatePlayerStanding(goals, assists, appearances);
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `<p>Standing: ${playerStanding}</p>`;
}