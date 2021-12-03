import { capitalize, getRandom } from "../utils";
import { Act2, Plot, Story } from "./StoryTypes";

export const getAct2 = (story: Story): Act2 => {
  return getRandom(getAct2Array(story));
}

const getAct2Array = (story: Story): Act2[] => {
  const helperIll: Act2 = {
    second_interaction: [],
    start_drive: [
      `${story.leadA.name} goes back to ${story.city},`,
      `to speak to ${story.leadA.pronoun3} boss at the ${story.leadA.industry} firm.`,
    ],
    continue_drive: [
      `In the spirit of Christmas, the boss agrees to give the money needed,`,
      `and ${story.leadA.name} returns to ${story.town} to give the good news.`,
    ],
    low_point: [
      `However, on ${story.leadA.pronoun3} arrival,`,
      `${story.leadB.name} informs ${story.leadA.pronoun2} that ${story.oldHelper} has fallen ill and requires an expensive operation.`,
      `${story.leadA.name} decides the money should go to ${story.oldHelper}'s medical bills,`,
      `leaving them back at square one.`,
    ],
  } 

  if (story.plot === Plot.SAVE_THE_BUSINESS) {
    const second_interaction = [
      `Because ${story.leadA.pronoun1} heard the ${story.shop} was going out of business,`,
      `and wanted to see if ${story.leadA.pronoun1} could help save it,`,
      `because ${story.leadA.pronoun1} always used to love it as a child.`,
    ];

    return [
      {
        second_interaction,
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
      },
      {
        second_interaction,
        start_drive: [
          `${story.leadA.name} asks if there any local business people who could help fund the ${story.shop},`,
          `${story.oldHelper} says there is an old millionaire who lives just outside of town,`,
          `who made his money turning the local orphanage into ${story.luxury}.`
        ],
        continue_drive: [
          `Filled with the spirit of Christmas, ${story.leadA.name} and ${story.leadB.name} go and visit the old man,`,
          `believing they can convince him to save the ${story.shop}.`,
          `The old man is plesantly surprised, as he hasn't had guests in over 30 years.`
        ],
        low_point: [
          `But as soon as ${story.leadB.name} mentions the money,`,
          `he kicks them out, saying that he hates ${story.town}, and all the local people.`,
        ],
      },
      {
        second_interaction,
        start_drive: [
          `${story.leadA.name} teaches ${story.leadB.name} and ${story.oldHelper} about raising money online.`,
          `Being such small-town folk, they have never heard of such a thing,`,
          `but ${story.leadA.name} is from ${story.city}, so ${story.leadA.pronoun1} understands how the modern world works.`
        ],
        continue_drive: [
          `He sets up a GoFundMe for them and goes to the press, using his contacts in the ${story.leadA.industry} industry.`,
          `The journalists agree to do a story on the plight of the ${story.shop}.`,
        ],
        low_point: [
          `But on the day the press was supposed to show up in ${story.town},`,
          `a freak snowstorm hits ${story.city}, and so the press goes there instead.`,
        ],
      },
      {
        second_interaction,
        start_drive: [
          `${story.leadA.name} and ${story.leadB.name} decide to hold a raffle in the town square,`,
          `to raise money for the ${story.shop}.`,
        ],
        continue_drive: [
          `The townsfolk of ${story.town} all come together to donate to donate prizes:`,
          `${story.oldHelper} bakes a cake in shape of a snowman,`,
          `${story.leadA.name} even manages to get some high-end gifts from ${story.leadA.pronoun3} friends at the ${story.leadA.industry} firm.`,
        ],
        low_point: [
          `But just as the raffle is about to start,`,
          `${story.cop} the grumpy local cop shows up,`,
          `and says they can't operate a raffle without a permit.`,
        ],
      },
      {
        ...helperIll,
        second_interaction
      }
    ];
  } else if (story.plot === Plot.DESTROY_THE_BUSINESS) {
    const second_interaction = [
      `Because ${story.leadA.pronoun3} ${story.leadA.industry} company wants to buy out the ${story.shop} when it goes under,`,
      `and turn it into ${story.luxury},`,
      `and ${story.leadA.pronoun1} is here to see if it's a good investment.`,
    ];

    return [
      {
        second_interaction,
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
      },
      {
        second_interaction,
        start_drive: [
          `${story.leadA.name} decides to take the townsfolk of ${story.town} to ${story.city}.`,
          `They all pile into a minibus, and sing jolly Christmas songs the whole way there.`,
          `Old ${story.oldHelper} even does a version of Last Christmas.`
        ],
        continue_drive: [
          `When the townsfolk of ${story.town} arrive in ${story.city},`,
          `${story.leadA.name} takes them to the ${story.leadA.industry} firm,`,
          `where they continue to sing and hold banners saving "Save our ${story.shop}.`,
        ],
        low_point: [
          `But the boss of the ${story.leadA.industry} business is not impressed,`,
          `tells them that the ${story.shop} is going to be turned into ${story.luxury},`,
          `and there's nothing they can do about it.`,
        ],
      },
      {
        second_interaction,
        start_drive: [
          `${story.leadA.name} returns to ${story.city},`,
          `to sneak into the ${story.leadA.industry} company's office,`,
          `and change their plans for the ${story.shop}.`,
        ],
        continue_drive: [
          `${capitalize(story.leadA.pronoun1)} uses ${story.leadA.pronoun3} key card to get past security,`,
          `and finds the file in a filing cabinet.`,
        ],
        low_point: [
          `But just as ${story.leadA.pronoun1} does so, the boss walks in.`,
          `And says ${story.leadA.name} needs to pack up ${story.leadA.pronoun3} things.`,
          `${story.leadA.pronoun1}'s fired.`,
        ],
      },
      {
        second_interaction,
        start_drive: [
          `${story.leadA.name} suggests throwing a good old-fashioned ${story.contest} to raise funds.`,
          `${story.oldHelper} says there hasn't been one of those in ${story.town} for years.`,
          `${story.leadB.name} likes the idea and offers to host it at the ${story.shop}.`
        ],
        continue_drive: [
          `The next day, they excitedly get everything together for the traditional Christmas ${story.contest} at the ${story.shop},`,
          `but nobody shows up.`
        ],
        low_point: [
          `They're too busy doing TikToks.`,
          `Has everyone forgotten the true meaning of Christmas?`,
        ],
      },
      {
        ...helperIll,
        second_interaction
      }
    ];
  } else {
    // (ENTER THE CONTEST)
    const second_interaction = [
      `${capitalize(story.leadA.pronoun1)} wants to enter the ${story.shop}'s ${story.contest},`,
      `because it reminds ${story.leadA.pronoun2} of ${story.leadA.pronoun3} childhood.`,
      `${story.leadB.name} explains that there won't be a ${story.contest}, because the ${story.shop} can't afford to put it on,`,
      `and anyway, people just don't care about Christmas like they used to.`,
    ];

    return [
      {
        second_interaction,
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
      },
      {
        second_interaction,
        start_drive: [
          `${story.leadA.name} convinces ${story.leadB.name} to contact ${story.leadB.pronoun3} suppliers about sponsoring the contest.`,
          `They go through a long list of suppliers for the ${story.shop},`,
          `no luck.`,
        ],
        continue_drive: [
          `The last name on the list is a local millionaire who owns ${story.luxury}`,
          `He agrees that his business can sponsor the ${story.contest}.`
        ],
        low_point: [
          `But on the day of the contest, the sponsorship is pulled.`,
          `Because the millionaire's business has decided to restructure their marketing department,`,
          `and felt they wanted to go in another direction.`,
        ],
      },
      {
        second_interaction,
        start_drive: [
          `Cheekily, ${story.oldHelper} says to ${story.leadA.name}`,
          `if you're such a big shot in the ${story.leadA.industry} game,`,
          `why don't you pay for the ${story.contest}?`,
        ],
        continue_drive: [
          `${story.leadA.name} laughs,`,
          `But ${story.leadB.name} and ${story.oldHelper} are looking at ${story.leadA.pronoun2} straight.`,
          `${capitalize(story.leadA.pronoun1)} agrees to fund the ${story.contest},`,
          `and goes to the ${story.town} Bank.`
        ],
        low_point: [
          `But as ${story.leadA.pronoun1} tries to withdraw the cash,`,
          `${story.leadA.pronoun3} card is swallowed by the machine,`,
          `because they suspect it might be fraud.`,
        ],
      },
      {
        second_interaction,
        start_drive: [
          `${story.oldHelper} suggests they talk to ${story.cop}, the cop.`,
          `He may seem grumpy now, but they once went on a date in the 60s and he used to be nice.`,
        ],
        continue_drive: [
          `${story.leadB.name} and ${story.leadA.name} head down to the police station,`,
          `to ask ${story.cop} if they could host the ${story.contest} there.`,
        ],
        low_point: [
          `${story.oldHelper} was right.`,
          `${story.cop} is grumpy,`,
          `and says no right away.`,
          `And it's a good thing the ${story.contest} isn't happening this year,`,
          `because it's no longer health and safety compliant.`,
        ],
      },
      {
        ...helperIll,
        second_interaction
      }
    ];
  }
}