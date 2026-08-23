(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)}var t={start:A,settings:j,game:M},n={start:()=>o(),settings:()=>s(),game:()=>c()};function r(e){let r=document.getElementById(`app-view`);r&&(r.innerHTML=t[e](),n[e]())}function i(){r(`settings`),D()}function a(){let t=document.getElementById(`play-arrow`),n=document.getElementById(`play-arrow-hover`);t&&n&&(e(t,`hidden`),e(n,`hidden`))}function o(){let e=document.getElementById(`start-button`);e?.addEventListener(`mouseenter`,a),e?.addEventListener(`mouseleave`,a),e?.addEventListener(`click`,()=>r(`settings`))}function s(){k(),m(),G(),K(),document.getElementById(`start-game-button`)?.addEventListener(`click`,()=>{x(),r(`game`),S()})}function c(){X(),ue(),pe()}function l(e,t){let n=e.querySelector(`input[type="radio"]`),r=e.querySelector(`.active-icon`);n&&r&&r.classList.toggle(`hidden`,n!==t)}function u(e){let t=e.closest(`.settings-screen-option`);t&&t.querySelectorAll(`label`).forEach(t=>l(t,e))}function d(e){let t=e.querySelector(`input[type="radio"]:checked`);e.querySelectorAll(`label`).forEach(e=>{let n=e.querySelector(`input[type="radio"]`);e.querySelector(`.active-icon`)?.classList.toggle(`hidden`,n!==t)})}function f(e,t){t.querySelectorAll(`label`).forEach(t=>{t.querySelector(`.active-icon`)?.classList.toggle(`hidden`,t!==e)})}function p(e){e.querySelectorAll(`label`).forEach(t=>{t.addEventListener(`mouseenter`,()=>f(t,e))}),e.addEventListener(`mouseleave`,()=>d(e))}function m(){document.querySelectorAll(`.settings-screen-option`).forEach(p)}function h(e){let t=document.getElementById(`selected-theme`);e&&t&&(t.textContent=`Game Theme`)}function ee(e){let t=document.getElementById(`selected-player`);e&&t&&(t.textContent=e[0].toUpperCase()+e.slice(1)+` Player`)}function te(e){let t=document.getElementById(`selected-size`);e&&t&&(t.textContent=`Board-`+e+` Cards`)}function g(){let e=document.getElementById(`selections-status`);e&&(e.classList.remove(`animate-expand`),e.offsetWidth,e.classList.add(`animate-expand`))}function _(e){document.querySelectorAll(`.default-splitter`).forEach(t=>t.classList.toggle(`hidden`,e)),document.querySelectorAll(`.active-splitter`).forEach(t=>t.classList.toggle(`hidden`,!e))}function v(e){let t=document.getElementById(`start-game-button`),n=document.getElementById(`start-game-active-icon`),r=document.getElementById(`start-game-disabled-icon`);t&&(t.disabled=!e),n?.classList.toggle(`hidden`,!e),r?.classList.toggle(`hidden`,e)}function y(e){_(e),v(e)}var b={theme:`Gaming theme`,player:`color`,size:`0`,orangePlayerScore:0,bluePlayerScore:0};function x(){let{theme:e,player:t,size:n}=w();e&&t&&n&&C(e,t,n)}function S(){let{theme:e,player:t,size:n}=b;L(t),F(e),I(e,parseInt(n)),q(e)}function C(e,t,n){b={theme:e,player:t,size:n,orangePlayerScore:0,bluePlayerScore:0}}function w(){return{theme:document.querySelector(`input[name="theme"]:checked`)?.value,player:document.querySelector(`input[name="player"]:checked`)?.value,size:document.querySelector(`input[name="board"]:checked`)?.value}}function T(){let{theme:e,player:t,size:n}=w();h(e),ee(t),te(n),g(),y(!!(e&&t&&n))}function E(){let e=document.getElementById(`selected-theme`),t=document.getElementById(`selected-player`),n=document.getElementById(`selected-size`);e&&(e.textContent=`Theme`),t&&(t.textContent=`Player`),n&&(n.textContent=`Size`)}function D(){document.querySelectorAll(`input[type="radio"]`).forEach(e=>{e.checked=e.defaultChecked}),document.querySelectorAll(`.settings-screen-option`).forEach(d),E(),y(!1);let e=document.querySelector(`input[name="theme"]:checked`)?.value;e&&V(e)}function O(e){e.addEventListener(`change`,e=>{let t=e.target;t.checked&&(u(t),T())})}function k(){document.querySelectorAll(`input[type="radio"]`).forEach(O)}function A(){return`
    <section id="start-screen" class="start-screen">
        <div class="section-content">
            <div id="start-screen-titles">
                <p>It’s play time.</p>
                <h1 id="app">Ready to play?</h1>
            </div>
            <button class="button start-button" id="start-button">
                <img src="./src/img/stadia_controller (1).png" alt="start" class="start-button-controller">
                Play
                <img src="./src/img/Arrow 1.svg" id="play-arrow" class="play-arrow" alt="arrow">
                <img src="./src/img/Arrow 2.svg" id="play-arrow-hover" class="play-arrow-hover hidden" alt="arrow">
            </button>
            <img class="controller" src="./src/img/stadia_controller.png" alt="start" id="start">
        </div>
    </section>`}function j(){return`
    <section class="setting-screen" id="setting-screen">
        <div class="section-content setting-screen-content">
            <div class="h2-container">
                <h2>Settings</h2>
                <img src="./src/img/underline.svg" alt="underline" class="settings-underline-icon">

            </div>
            <div class="settings-content">
                <div class="options-container">
                    <fieldset class="settings-screen-option">
                        <legend>
                            <img src="./src/img/palette.svg" alt="theme">
                            Game Themes
                        </legend>
                        <label>
                            <input type="radio" name="theme" checked value="gaming"> Gaming theme
                            <img src="./src/img/active.svg" alt="active choice" class="active-icon">
                        </label>
                        <label>
                            <input type="radio" name="theme" value="da-projects"> DA Projects theme
                            <img src="./src/img/active.svg" alt="active choice" class="active-icon hidden">
                        </label>
                    </fieldset>
                    <fieldset class="settings-screen-option">
                        <legend>
                            <img src="./src/img/chess_pawn.svg" alt="player">
                            Choose Player
                        </legend>
                        <label>
                            <input type="radio" name="player" value="blue"> Blue
                            <img src="./src/img/active.svg" alt="active choice" class="active-icon hidden">
                        </label>
                        <label>
                            <input type="radio" name="player" value="orange"> Orange
                            <img src="./src/img/active.svg" alt="active choice" class="active-icon hidden">
                        </label>
                    </fieldset>
                    <fieldset class="settings-screen-option">
                        <legend>
                            <img src="./src/img/style.svg" alt="board icon">
                            Board Size
                        </legend>
                        <label>
                            <input type="radio" name="board" value="16"> 16 cards
                            <img src="./src/img/active.svg" alt="active choice" class="active-icon hidden">
                        </label>
                        <label>
                            <input type="radio" name="board" value="24"> 24 cards
                            <img src="./src/img/active.svg" alt="active choice" class="active-icon hidden">
                        </label>
                        <label>
                            <input type="radio" name="board" value="36"> 36 cards
                            <img src="./src/img/active.svg" alt="active choice" class="active-icon hidden">
                        </label>
                    </fieldset>
                </div>
                <div class="choices-container">
                    <div id="preview-theme">
                        <img src="./src/img/theme-dark.svg" id="theme-dark" alt="theme">
                        <img src="./src/img/theme-light.svg" id="theme-light" class="hidden" alt="theme">
                    </div>
                    <div id="selections-status" class="selections-status">
                        <p id="selected-theme">Theme</p>
                        <img src="./src/img/splitter.svg" alt="splitter" class="default-splitter">
                        <img class="hidden active-splitter" src="./src/img/splitter2.svg" alt="the other splitter">
                        <p id="selected-player">Player</p>
                        <img src="./src/img/splitter.svg" alt="splitter" class="default-splitter">
                        <img class="hidden active-splitter" src="./src/img/splitter2.svg" alt="the other splitter">
                        <p id="selected-size">Size</p>
                        <button class="button" disabled id="start-game-button">
                            <img class="hidden start-game-active-icon start-button-controller" id="start-game-active-icon" src="./src/img/smart_display.svg"
                                alt="start">
                            <img id="start-game-disabled-icon" src="./src/img/smart_display_disabled.svg" alt="start"
                                class="start-button-controller">
                            Start</button>
                    </div>
                </div>
            </div>
        </div>
    </section>`}function M(){return`
    <section id="game-screen" class="game-screen">
        <div class="section-content game-board">
            <div id="game-board-header" class="game-board-header">
                <div id="score-board-container" class="score-board-container"></div>
                <div id="current-player-container" class="current-player-container">
                    <p>Current Player:</p>
                    <img id="current-player-icon" class="current-player-icon" src="./src/img/chess_pawn_white.svg" alt="white pawn">
                </div>
                <button class="button" id="quit-button">
                    <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.4375 12.5H7.5C7.14583 12.5 6.84896 12.3802 6.60938 12.1406C6.36979 11.901 6.25 11.6042 6.25 11.25C6.25 10.8958 6.36979 10.599 6.60938 10.3594C6.84896 10.1198 7.14583 10 7.5 10H21.4375L20.375 8.9375C20.125 8.6875 20.0052 8.39583 20.0156 8.0625C20.026 7.72917 20.1458 7.4375 20.375 7.1875C20.625 6.9375 20.9219 6.80729 21.2656 6.79688C21.6094 6.78646 21.9062 6.90625 22.1562 7.15625L25.375 10.375C25.625 10.625 25.75 10.9167 25.75 11.25C25.75 11.5833 25.625 11.875 25.375 12.125L22.1562 15.3438C21.9062 15.5938 21.6094 15.7135 21.2656 15.7031C20.9219 15.6927 20.625 15.5625 20.375 15.3125C20.1458 15.0625 20.026 14.7708 20.0156 14.4375C20.0052 14.1042 20.125 13.8125 20.375 13.5625L21.4375 12.5ZM15 6.25V2.5H2.5V20H15V16.25C15 15.8958 15.1198 15.599 15.3594 15.3594C15.599 15.1198 15.8958 15 16.25 15C16.6042 15 16.901 15.1198 17.1406 15.3594C17.3802 15.599 17.5 15.8958 17.5 16.25V20C17.5 20.6875 17.2552 21.276 16.7656 21.7656C16.276 22.2552 15.6875 22.5 15 22.5H2.5C1.8125 22.5 1.22396 22.2552 0.734375 21.7656C0.244792 21.276 0 20.6875 0 20V2.5C0 1.8125 0.244792 1.22396 0.734375 0.734375C1.22396 0.244792 1.8125 0 2.5 0H15C15.6875 0 16.276 0.244792 16.7656 0.734375C17.2552 1.22396 17.5 1.8125 17.5 2.5V6.25C17.5 6.60417 17.3802 6.90104 17.1406 7.14062C16.901 7.38021 16.6042 7.5 16.25 7.5C15.8958 7.5 15.599 7.38021 15.3594 7.14062C15.1198 6.90104 15 6.60417 15 6.25Z"
                            fill="white" />
                    </svg>

                    Exit Game
                </button>
            </div>
            <div id="game-board-content" class="game-board-content">
            </div>
            <div id="exit-game" class="closed exit-game">
                <p>Are you sure you want to quit the game?</p>
                <div class="buttons">
                    <button class="button no-button" id="no-button">No</button>
                    <button class="button" id="yes-button">Yes</button>
                </div>
            </div>
        </div>
    </section>`}function N(e){return`
        <div id="score-board-player1" class="score-board-player">
            <img src="${e.score2}" alt="orange pawn">
            <div id="score-board-player2-score" class="player-score player1">${b.orangePlayerScore}</div>
        </div>
        <div id="score-board-player2" class="score-board-player">
            <img src="${e.score1}" alt="blue pawn">
            <div id="score-board-player1-score" class="player-score player2">${b.bluePlayerScore}</div>
        </div>
    `}function P(e,t){return t.map(t=>`
        <div class="card" data-value="card-${t}">
            <div class="card__inner">
                <div class="card__face"></div>
                <div class="card__face card__face--back">
                    <img class="card__image" src="${e.cards[t]}" alt="card-image">    
                </div>
            </div>
        </div>`).join(``)}function F(e){let t=e===`gaming`?R.images:z.images,n=document.getElementById(`score-board-container`);n&&(n.innerHTML=N(t))}function I(e,t){let n=e===`gaming`?R.images:z.images,r=document.getElementById(`game-board-content`);if(!r)return;let i=t/2;r.innerHTML=P(n,Y([...Array.from({length:i},(e,t)=>t),...Array.from({length:i},(e,t)=>t)])),r.classList.add(`cards-${t}`)}function L(e){let t=document.getElementById(`current-player-icon`);if(t)switch(e){case`blue`:t.classList.remove(`orange`),t.classList.add(`blue`);break;case`orange`:t.classList.remove(`blue`),t.classList.add(`orange`)}}var R={name:`gaming`,images:{cards:J(`gaming`),win1:`src/img/dark_theme/win.svg`,tie:`src/img/dark_theme/tie.svg`,score1:`src/img/score1.svg`,score2:`src/img/score2.svg`}},z={name:`da-projects`,images:{cards:J(`da-projects`),win1:`src/img/light_theme/win1.svg`,win2:`src/img/light_theme/win2.svg`,tie:`src/img/light_theme/tie.svg`,score1:`src/img/score1.svg`,score2:`src/img/score2.svg`}};function ne(e,t){e.classList.remove(`hidden`),t.classList.add(`hidden`)}function B(e,t){e.classList.add(`hidden`),t.classList.remove(`hidden`)}function V(e){let t=document.getElementById(`theme-dark`),n=document.getElementById(`theme-light`);!t||!n||(e===`gaming`?ne(t,n):e===`da-projects`&&B(t,n))}function H(e){e.addEventListener(`change`,e=>{let t=e.target;t.checked&&V(t.value)})}function U(){let e=document.querySelector(`input[name="theme"]:checked`);e&&V(e.value)}function W(e){let t=e.closest(`label`);t?.addEventListener(`mouseenter`,()=>V(e.value)),t?.addEventListener(`mouseleave`,U)}function G(){document.querySelectorAll(`input[name="theme"]`).forEach(H)}function K(){document.querySelectorAll(`input[name="theme"]`).forEach(W)}function q(e){let t=document.getElementById(`game-screen`);t&&(t.classList.remove(`theme-gaming`,`theme-da-projects`),t.classList.add(`theme-${e}`))}function J(e){let t=[];for(let n=1;n<=18;n++)t.push(`src/img/`+e+`/card`+n+`.svg`);return t}function Y(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function X(){document.getElementById(`game-board-content`)?.addEventListener(`click`,t=>{let n=t.target.closest(`.card`);n&&document.querySelectorAll(`.card.flipped`).length<2&&!n.classList.contains(`matched`)&&!n.classList.contains(`flipped`)&&(e(n,`flipped`),document.querySelectorAll(`.card.flipped`).length===2&&Z())})}function Z(){let e=document.querySelectorAll(`.card.flipped`),t=e[0].dataset.value===e[1].dataset.value;document.getElementById(`score-board-container`),t?re(e):oe(e)}function re(e){ie(b.theme),se(e),ae()}function ie(e){b.player===`orange`?b.orangePlayerScore++:b.bluePlayerScore++,F(e)}function ae(){let e=document.querySelectorAll(`.card.matched`),t=document.querySelectorAll(`.card`);e.length===t.length&&he()}function oe(e){setTimeout(()=>{Q(e),ce()},500)}function se(t){t.forEach(t=>{e(t,`matched`),e(t,`flipped`)})}function Q(t){t.forEach(t=>e(t,`flipped`))}function ce(){le(),L(b.player)}function le(){b.player=b.player===`blue`?`orange`:`blue`}function ue(){document.getElementById(`quit-button`)?.addEventListener(`click`,de)}function de(){let t=document.getElementById(`exit-game`);t&&e(t,`closed`),fe()}function fe(){let e=document.getElementById(`no-button`),t=document.getElementById(`yes-button`);if(!(!e||!t))switch(b.theme){case`gaming`:e.textContent=`No, back to game `,t.textContent=`Yes, quit the game`;break;case`da-projects`:e.textContent=`Back to Game`,t.textContent=`Exit Game`}}function $(){document.getElementById(`exit-game`)?.classList.add(`closed`)}function pe(){let e=document.getElementById(`no-button`),t=document.getElementById(`yes-button`);e?.addEventListener(`click`,$),t?.addEventListener(`click`,()=>{$(),i()})}function me(){document.addEventListener(`click`,e=>{let t=document.getElementById(`exit-game`),n=document.getElementById(`quit-button`);if(!t||t.classList.contains(`closed`))return;let r=e.target;!t.contains(r)&&!n?.contains(r)&&t.classList.add(`closed`)})}function he(){console.log(`Game Over`)}function ge(){me(),r(`start`)}document.addEventListener(`DOMContentLoaded`,ge);