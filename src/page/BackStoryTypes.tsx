export interface BackStory {
  leadA: Character; // Slicker
  leadB: Character; // Homespun local
  town: string; // Where they come from
  city: string; // Where the slicker moved
}

export interface Character {
  name: String;
  gender: Gender;
}

interface Gender {
  pronoun1: string;
  pronoun2: string;
}
