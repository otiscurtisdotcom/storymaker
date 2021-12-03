import { getRandom } from "../utils";
import { Act3, Plot, Story } from "./StoryTypes";

export const getAct3 = (story: Story): Act3 => {
  return getRandom(getAct3Array(story));
}

export const getAct3Array = (story: Story): Act3[] => {
  if (story.plot === Plot.SAVE_THE_BUSINESS) {
    const setup = `put on a talent show to save the ${story.shop},`;
    return [
      {
        setup,
        final_push: [
          `Everyone from ${story.town} attends the magical night,`,
          `where the townspeople show off their quirky talents.`,
          `Even the grumpy local cop, ${story.cop}, who plays the piano.`,
          `At the end of the night, ${story.leadB.name} and ${story.leadA.name} have saved enough money to keep the ${story.shop} in business.`,
        ],
      },
      {
        setup,
        final_push: [
          ``,
        ],
      },
      {
        setup,
        final_push: [
          ``,
        ],
      },
      {
        setup,
        final_push: [
          ``,
        ],
      },
      {
        setup,
        final_push: [
          ``,
        ],
      },
    ];
  } else if (story.plot === Plot.DESTROY_THE_BUSINESS) {
    const setup = `protect the ${story.shop},`;
    return [
      {
        setup,
        final_push: [
          `As the bulldozers arrive,`,
          `${story.leadB.name}, ${story.leadA.name} and the people of ${story.town} sing Christmas carols outside the ${story.shop},`,
          `Even the grumpy local cop, ${story.cop}.`,
          `${story.leadA.name}'s boss from the ${story.leadA.industry} company jumps down from one of the bulldozers smoking a cigar.`,
          `Overwhelmed by the spirit of Christmas in the town,`,
          `the demolition is called off,`,
          `and they agree to give ${story.leadB.name} and ${story.leadA.name} the money they need to keep the ${story.shop} in business.`,
        ],
      },
      {
        setup,
        final_push: [
          ``,
        ],
      },
      {
        setup,
        final_push: [
          ``,
        ],
      },
      {
        setup,
        final_push: [
          ``,
        ],
      },
      {
        setup,
        final_push: [
          ``,
        ],
      },
    ];
  } else {
    // (ENTER THE CONTEST)
    const setup = `hold the ${story.contest} anyway,`;
    return [
      {
        setup,
        final_push: [
          `The ${story.contest} goes ahead, and everyone in ${story.town} attends.`,
          `Just as they are getting started, ${story.cop} and the other cops show up to call it off.`,
          `However, when they see the Christmas spirit of the whole town,`,
          `they decide to let it go ahead anyway.`,
          `${story.leadA.name} wins the contest,`,
          `but more importantly everyone has fun.`,
        ],
      },
      {
        setup,
        final_push: [
          ``,
        ],
      },
      {
        setup,
        final_push: [
          ``,
        ],
      },
      {
        setup,
        final_push: [
          ``,
        ],
      },
      {
        setup,
        final_push: [
          ``,
        ],
      },
    ];
  }
}