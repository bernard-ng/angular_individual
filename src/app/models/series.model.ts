export default interface Series {
    readonly id: number;
    name: string;
    season_released_at: string;
    season_count: number;
    description: string;
    review: string;
    photo: string;
    comments: object[];
}
