import * as interfaces from "./interfaces";

export function renderGameBoard(theme: interfaces.GameThemeImages): void {
    const container = document.getElementById('score-board-container');
    if (!container) return;

    container.innerHTML = `
        <div id="score-board-player1" class="score-board-player">
            <img src="${theme.score2}" alt="blue pawn">
            <div id="score-board-player1-score">1</div>
        </div>
        <div id="score-board-player2" class="score-board-player">
            <img src="${theme.score1}" alt="orange pawn">
            <div id="score-board-player2-score">0</div>
        </div>
    `;
}
