export interface Games extends Scores {
    id?: string;
    created_at?: string;
    user_id?: string;
}

export interface Scores {
    player_score: number;
    computer_score: number;
}