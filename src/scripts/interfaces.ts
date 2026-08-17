export interface GameSettings {
    theme: string;
    player: string;
    size: string;
}

export interface GameTheme {
    name: string;
    font: string;
    images: {
        cards: URL[];
        win1: URL;
        win2?: URL;
        tie: URL;
        score1: URL;
        score2: URL;
    }
    colors: {
        background: string;
        primary: string;
        secondary: string;
        text: string;
    }
}