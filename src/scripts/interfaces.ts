export interface GameSettings {
    theme: string;
    player: string;
    size: string;
    orangePlayerScore: number;
    bluePlayerScore: number;
}

export interface GameTheme {
    name: string;
    images: {
        cards: string[];
        win1: string;
        win2?: string;
        tie: string;
        score1: string;
        score2: string;
    }
}

/**
 * Describes one radio option within a settings fieldset.
 */
export interface RadioOption {
    value: string;
    label: string;
    checked?: boolean;
}

/**
 * The winning outcome of a finished game.
 */
export type Winner = "blue" | "orange" | "tie";

/**
 * The resolved content needed to render the winner screen.
 */
export interface WinnerScreenData {
    line1: string;
    line2: string;
    line2Class: string;
    trophySrc: string;
    trophyClass: string;
}