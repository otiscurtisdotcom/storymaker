import { BackStory } from "./BackStoryTypes";

const capitalize = (word: string): string => {
  return word.replace(/^\w/, (c) => c.toUpperCase());
}

export const getStoryRows = (backStory: BackStory): string[] => {
  return [
    `Meet ${backStory.leadA.name}. The city slicker from ${backStory.city}.`,
    `${capitalize(backStory.leadA.gender.pronoun1)} works in a bank.`,
    `test 3`
  ];
}
