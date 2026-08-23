import "../styles/main.scss";
import * as app from "./index";

/**
 * Main initialization function. Binds global, document-level listeners that
 * only need to be registered once, then mounts the start screen.
 */
function init(): void {
  app.addQuitOverlayOutsideClickListener();
  app.renderScreen('start');
}

document.addEventListener("DOMContentLoaded", init);
