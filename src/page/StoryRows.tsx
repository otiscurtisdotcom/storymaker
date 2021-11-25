import { Act1, Act2, Act3, Plot, Story } from "./StoryTypes";

export const getStoryRows = (story: Story): string[] => {
  return [
    ////////
    `- Act I -`,
    ////////

    `Meet ${story.leadA.name}. ${capitalize(story.leadA.pronoun1)}'s a high-flyer at the big ${story.leadA.place_of_work} in ${story.city}.`,
    `${capitalize(story.leadA.pronoun1)} works really long hours to make the big bucks.`,
    `This year, in early December, ${story.leadA.pronoun1} needs to return to ${story.leadA.pronoun3} small home-town of ${story.town},`,
    `${getAct1(story).inciting_incident}.`,
    `...`,

    `${story.leadB.name} never left ${story.town},`,
    `after ${story.leadB.pronoun1} inherited the ${story.leadB.place_of_work} from ${story.leadB.pronoun3} parents, who tragically died in a helicopter accident.`,
    `Christmas has always been special for ${story.leadB.name}, because it reminds ${story.leadB.pronoun3} of them.`,
    `The ${story.leadB.place_of_work} is not doing well financially,`,
    `${story.leadB.name} explains this to ${story.leadB.pronoun3} only employee, ${story.old_helper}, an old friend of ${story.leadB.pronoun3} parents.`,
    `...`,

    `${story.leadA.name} arrives back in ${story.town} and is instantly shocked at how friendly everyone is compared to ${story.city}.`,
    `In ${story.leadA.pronoun3} first night in town, ${getAct1(story).meet_cute}`,
    `...`,

    ////////
    `- Act II -`,
    ////////

    `The following morning, ${story.leadA.name} arrives at the ${story.leadB.place_of_work} and ${story.leadB.name} is surprised and angry.`,
    `${story.leadA.name} explains why ${story.leadA.pronoun1} is here:`,
    ...getAct2(story).second_interaction,
    `...`,

    `That evening, despite being low on funds, ${story.leadB.name} ${getAct2(story).heart_warmer} at the ${story.leadB.place_of_work}.`,
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
  // TODO Randomise
  const meet_cute = `${story.leadA.name} accidentally kicks ${story.leadB.name}'s dog, and they get in a big arguement and call each other names.`;

  if (story.plot === Plot.SAVE_THE_BUSINESS) {
    return {
      inciting_incident: `to save the local ${story.leadB.place_of_work}`,
      meet_cute,
    };
  } else if (story.plot === Plot.DESTROY_THE_BUSINESS) {
    return {
      inciting_incident: `to demolish the local ${story.leadB.place_of_work}`,
      meet_cute,
    };
  } else {
    // (ENTER THE CONTEST)
    return {
      inciting_incident: `to enter the ${story.leadB.place_of_work}'s annual ${story.contest}`,
      meet_cute,
    };
  }
}

const getAct2 = (story: Story): Act2 => {
  // TODO Randomise
  const heart_warmer = `gives out presents to blind children`;

  if (story.plot === Plot.SAVE_THE_BUSINESS) {
    return {
      second_interaction: [
        `Because ${story.leadA.pronoun1} heard the ${story.leadB.place_of_work} was going out of business,`,
        `and wanted to see if ${story.leadA.pronoun1} could help save it,`,
        `because ${story.leadA.pronoun1} always used to love it as a child`,
      ],
      heart_warmer,
      start_drive: [
        `${story.leadA.name} returns to ${story.city},`,
        `to speak to ${story.leadA.pronoun3} boss at the ${story.leadA.place_of_work}.`,
      ],
      continue_drive: [
        `Initially ${story.leadA.name} manages to convince the boss of the charms of ${story.town} and it's ${story.leadB.place_of_work}.`,
        `But they refuse to give the money needed to save it`,
      ],
      low_point: [
        `${story.leadA.name} quits on the spot, and returns to ${story.town} empty handed.`
      ],
    };
  } else if (story.plot === Plot.DESTROY_THE_BUSINESS) {
    return {
      second_interaction: [
        `Because ${story.leadA.pronoun3} ${story.leadA.place_of_work} is considering buying out the ${story.leadB.place_of_work} when it goes under,`,
        `and turn it into luxury housing,`,
        `and ${story.leadA.pronoun1} is here to see if it's a good investment.`,
      ],
      heart_warmer,
      start_drive: [
        `${story.leadA.name} returns to ${story.city},`,
        `to speak to ${story.leadA.pronoun3} boss at the ${story.leadA.place_of_work}.`,
      ],
      continue_drive: [
        `${story.leadA.name} tries to convince the boss that buying the ${story.town} ${story.leadB.place_of_work} would be a bad investment.`,
        `The boss disagrees, and says they will demolish the ${story.leadB.place_of_work} next week`,
      ],
      low_point: [
        `${story.leadA.name} quits on the spot, and returns to ${story.town} empty handed.`
      ],
    };
  } else {
    // (ENTER THE CONTEST)
    return {
      second_interaction: [
        `${capitalize(story.leadA.pronoun1)} wants to enter the ${story.leadB.place_of_work}'s ${story.contest},`,
        `because it reminds ${story.leadA.pronoun2} of ${story.leadA.pronoun3} childhood.`,
        `${story.leadB.name} explains that there won't be a ${story.contest}, because the ${story.leadB.place_of_work} can't afford to put it on,`,
        `and anyway, people just don't care about Christmas like they used to.`,
      ],
      heart_warmer,
      start_drive: [
        `${story.leadA.name} convinces ${story.leadB.name} they can raise the funds they need,`,
        `by having a special Christmas-themed sale at the ${story.leadB.place_of_work},`,
        `which will raise enough to save the business and hold the ${story.contest} once again.`
      ],
      continue_drive: [
        `The people of ${story.town} come together to raise the money,`,
        `united by the spirit of Christmas, everyone is preparing for the ${story.contest}.`,
      ],
      low_point: [
        `But the local cop shuts it down for not having the right permits`,
      ],
    };
  }
}

const getAct3 = (story: Story): Act3 => {
  if (story.plot === Plot.SAVE_THE_BUSINESS) {
    return {
      final_push: [
        ``
      ],
    };
  } else if (story.plot === Plot.DESTROY_THE_BUSINESS) {
    return {
      final_push: [
        ``
      ],
    };
  } else {
    // (ENTER THE CONTEST)
    return {
      final_push: [
        `${story.old_helper} convinces ${story.leadB.name} that they should hold the ${story.contest} anyway,`,
        `it's what ${story.leadB.pronoun3} parents would have wanted.`,
        `The ${story.contest} goes ahead, and everyone in ${story.town} attends`,
        `Just as they are getting started, the police show up to call it off.`,
        `However, when they see the Christmas spirit of the whole town,`,
        `they decide to let it go ahead anyway`,
      ],
    };
  }
}
