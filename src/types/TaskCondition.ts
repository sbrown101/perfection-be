export type Season = 'spring' | 'summer' | 'fall' | 'winter';
export type Weather = 'sun' | 'rain' | 'storm' | 'snow' | 'wind';
export type Location = 'farm' | 'mountain' | 'mountain_lake' |  'beach' | 'forest' | 'mutant_bug_lair' | 'ginger_island' | string;

export interface TaskCondition {
    seasons?: Season[];
    weather?: Weather[];
    locations?: Location[];
    time?: { start: number; end: number }[];
}
