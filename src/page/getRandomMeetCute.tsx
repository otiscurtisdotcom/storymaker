import { Character } from "./StoryTypes";

const getRandomMeetCute = (leadA: Character, leadB: Character) => {
  const meetCutes = [
    `${leadA.name} accidentally kicks ${leadB.name}'s dog.`,
    `${leadA.name} takes taxi that ${leadB.name} had hailed.`,
    `${leadA.name} bumps into ${leadB.name} as ${leadA.pronoun1} enters the coffee shop while on ${leadA.pronoun3} phone.`,
    `${leadA.name} steals ${leadB.name}'s parking spot.`,
    `${leadA.name} spills hot chocolate all over ${leadB.name}.`,
    `${leadA.name} drops ${leadA.pronoun3} wallet and they both bend down to pick it up, clashing heads.`,
    `${leadA.name} opens ${leadA.pronoun3} car door without looking at it smacks into ${leadB.name} as ${leadB.pronoun1} cycle past.`,
    `${leadA.name} takes ${leadB.name}'s seat on the train.`,
    `${leadA.name} ignores ${leadB.name}'s plea to hold the lift door open.`,
    `${leadA.name} kicks football into ${leadB.name}'s head while playing five-a-side.`,
    `As ${leadB.name} is jogging in the park, ${leadA.name} sprints past ${leadB.pronoun2} too close causing ${leadB.name} to fall into the pond.`,
    `${leadA.name} bumps ${leadA.pronoun3} shopping trolley into ${leadB.name}'s.`,
    `${leadA.name} pushes ahead of ${leadB.name} in the supermarket queue.`,
    `${leadA.name} orders before ${leadB.name} at the bar.`,
    `${leadA.name} chooses the tree ${leadB.name} was about to go for at the tree farm.`,
    `${leadA.name} catches ${leadB.name}'s scarf in the door by shutting it too quick.`,
    `${leadA.name} slips on icy pavement, knocking over ${leadB.name}.`,
    `${leadA.name} pays more than the sticker price for the last toy at a toyshop, leaving ${leadB.name} empty handed.`,
    `${leadA.name} changes the song in the diner, it was ${leadB.name}'s favourite.`,
    `${leadA.name} won't let ${leadB.name} jump the toilet queue even though ${leadB.pronoun1}'s desperate to go.`,
    `${leadA.name} won't give money to a busker even though ${leadA.pronoun1} clearly have loads and the busker is ${leadB.name}'s friend.`,
    `${leadA.name} won't take a flyer from ${leadB.name} and just walks right past ${leadB.pronoun2}.`,
    `${leadA.name} hits ${leadB.name} with a newspaper as they try to swat a fly.`,
    `${leadA.name} writes ${leadA.pronoun3} name with pee in the snow on ${leadB.name}'s drive.`,
    `${leadA.name} throws a snowball which hits ${leadB.name} in the face.`,
    `${leadA.name} buys all the mince pies in the shop just as ${leadB.name} arrives to buy some.`,
    `${leadA.name} knocks over ${leadB.name}'s snowman with ${leadA.pronoun3} car.`,
    `${leadA.name} and ${leadB.name} both go for the last can of cranberry sauce on the supermarket shelf.`,
    `${leadA.name} crashes ${leadA.pronoun3} shopping trolley into ${leadB.name}'s.`,
    `${leadA.name} puts ${leadA.pronoun3} hand out to hail a cab and accidentally punches ${leadB.name} in the face.`,
    `${leadA.name} kneels to tie ${leadA.pronoun3} shoe and ${leadB.name} trips over them.`,
    `${leadA.name} almost runs ${leadB.name} over because ${leadA.pronoun1} was looking at ${leadA.pronoun3} phone.`,
    `${leadA.name} gets the last pastry in the bakery, which ${leadB.name} was looking forward to all day.`,
    `${leadA.name} hits a baseball through ${leadB.name}'s window.`,
    `${leadA.name} picks up ${leadB.name}'s phone from the coffee shop table by mistake.`,
    `${leadA.name} takes a shortcut and tramples through ${leadB.name}'s flower bed.`,
    `${leadA.name} picks up ${leadB.name}'s tab when ${leadB.name} can't afford to pay for a drink.`,
    `${leadA.name} makes fun of ${leadB.name}'s badly decorated tree.`,
    `${leadA.name} loses control of ${leadA.pronoun3} scooter and crashes into ${leadB.name}'s car.`,
    `${leadA.name} crashes into ${leadB.name} while trying to do an ice-skating trick.`,
    `${leadB.name} accidentally drops ${leadB.pronoun3} shopping bag in the road and ${leadA.name} runs over it.`,
  ];

  return meetCutes[Math.floor(Math.random() * meetCutes.length)];
}

export default getRandomMeetCute;