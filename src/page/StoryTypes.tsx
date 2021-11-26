export interface Story {
  leadA: Character;
  leadB: Character;
  town: string;
  city: string;
  plot: Plot;
  shop: string;
  contest: string;
  oldHelper: string;
}

export interface Character {
  name: string;
  pronoun1: string;
  pronoun2: string;
  pronoun3: string;
  industry?: string;
}

export enum Plot {
  DESTROY_THE_BUSINESS,
  SAVE_THE_BUSINESS,
  ENTER_THE_CONTEST
}

export interface Act1 {
  inciting_incident: string;
  meet_cute: string;
}

export interface Act2 {
  second_interaction: string[];
  heart_warmer: string;
  start_drive: string[];
  continue_drive: string[];
  low_point: string[];
}

export interface Act3 {
  setup: string;
  final_push: string[];
}
