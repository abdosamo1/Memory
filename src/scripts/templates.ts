import * as interfaces from "./interfaces";

export function renderscoreThemeTemplate(theme: interfaces.GameTheme['images']): void {
    const container = document.getElementById('score-board-container');
    if (!container) return;

    container.innerHTML = `
        <div id="score-board-player1" class="score-board-player">
            <img src="${theme.score2}" alt="orange pawn">
            <div id="score-board-player2-score" class="player-score player1">0</div>
        </div>
        <div id="score-board-player2" class="score-board-player">
            <img src="${theme.score1}" alt="blue pawn">
            <div id="score-board-player1-score" class="player-score player2">0</div>
        </div>
    `;
}
