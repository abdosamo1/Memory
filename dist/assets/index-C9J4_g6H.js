(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)}var t={start:O,settings:R,game:z},n={start:()=>o(),settings:()=>s(),game:()=>c()};function r(e){let r=document.getElementById(`app-view`);r&&(r.innerHTML=t[e](),n[e]())}function i(){r(`settings`),T()}function a(){let t=document.getElementById(`play-arrow`),n=document.getElementById(`play-arrow-hover`);t&&n&&(e(t,`hidden`),e(n,`hidden`))}function o(){let e=document.getElementById(`start-button`);e?.addEventListener(`mouseenter`,a),e?.addEventListener(`mouseleave`,a),e?.addEventListener(`click`,()=>r(`settings`))}function s(){D(),p(),ae(),oe(),document.getElementById(`start-game-button`)?.addEventListener(`click`,()=>{y(),r(`game`),b()})}function c(){le(),ve(),xe()}function l(e,t){let n=e.querySelector(`input[type="radio"]`),r=e.querySelector(`.active-icon`);n&&r&&r.classList.toggle(`hidden`,n!==t)}function u(e){let t=e.closest(`.settings-screen-option`);t&&t.querySelectorAll(`label`).forEach(t=>l(t,e))}function d(e){let t=e.querySelector(`input[type="radio"]:checked`);e.querySelectorAll(`label`).forEach(e=>{let n=e.querySelector(`input[type="radio"]`);e.querySelector(`.active-icon`)?.classList.toggle(`hidden`,n!==t)})}function f(e,t){t.querySelectorAll(`label`).forEach(t=>{t.querySelector(`.active-icon`)?.classList.toggle(`hidden`,t!==e)})}function ee(e){e.querySelectorAll(`label`).forEach(t=>{t.addEventListener(`mouseenter`,()=>f(t,e))}),e.addEventListener(`mouseleave`,()=>d(e))}function p(){document.querySelectorAll(`.settings-screen-option`).forEach(ee)}function m(e){let t=document.getElementById(`selected-theme`);e&&t&&(t.textContent=`Game Theme`)}function h(e){let t=document.getElementById(`selected-player`);e&&t&&(t.textContent=e[0].toUpperCase()+e.slice(1)+` Player`)}function te(e){let t=document.getElementById(`selected-size`);e&&t&&(t.textContent=`Board-`+e+` Cards`)}function ne(){let e=document.getElementById(`selections-status`);e&&(e.classList.remove(`animate-expand`),e.offsetWidth,e.classList.add(`animate-expand`))}function re(e){document.querySelectorAll(`.default-splitter`).forEach(t=>t.classList.toggle(`hidden`,e)),document.querySelectorAll(`.active-splitter`).forEach(t=>t.classList.toggle(`hidden`,!e))}function g(e){let t=document.getElementById(`start-game-button`),n=document.getElementById(`start-game-active-icon`),r=document.getElementById(`start-game-disabled-icon`);t&&(t.disabled=!e),n?.classList.toggle(`hidden`,!e),r?.classList.toggle(`hidden`,e)}function _(e){re(e),g(e)}var v={theme:`Gaming theme`,player:`color`,size:`0`,orangePlayerScore:0,bluePlayerScore:0};function y(){let{theme:e,player:t,size:n}=S();e&&t&&n&&x(e,t,n)}function b(){let{theme:e,player:t,size:n}=v;W(t),H(e),U(e,parseInt(n)),se(e)}function x(e,t,n){v={theme:e,player:t,size:n,orangePlayerScore:0,bluePlayerScore:0}}function S(){return{theme:document.querySelector(`input[name="theme"]:checked`)?.value,player:document.querySelector(`input[name="player"]:checked`)?.value,size:document.querySelector(`input[name="board"]:checked`)?.value}}function C(){let{theme:e,player:t,size:n}=S();m(e),h(t),te(n),ne(),_(!!(e&&t&&n))}function w(){let e=document.getElementById(`selected-theme`),t=document.getElementById(`selected-player`),n=document.getElementById(`selected-size`);e&&(e.textContent=`Theme`),t&&(t.textContent=`Player`),n&&(n.textContent=`Size`)}function T(){document.querySelectorAll(`input[type="radio"]`).forEach(e=>{e.checked=e.defaultChecked}),document.querySelectorAll(`.settings-screen-option`).forEach(d),w(),_(!1);let e=document.querySelector(`input[name="theme"]:checked`)?.value;e&&J(e)}function E(e){e.addEventListener(`change`,e=>{let t=e.target;t.checked&&(u(t),C())})}function D(){document.querySelectorAll(`input[type="radio"]`).forEach(E)}function O(){return`
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
    </section>`}var k=[{value:`gaming`,label:`Gaming theme`,checked:!0},{value:`da-projects`,label:`DA Projects theme`}],A=[{value:`blue`,label:`Blue`},{value:`orange`,label:`Orange`}],j=[{value:`16`,label:`16 cards`},{value:`24`,label:`24 cards`},{value:`36`,label:`36 cards`}];function M(e,t){let n=t.checked?` checked`:``,r=t.checked?`active-icon`:`active-icon hidden`;return`
                        <label>
                            <input type="radio" name="${e}"${n} value="${t.value}"> ${t.label}
                            <img src="./src/img/active.svg" alt="active choice" class="${r}">
                        </label>`}function N(e,t,n,r,i){return`
                    <fieldset class="settings-screen-option">
                        <legend>
                            <img src="${e}" alt="${t}">
                            ${n}
                        </legend>${i.map(e=>M(r,e)).join(``)}
                    </fieldset>`}var P={gaming:`./src/img/theme-dark.svg`,"da-projects":`./src/img/theme-light.svg`};function F(e){return`<img id="theme-preview" src="${P[e]}" alt="theme">`}function I(){return`
                        <img src="./src/img/splitter.svg" alt="splitter" class="default-splitter">
                        <img class="hidden active-splitter" src="./src/img/splitter2.svg" alt="the other splitter">`}function L(e,t,n){return`
                        <p id="${e}">${t}</p>${n?I():``}`}function R(){return`
    <section class="setting-screen" id="setting-screen">
        <div class="section-content setting-screen-content">
            <div class="h2-container">
                <h2>Settings</h2>
                <img src="./src/img/underline.svg" alt="underline" class="settings-underline-icon">

            </div>
            <div class="settings-content">
                <div class="options-container">
                    ${N(`./src/img/palette.svg`,`theme`,`Game Themes`,`theme`,k)}
                    ${N(`./src/img/chess_pawn.svg`,`player`,`Choose Player`,`player`,A)}
                    ${N(`./src/img/style.svg`,`board icon`,`Board Size`,`board`,j)}
                </div>
                <div class="choices-container">
                    <div id="preview-theme">
                        ${F(`gaming`)}
                    </div>
                    <div id="selections-status" class="selections-status">
                        ${L(`selected-theme`,`Theme`,!0)}
                        ${L(`selected-player`,`Player`,!0)}
                        ${L(`selected-size`,`Size`,!1)}
                        <button class="button" disabled id="start-game-button">
                            <img class="hidden start-game-active-icon start-button-controller" id="start-game-active-icon" src="./src/img/smart_display.svg" alt="start">
                            <img id="start-game-disabled-icon" src="./src/img/smart_display_disabled.svg" alt="start" class="start-button-controller">
                            Start
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>`}function z(){return`
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
    </section>`}function B(e){return`
        <div id="score-board-player1" class="score-board-player">
            <img src="${e.score2}" alt="orange pawn">
            <div id="score-board-player2-score" class="player-score player1">${v.orangePlayerScore}</div>
        </div>
        <div id="score-board-player2" class="score-board-player">
            <img src="${e.score1}" alt="blue pawn">
            <div id="score-board-player1-score" class="player-score player2">${v.bluePlayerScore}</div>
        </div>
    `}function V(e,t){return t.map(t=>`
        <div class="card" data-value="card-${t}">
            <div class="card__inner">
                <div class="card__face"></div>
                <div class="card__face card__face--back">
                    <img class="card__image" src="${e.cards[t]}" alt="card-image">    
                </div>
            </div>
        </div>`).join(``)}function H(e){let t=e===`gaming`?G.images:K.images,n=document.getElementById(`score-board-container`);n&&(n.innerHTML=B(t))}function U(e,t){let n=e===`gaming`?G.images:K.images,r=document.getElementById(`game-board-content`);if(!r)return;let i=t/2;r.innerHTML=V(n,ce([...Array.from({length:i},(e,t)=>t),...Array.from({length:i},(e,t)=>t)])),r.classList.add(`cards-${t}`)}function W(e){let t=document.getElementById(`current-player-icon`);if(t)switch(e){case`blue`:t.classList.remove(`orange`),t.classList.add(`blue`);break;case`orange`:t.classList.remove(`blue`),t.classList.add(`orange`)}}var G={name:`gaming`,images:{cards:Z(`gaming`),win1:`src/img/dark_theme/win.svg`,tie:`src/img/dark_theme/tie.svg`,score1:`src/img/score1.svg`,score2:`src/img/score2.svg`}},K={name:`da-projects`,images:{cards:Z(`da-projects`),win1:`src/img/light_theme/win1.svg`,win2:`src/img/light_theme/win2.svg`,tie:`src/img/light_theme/tie.svg`,score1:`src/img/score1.svg`,score2:`src/img/score2.svg`}},q={gaming:`./src/img/theme-dark.svg`,"da-projects":`./src/img/theme-light.svg`};function J(e){let t=document.getElementById(`theme-preview`);if(!t)return;let n=q[e];n&&(t.src=n)}function Y(e){e.addEventListener(`change`,e=>{let t=e.target;t.checked&&J(t.value)})}function X(){let e=document.querySelector(`input[name="theme"]:checked`);e&&J(e.value)}function ie(e){let t=e.closest(`label`);t?.addEventListener(`mouseenter`,()=>J(e.value)),t?.addEventListener(`mouseleave`,X)}function ae(){document.querySelectorAll(`input[name="theme"]`).forEach(Y)}function oe(){document.querySelectorAll(`input[name="theme"]`).forEach(ie)}function se(e){let t=document.getElementById(`game-screen`);t&&(t.classList.remove(`theme-gaming`,`theme-da-projects`),t.classList.add(`theme-${e}`))}function Z(e){let t=[];for(let n=1;n<=18;n++)t.push(`src/img/`+e+`/card`+n+`.svg`);return t}function ce(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function le(){document.getElementById(`game-board-content`)?.addEventListener(`click`,t=>{let n=t.target.closest(`.card`);n&&document.querySelectorAll(`.card.flipped`).length<2&&!n.classList.contains(`matched`)&&!n.classList.contains(`flipped`)&&(e(n,`flipped`),document.querySelectorAll(`.card.flipped`).length===2&&ue())})}function ue(){let e=document.querySelectorAll(`.card.flipped`),t=e[0].dataset.value===e[1].dataset.value;document.getElementById(`score-board-container`),t?de(e):me(e)}function de(e){fe(v.theme),Q(e),pe()}function fe(e){v.player===`orange`?v.orangePlayerScore++:v.bluePlayerScore++,H(e)}function pe(){let e=document.querySelectorAll(`.card.matched`),t=document.querySelectorAll(`.card`);e.length===t.length&&Ce()}function me(e){setTimeout(()=>{he(e),ge()},500)}function Q(t){t.forEach(t=>{e(t,`matched`),e(t,`flipped`)})}function he(t){t.forEach(t=>e(t,`flipped`))}function ge(){_e(),W(v.player)}function _e(){v.player=v.player===`blue`?`orange`:`blue`}function ve(){document.getElementById(`quit-button`)?.addEventListener(`click`,ye)}function ye(){let t=document.getElementById(`exit-game`);t&&e(t,`closed`),be()}function be(){let e=document.getElementById(`no-button`),t=document.getElementById(`yes-button`);if(!(!e||!t))switch(v.theme){case`gaming`:e.textContent=`No, back to game `,t.textContent=`Yes, quit the game`;break;case`da-projects`:e.textContent=`Back to Game`,t.textContent=`Exit Game`}}function $(){document.getElementById(`exit-game`)?.classList.add(`closed`)}function xe(){let e=document.getElementById(`no-button`),t=document.getElementById(`yes-button`);e?.addEventListener(`click`,$),t?.addEventListener(`click`,()=>{$(),i()})}function Se(){document.addEventListener(`click`,e=>{let t=document.getElementById(`exit-game`),n=document.getElementById(`quit-button`);if(!t||t.classList.contains(`closed`))return;let r=e.target;!t.contains(r)&&!n?.contains(r)&&t.classList.add(`closed`)})}function Ce(){console.log(` game over `)}function we(){Se(),r(`start`)}document.addEventListener(`DOMContentLoaded`,we);