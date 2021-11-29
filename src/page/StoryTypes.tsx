export interface Story {
  leadA: Character;
  leadB: Character;
  town: string;
  city: string;
  shop: string;
  luxury: string;
  contest: string;
  oldHelper: string;
  cop: string;
  meetCute: string;
  accident: string;
  heartWarmer: string;
  plot: Plot;
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
  ENTER_THE_CONTEST,
  SAVE_THE_BUSINESS
}

export interface Act1 {
  inciting_incident: string;
}

export interface Act2 {
  second_interaction: string[];
  start_drive: string[];
  continue_drive: string[];
  low_point: string[];
}

export interface Act3 {
  setup: string;
  final_push: string[];
}
