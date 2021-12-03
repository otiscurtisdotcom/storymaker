import { capitalize } from "../utils";
import { getAct2 } from "./getAct2";
import { getAct3 } from "./getAct3";
import { Act1, Plot, Story } from "./StoryTypes";

const getStoryRows = (story: Story): string[] | undefined => {
  const act1 = getAct1(story);
  const act2 = getAct2(story);
  const act3 = getAct3(story);
  
  if (act1 && act2 && act3) {
    return [
      ////////
      `- Act I -`,
      ////////

      `Meet ${story.leadA.name}. ${capitalize(story.leadA.pronoun1)}'s a high-flyer in the ${story.leadA.industry} industry in ${story.city}.`,
      `${capitalize(story.leadA.pronoun1)} works really long hours to make the big bucks, and so has no time for a relationship.`,
      `This year, in early December, ${story.leadA.pronoun1} needs to return to ${story.leadA.pronoun3} small home-town of ${story.town},`,
      `${act1.inciting_incident}.`,
      `...`,

      `${story.leadB.name} never left ${story.town},`,
      `after ${story.leadB.pronoun1} inherited the ${story.shop} from ${story.leadB.pronoun3} parents, who died ${story.accident}.`,
      `Christmas has always been special for ${story.leadB.name}, because it reminds ${story.leadB.pronoun2} of them.`,
      `The ${story.shop} is not doing well financially,`,
      `${story.leadB.name} explains this to ${story.leadB.pronoun3} only employee, ${story.oldHelper}, an old friend of ${story.leadB.pronoun3} parents.`,
      `...`,

      `${story.leadA.name} arrives back in ${story.town} and is instantly shocked at how friendly everyone is compared to ${story.city}.`,
      `In ${story.leadA.pronoun3} first night in town, ${story.meetCute}`,
      `They get in a big argument, exchange insults, and ${story.leadB.name} calls ${story.leadA.name} rude.`,
      `...`,

      ////////
      `- Act II -`,
      ////////

      `The following morning, ${story.leadA.name} arrives at the ${story.shop} and ${story.leadB.name} is surprised and angry.`,
      `${story.leadA.name} explains why ${story.leadA.pronoun1} is here:`,
      ...act2.second_interaction,
      `...`,

      `That evening, despite being low on funds, ${story.leadB.name} ${story.heartWarmer} at the ${story.shop}.`,
      `Everyone in ${story.town} attends, including ${story.leadA.name}, and the place is filled with Christmas spirit.`,
      `...`,

      ...act2.start_drive,
      `...`,

      ...act2.continue_drive,
      `...`,

      ...act2.low_point,
      `...`,

      ////////
      `- Act III -`,
      ////////

      `${story.oldHelper} convinces ${story.leadB.name} and ${story.leadA.name} that they should ${act3.setup}`,
      `it's what ${story.leadB.pronoun3} parents would have wanted.`,
      `...`,

      ...act3.final_push,
      `...`,

      `${story.leadB.name} and ${story.leadA.name} are both ecstatic`,
      `They realise they are in love, and have been all along.`,
      `They kiss.`,
      `- THE END -`
    ];
  }
}

const getAct1 = (story: Story): Act1 => {
  if (story.plot === Plot.SAVE_THE_BUSINESS) {
    return {
      inciting_incident: `to save the local ${story.shop}`,
    };
  } else if (story.plot === Plot.DESTROY_THE_BUSINESS) {
    return {
      inciting_incident: `to demolish the local ${story.shop}`,
    };
  } else {
    // (ENTER THE CONTEST)
    return {
      inciting_incident: `to enter the ${story.shop}'s annual ${story.contest}`,
    };
  }
}

export default getStoryRows;
