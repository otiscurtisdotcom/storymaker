import { Act1, Act2, Act3, Plot, Story } from "./StoryTypes";

const getStoryRows = (story: Story): string[] => {
  return [
    ////////
    `- Act I -`,
    ////////

    `Meet ${story.leadA.name}. ${capitalize(story.leadA.pronoun1)}'s a high-flyer in the ${story.leadA.industry} industry in ${story.city}.`,
    `${capitalize(story.leadA.pronoun1)} works really long hours to make the big bucks, and so has no time for a relationship.`,
    `This year, in early December, ${story.leadA.pronoun1} needs to return to ${story.leadA.pronoun3} small home-town of ${story.town},`,
    `${getAct1(story).inciting_incident}.`,
    `...`,

    `${story.leadB.name} never left ${story.town},`,
    `after ${story.leadB.pronoun1} inherited the ${story.shop} from ${story.leadB.pronoun3} parents, who tragically died ${story.accident}.`,
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
    ...getAct2(story).second_interaction,
    `...`,

    `That evening, despite being low on funds, ${story.leadB.name} ${story.heartWarmer} at the ${story.shop}.`,
    `Everyone in ${story.town} attends, including ${story.leadA.name}, and the place is filled with Christmas spirit.`,
    `...`,

    ...getAct2(story).start_drive,
    `...`,

    ...getAct2(story).continue_drive,
    `...`,

    ...getAct2(story).low_point,
    `...`,

    ////////
    `- Act III -`,
    ////////

    `${story.oldHelper} convinces ${story.leadB.name} and ${story.leadA.name} that they should ${getAct3(story).setup}`,
    `it's what ${story.leadB.pronoun3} parents would have wanted.`,
    `...`,

    ...getAct3(story).final_push,
    `...`,

    `${story.leadB.name} and ${story.leadA.name} realise they are in love.`,
    `They kiss.`,
    `- THE END -`
  ];
}

const capitalize = (word: string): string => {
  return word.replace(/^\w/, (c) => c.toUpperCase());
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

const getAct2 = (story: Story): Act2 => {
  if (story.plot === Plot.SAVE_THE_BUSINESS) {
    return {
      second_interaction: [
        `Because ${story.leadA.pronoun1} heard the ${story.shop} was going out of business,`,
        `and wanted to see if ${story.leadA.pronoun1} could help save it,`,
        `because ${story.leadA.pronoun1} always used to love it as a child`,
      ],
      start_drive: [
        `${story.leadA.name} returns to ${story.city},`,
        `to speak to ${story.leadA.pronoun3} boss at the ${story.leadA.industry} firm.`,
      ],
      continue_drive: [
        `Initially ${story.leadA.name} manages to convince the boss of the charms of ${story.town} and it's ${story.shop}.`,
        `But they refuse to give the money needed to save it`,
      ],
      low_point: [
        `${story.leadA.name} quits on the spot, and returns to ${story.town} empty handed.`
      ],
    };
  } else if (story.plot === Plot.DESTROY_THE_BUSINESS) {
    return {
      second_interaction: [
        `Because ${story.leadA.pronoun3} ${story.leadA.industry} company is considering buying out the ${story.shop} when it goes under,`,
        `and turn it into ${story.luxury}`,
        `and ${story.leadA.pronoun1} is here to see if it's a good investment.`,
      ],
      start_drive: [
        `${story.leadA.name} returns to ${story.city},`,
        `to speak to ${story.leadA.pronoun3} boss at the ${story.leadA.industry} firm.`,
      ],
      continue_drive: [
        `${story.leadA.name} tries to convince the boss that buying the ${story.town} ${story.shop} would be a bad investment.`,
        `The boss disagrees, and says they will demolish the ${story.shop} next week`,
      ],
      low_point: [
        `${story.leadA.name} quits on the spot, and returns to ${story.town} empty handed.`
      ],
    };
  } else {
    // (ENTER THE CONTEST)
    return {
      second_interaction: [
        `${capitalize(story.leadA.pronoun1)} wants to enter the ${story.shop}'s ${story.contest},`,
        `because it reminds ${story.leadA.pronoun2} of ${story.leadA.pronoun3} childhood.`,
        `${story.leadB.name} explains that there won't be a ${story.contest}, because the ${story.shop} can't afford to put it on,`,
        `and anyway, people just don't care about Christmas like they used to.`,
      ],
      start_drive: [
        `${story.leadA.name} convinces ${story.leadB.name} they can raise the funds they need,`,
        `by having a special Christmas-themed sale at the ${story.shop},`,
        `which will raise enough to save the business and hold the ${story.contest} once again.`
      ],
      continue_drive: [
        `The people of ${story.town} come together to raise the money,`,
        `united by the spirit of Christmas, everyone is preparing for the ${story.contest}.`,
      ],
      low_point: [
        `But the grumpy local cop, ${story.cop}, shuts it down for not having the right permits.`,
      ],
    };
  }
}

const getAct3 = (story: Story): Act3 => {
  if (story.plot === Plot.SAVE_THE_BUSINESS) {
    return {
      setup: `put on a talent show to save the ${story.shop},`,
      final_push: [
        `Everyone from ${story.town} attends the magical night,`,
        `where the townspeople show off their quirky talents.`,
        `Even the grumpy local cop, ${story.cop}, who plays the piano.`,
        `At the end of the night, ${story.leadB.name} and ${story.leadA.name} have saved enough money to keep the ${story.shop} in business.`,
      ],
    };
  } else if (story.plot === Plot.DESTROY_THE_BUSINESS) {
    return {
      setup: `protect the ${story.shop},`,
      final_push: [
        `As the bulldozers arrive,`,
        `${story.leadB.name}, ${story.leadA.name} and the people of ${story.town} sing Christmas carols outside the ${story.shop},`,
        `Even the grumpy local cop, ${story.cop}.`,
        `${story.leadA.name}'s boss from the ${story.leadA.industry} company jumps down from one of the bulldozers smoking a cigar.`,
        `Overwhelmed by the spirit of Christmas in the town,`,
        `the demolition is called off,`,
        `and they agree to give ${story.leadB.name} and ${story.leadA.name} the money they need to keep the ${story.shop} in business.`,
      ],
    };
  } else {
    // (ENTER THE CONTEST)
    return {
      setup: `hold the ${story.contest} anyway,`,
      final_push: [
        `The ${story.contest} goes ahead, and everyone in ${story.town} attends.`,
        `Just as they are getting started, ${story.cop} and the other cops show up to call it off.`,
        `However, when they see the Christmas spirit of the whole town,`,
        `they decide to let it go ahead anyway.`,
        `${story.leadA.name} wins the contest,`,
        `but more importantly everyone has fun.`,
      ],
    };
  }
}

export default getStoryRows;
