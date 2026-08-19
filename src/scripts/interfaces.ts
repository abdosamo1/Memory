export interface GameSettings {
    theme: string;
    player: string;
    size: string;
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