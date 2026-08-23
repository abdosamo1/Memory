(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)}var t={start:j,settings:L,game:R},n={start:()=>o(),settings:()=>s(),game:()=>c()};function r(e){let r=document.getElementById(`app-view`);r&&(r.innerHTML=t[e](),n[e]())}function i(){r(`settings`),O()}function a(){let t=document.getElementById(`play-arrow`),n=document.getElementById(`play-arrow-hover`);t&&n&&(e(t,`hidden`),e(n,`hidden`))}function o(){let e=document.getElementById(`start-button`);e?.addEventListener(`mouseenter`,a),e?.addEventListener(`mouseleave`,a),e?.addEventListener(`click`,()=>r(`settings`))}function s(){A(),_(),se(),ce(),document.getElementById(`start-game-button`)?.addEventListener(`click`,()=>{S(),r(`game`),C()})}function c(){de(),xe(),Ce()}var l=[{value:`gaming`,label:`Gaming theme`,checked:!0},{value:`da-projects`,label:`DA Projects theme`}],u=[{value:`blue`,label:`Blue`},{value:`orange`,label:`Orange`}],d=[{value:`16`,label:`16 cards`},{value:`24`,label:`24 cards`},{value:`36`,label:`36 cards`}];function f(e,t){let n=e.querySelector(`input[type="radio"]`),r=e.querySelector(`.active-icon`);n&&r&&r.classList.toggle(`hidden`,n!==t)}function p(e){let t=e.closest(`.settings-screen-option`);t&&t.querySelectorAll(`label`).forEach(t=>f(t,e))}function m(e){let t=e.querySelector(`input[type="radio"]:checked`);e.querySelectorAll(`label`).forEach(e=>{let n=e.querySelector(`input[type="radio"]`);e.querySelector(`.active-icon`)?.classList.toggle(`hidden`,n!==t)})}function h(e,t){t.querySelectorAll(`label`).forEach(t=>{t.querySelector(`.active-icon`)?.classList.toggle(`hidden`,t!==e)})}function g(e){e.querySelectorAll(`label`).forEach(t=>{t.addEventListener(`mouseenter`,()=>h(t,e))}),e.addEventListener(`mouseleave`,()=>m(e))}function _(){document.querySelectorAll(`.settings-screen-option`).forEach(g)}function ee(e){let t=document.getElementById(`selected-theme`);e&&t&&(t.textContent=`Game Theme`)}function te(e){let t=document.getElementById(`selected-player`);e&&t&&(t.textContent=e[0].toUpperCase()+e.slice(1)+` Player`)}function ne(e){let t=document.getElementById(`selected-size`);e&&t&&(t.textContent=`Board-`+e+` Cards`)}function re(){let e=document.getElementById(`selections-status`);e&&(e.classList.remove(`animate-expand`),e.offsetWidth,e.classList.add(`animate-expand`))}function v(e){document.querySelectorAll(`.default-splitter`).forEach(t=>t.classList.toggle(`hidden`,e)),document.querySelectorAll(`.active-splitter`).forEach(t=>t.classList.toggle(`hidden`,!e))}function y(e){let t=document.getElementById(`start-game-button`),n=document.getElementById(`start-game-active-icon`),r=document.getElementById(`start-game-disabled-icon`);t&&(t.disabled=!e),n?.classList.toggle(`hidden`,!e),r?.classList.toggle(`hidden`,e)}function b(e){v(e),y(e)}var x={theme:`Gaming theme`,player:`color`,size:`0`,orangePlayerScore:0,bluePlayerScore:0};function S(){let{theme:e,player:t,size:n}=T();e&&t&&n&&w(e,t,n)}function C(){let{theme:e,player:t,size:n}=x;K(t),W(e),G(e,parseInt(n)),le(e)}function w(e,t,n){x={theme:e,player:t,size:n,orangePlayerScore:0,bluePlayerScore:0}}function T(){return{theme:document.querySelector(`input[name="theme"]:checked`)?.value,player:document.querySelector(`input[name="player"]:checked`)?.value,size:document.querySelector(`input[name="board"]:checked`)?.value}}function E(){let{theme:e,player:t,size:n}=T();ee(e),te(t),ne(n),re(),b(!!(e&&t&&n))}function D(){let e=document.getElementById(`selected-theme`),t=document.getElementById(`selected-player`),n=document.getElementById(`selected-size`);e&&(e.textContent=`Theme`),t&&(t.textContent=`Player`),n&&(n.textContent=`Size`)}function O(){document.querySelectorAll(`input[type="radio"]`).forEach(e=>{e.checked=e.defaultChecked}),document.querySelectorAll(`.settings-screen-option`).forEach(m),D(),b(!1);let e=document.querySelector(`input[name="theme"]:checked`)?.value;e&&X(e)}function k(e){e.addEventListener(`change`,e=>{let t=e.target;t.checked&&(p(t),E())})}function A(){document.querySelectorAll(`input[type="radio"]`).forEach(k)}function j(){return`
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
    </section>`}function M(e,t){let n=t.checked?` checked`:``,r=t.checked?`active-icon`:`active-icon hidden`;return`
                        <label>
                            <input type="radio" name="${e}"${n} value="${t.value}"> ${t.label}
                            <img src="./src/img/active.svg" alt="active choice" class="${r}">
                        </label>`}function N(e,t,n,r,i){return`
                    <fieldset class="settings-screen-option">
                        <legend>
                            <img src="${e}" alt="${t}">
                            ${n}
                        </legend>${i.map(e=>M(r,e)).join(``)}
                    </fieldset>`}function P(e){return`<img id="theme-preview" src="${Y[e]}" alt="theme">`}function F(){return`
                        <img src="./src/img/splitter.svg" alt="splitter" class="default-splitter">
                        <img class="hidden active-splitter" src="./src/img/splitter2.svg" alt="the other splitter">`}function I(e,t,n){return`
                        <p id="${e}">${t}</p>${n?F():``}`}function L(){return`
    <section class="setting-screen" id="setting-screen">
        <div class="section-content setting-screen-content">
            <div class="h2-container">
                <h2>Settings</h2>
                <img src="./src/img/underline.svg" alt="underline" class="settings-underline-icon">

            </div>
            <div class="settings-content">
                <div class="options-container">
                    ${N(`./src/img/palette.svg`,`theme`,`Game Themes`,`theme`,l)}
                    ${N(`./src/img/chess_pawn.svg`,`player`,`Choose Player`,`player`,u)}
                    ${N(`./src/img/style.svg`,`board icon`,`Board Size`,`board`,d)}
                </div>
                <div class="choices-container">
                    <div id="preview-theme">
                        ${P(`gaming`)}
                    </div>
                    <div id="selections-status" class="selections-status">
                        ${I(`selected-theme`,`Theme`,!0)}
                        ${I(`selected-player`,`Player`,!0)}
                        ${I(`selected-size`,`Size`,!1)}
                        <button class="button" disabled id="start-game-button">
                            <img class="hidden start-game-active-icon start-button-controller" id="start-game-active-icon" src="./src/img/smart_display.svg" alt="start">
                            <img id="start-game-disabled-icon" src="./src/img/smart_display_disabled.svg" alt="start" class="start-button-controller">
                            Start
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>`}function R(){return`
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
    </section>`}function z(e){return`
        <div id="score-board-player1" class="score-board-player">
            <img src="${e.score2}" alt="orange pawn">
            <div id="score-board-player2-score" class="player-score player1">${x.orangePlayerScore}</div>
        </div>
        <div id="score-board-player2" class="score-board-player">
            <img src="${e.score1}" alt="blue pawn">
            <div id="score-board-player1-score" class="player-score player2">${x.bluePlayerScore}</div>
        </div>
    `}function B(e,t){return t.map(t=>`
        <div class="card" data-value="card-${t}">
            <div class="card__inner">
                <div class="card__face"></div>
                <div class="card__face card__face--back">
                    <img class="card__image" src="${e.cards[t]}" alt="card-image">    
                </div>
            </div>
        </div>`).join(``)}function V(e){return`
        <div class="score-board-player">
            <img src="${e.score2}" alt="orange pawn">
            <div class="player-score player1">${x.orangePlayerScore}</div>
        </div>
        <div class="score-board-player">
            <img src="${e.score1}" alt="blue pawn">
            <div class="player-score player2">${x.bluePlayerScore}</div>
        </div>`}function H(e){return`
    <div class="game-over-screen theme-${e}">
        <h3 class="game-over-screen__title">Game Over</h3>
        <div class="game-over-screen__score">
            <p>Final Score</p>
            <div class="score-board-container score-board-container--large">${V(e===`gaming`?q.images:J.images)}</div>
        </div>
    </div>`}function U(e,t){return`
    <div class="winner-screen theme-${e}">
        <div class="winner-screen__texts">
            <p class="winner-screen__line1">${t.line1}</p>
            <p class="winner-screen__line2 ${t.line2Class}">${t.line2}</p>
        </div>
        <div class="winner-screen__trophy">
            <img class="winner-screen__trophy-image ${t.trophyClass}" src="${t.trophySrc}" alt="trophy">
        </div>
        <button class="button" id="home-button">Home</button>
    </div>`}function W(e){let t=e===`gaming`?q.images:J.images,n=document.getElementById(`score-board-container`);n&&(n.innerHTML=z(t))}function G(e,t){let n=e===`gaming`?q.images:J.images,r=document.getElementById(`game-board-content`);if(!r)return;let i=t/2;r.innerHTML=B(n,ue([...Array.from({length:i},(e,t)=>t),...Array.from({length:i},(e,t)=>t)])),r.classList.add(`cards-${t}`)}function K(e){let t=document.getElementById(`current-player-icon`);if(t)switch(e){case`blue`:t.classList.remove(`orange`),t.classList.add(`blue`);break;case`orange`:t.classList.remove(`blue`),t.classList.add(`orange`)}}var q={name:`gaming`,images:{cards:Z(`gaming`),win1:`src/img/gaming/win.svg`,tie:`src/img/gaming/tie.svg`,score1:`src/img/score1.svg`,score2:`src/img/score2.svg`}},J={name:`da-projects`,images:{cards:Z(`da-projects`),win1:`src/img/da-projects/win1.svg`,win2:`src/img/da-projects/win2.svg`,tie:`src/img/da-projects/tie.svg`,score1:`src/img/score1.svg`,score2:`src/img/score2.svg`}},Y={gaming:`./src/img/theme-dark.svg`,"da-projects":`./src/img/theme-light.svg`};function X(e){let t=document.getElementById(`theme-preview`);if(!t)return;let n=Y[e];n&&(t.src=n)}function ie(e){e.addEventListener(`change`,e=>{let t=e.target;t.checked&&X(t.value)})}function ae(){let e=document.querySelector(`input[name="theme"]:checked`);e&&X(e.value)}function oe(e){let t=e.closest(`label`);t?.addEventListener(`mouseenter`,()=>X(e.value)),t?.addEventListener(`mouseleave`,ae)}function se(){document.querySelectorAll(`input[name="theme"]`).forEach(ie)}function ce(){document.querySelectorAll(`input[name="theme"]`).forEach(oe)}function le(e){let t=document.getElementById(`game-screen`);t&&(t.classList.remove(`theme-gaming`,`theme-da-projects`),t.classList.add(`theme-${e}`))}function Z(e){let t=[];for(let n=1;n<=18;n++)t.push(`src/img/`+e+`/card`+n+`.svg`);return t}function ue(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function de(){document.getElementById(`game-board-content`)?.addEventListener(`click`,t=>{let n=t.target.closest(`.card`);n&&document.querySelectorAll(`.card.flipped`).length<2&&!n.classList.contains(`matched`)&&!n.classList.contains(`flipped`)&&(e(n,`flipped`),document.querySelectorAll(`.card.flipped`).length===2&&fe())})}function fe(){let e=document.querySelectorAll(`.card.flipped`);e[0].dataset.value===e[1].dataset.value?pe(e):ge(e)}function pe(e){me(x.theme),_e(e),he()}function me(e){x.player===`orange`?x.orangePlayerScore++:x.bluePlayerScore++,W(e)}function he(){let e=document.querySelectorAll(`.card.matched`),t=document.querySelectorAll(`.card`);e.length===t.length&&Ae()}function ge(e){setTimeout(()=>{ve(e),ye()},500)}function _e(t){t.forEach(t=>{e(t,`matched`),e(t,`flipped`)})}function ve(t){t.forEach(t=>e(t,`flipped`))}function ye(){be(),K(x.player)}function be(){x.player=x.player===`blue`?`orange`:`blue`}function xe(){document.getElementById(`quit-button`)?.addEventListener(`click`,Q)}function Q(){let t=document.getElementById(`exit-game`);t&&e(t,`closed`),Se()}function Se(){let e=document.getElementById(`no-button`),t=document.getElementById(`yes-button`);if(!(!e||!t))switch(x.theme){case`gaming`:e.textContent=`No, back to game `,t.textContent=`Yes, quit the game`;break;case`da-projects`:e.textContent=`Back to Game`,t.textContent=`Exit Game`}}function $(){document.getElementById(`exit-game`)?.classList.add(`closed`)}function Ce(){let e=document.getElementById(`no-button`),t=document.getElementById(`yes-button`);e?.addEventListener(`click`,$),t?.addEventListener(`click`,()=>{$(),i()})}function we(){document.addEventListener(`click`,e=>{let t=document.getElementById(`exit-game`),n=document.getElementById(`quit-button`);if(!t||t.classList.contains(`closed`))return;let r=e.target;!t.contains(r)&&!n?.contains(r)&&t.classList.add(`closed`)})}function Te(){let{bluePlayerScore:e,orangePlayerScore:t}=x;return e===t?`tie`:e>t?`blue`:`orange`}function Ee(e,t){let n=e===`gaming`?q.images:J.images;return t===`tie`?n.tie:e===`gaming`||t===`orange`?n.win1:n.win2??n.win1}function De(e){return e===`tie`?{line1:`It's a`,line2:`Draw`}:{line1:`The Winner is`,line2:e===`blue`?`Blue Player`:`Orange Player`}}function Oe(e,t){let{line1:n,line2:r}=De(t);return{line1:n,line2:r,line2Class:t===`tie`?`winner-screen__line2--draw`:`winner-screen__line2--${t}`,trophySrc:Ee(e,t),trophyClass:t===`tie`?`winner-screen__trophy-image--draw`:``}}function ke(){document.getElementById(`home-button`)?.addEventListener(`click`,()=>i())}function Ae(){let e=document.getElementById(`game-screen`);if(!e)return;let t=x.theme,n=Te();e.insertAdjacentHTML(`beforeend`,H(t)),setTimeout(()=>{let r=Oe(t,n);e.insertAdjacentHTML(`beforeend`,U(t,r)),ke()},2e3)}function je(){we(),r(`start`)}document.addEventListener(`DOMContentLoaded`,je);