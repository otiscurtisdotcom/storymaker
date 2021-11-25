export interface Story {
  leadA: Character; // Slicker
  leadB: Character; // Homespun local
  town: string; // Where they come from
  city: string; // Where the slicker moved
  plot: Plot;
  contest: string; // For use in the contest plot
  old_helper: string; // The old employee of the local business
}

export interface Character {
  name: string;
  pronoun1: string;
  pronoun2: string;
  pronoun3: string;
  place_of_work: string;
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
  final_push: string[];
}
