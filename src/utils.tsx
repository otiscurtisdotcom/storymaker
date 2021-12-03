export const getRandom = (list: any[]): any => {
  const randomNumber = Math.floor(Math.random() * list.length);
  return list[randomNumber];
}

export const capitalize = (word: string): string => {
  return word.replace(/^\w/, (c) => c.toUpperCase());
}
