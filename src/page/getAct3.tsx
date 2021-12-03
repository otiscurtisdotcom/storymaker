import { capitalize, getRandom } from "../utils";
import { Act3, Plot, Story } from "./StoryTypes";

export const getAct3 = (story: Story): Act3 => {
  return getRandom(getAct3Array(story));
}

export const getAct3Array = (story: Story): Act3[] => {
  const donations = [
    `${story.leadB.name} and ${story.leadA.name} setup a tinsel-topped jar for people to leave donations,`,
    `under the big Christmas tree in the centre of ${story.town}.`,
    `...`,
    `At first they only recieve a few small bills,`,
    `but one morning ${story.leadA.name} goes to check the jar and cannot believe it,`,
    `Someone has left a cheque for all they money they need.`,
    `${story.leadA.pronoun1} starts screaming, and the whole town comes rushing over.`,
    `Who could it be from?`,
  ]

  const helperRich = [
    ...donations,
    `Then, out of the crowd, emerges ${story.oldHelper} sporting a top hat and a cane.`
  ];

  const santaDonation = [
    ...donations,
    `${story.leadA.name} looks into the crowd,`,
    `${story.leadA.pronoun1} can just make out a large figure walking away,`,
    `wearing a red suit.`,
  ];

  if (story.plot === Plot.SAVE_THE_BUSINESS) {
    const setup = `raise the funds to save the ${story.shop},`;
    return [
      {
        setup,
        final_push: [
          `${story.leadB.name} and ${story.leadA.name} decide to put on Christmas talent show,`,
          `everyone from ${story.town} attends the magical night,`,
          `where the townspeople show off their quirky talents.`,
          `Even the grumpy local cop, ${story.cop}, who plays the piano,`,
          `and old ${story.oldHelper}, who dances a jig.`,
          `At the end of the night, ${story.leadB.name} and ${story.leadA.name} have saved enough money to keep the ${story.shop} in business.`,
        ],
      },
      {
        setup,
        final_push: [
          `${story.leadA.name} suggests they have a traditional Christmas ${story.contest},`,
          `${story.leadB.name} and ${story.oldHelper} say there hasn't been one in ${story.town} for years.`,
          `The ${story.contest} brings the the people of ${story.town} together,`,
          `and helps rememember the true spirit of Christmas.`,
          `At the end of the night, ${story.leadB.name} and ${story.leadA.name} have saved enough money to keep the ${story.shop} in business.`
        ],
      },
      {
        setup,
        final_push: [
          `${story.leadA.name} hires a minibus and takes all the townsfolk of ${story.town} back to ${story.city}.`,
          `They arrive outside the house of ${story.leadA.name}'s boss at the ${story.leadA.industry} company,`,
          `and start singing Christmas carols.`,
          `The boss is so overcome with the spirit of Christmas,`,
          `that he writes a cheque on the spot, enough to save the ${story.shop}.`
        ],
      },
      {
        setup,
        final_push: santaDonation,
      },
      {
        setup,
        final_push: helperRich,
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
          `${story.oldHelper} suggests they hit the old library to come up with some ideas.`,
          `${story.leadB.name} and ${story.leadA.name} stay up all night looking for inspiration from the books,`,
          `Suddenly, ${story.leadA.name} looks up at old black and white photograph of the ${story.shop} on the wall,`,
          `and notices something.`,
          `${capitalize(story.leadA.pronoun1)} spreads a large map over the table and calls over ${story.leadB.name}.`,
          `The ${story.shop} falls into the boundries of a national park,`,
          `and so is protected by law from being demolished.`,
        ],
      },
      {
        setup,
        final_push: [
          `As the bulldozers roll in to demolish the ${story.shop},`,
          `${story.leadA.name}, ${story.leadB.name} and ${story.oldHelper} sit on the ground in front of it.`,
          `${story.cop}, the grumpy local cop, tells them that they need to move on.`,
          `...`,
          `Just as they are about to move, a stretch limousine pulls up,`,
          `and out steps a fiery Southern lawyer, wearing a red suit and with a white beard.`,
          `He has a piece of paper that shows legally the land belons to the people of ${story.town}.`,
          `${story.leadA.name}'s boss at the ${story.leadA.industry} company is furious,`,
          `but ${story.cop} agrees the document is legally binding, and the demolition is called off.`,
        ],
      },
      {
        setup,
        final_push: [
          `As the bulldozers roll in to demolish the ${story.shop},`,
          `${story.leadA.name}, ${story.leadB.name} and ${story.oldHelper} desperately look on.`,
          `But then ${story.cop}, the grumpy local cop, who usually hates Christmas,`,
          `pulls up in front of the bulldozers to block them,`,
          `saying that it's not in the spirit of Christmas.`,
          `${story.leadA.name}'s boss at the ${story.leadA.industry} company jumps down from one of the bulldozers,`,
          `realises the error of his ways, and agrees to donate to the ${story.shop} instead of demolishing it.`,
        ],
      },
      {
        setup,
        final_push: helperRich,
      },
    ];
  } else {
    // (ENTER THE CONTEST)
    const setup = `find the money needed to hold the ${story.contest},`;
    const contestEnd = [
      `${story.leadA.name} wins the contest as ${story.leadA.pronoun1} came to do,`,
      `but more importantly everyone has fun.`,
    ];

    return [
      {
        setup: `hold the ${story.contest} anyway,`,
        final_push: [
          `The ${story.contest} goes ahead, and everyone in ${story.town} attends.`,
          `Just as they are getting started, ${story.cop} and the other cops show up to call it off.`,
          `However, when they see the Christmas spirit of the whole town,`,
          `they decide to let it go ahead anyway.`,
          `...`,
          ...contestEnd,
        ],
      },
      {
        setup: `forget the expensive ${story.contest}, and just have a good old fashion snowman building contest,`,
        final_push: [
          `${story.leadA.name} and ${story.leadB.name} love the idea.`,
          `The whole town of ${story.town} attends the snowman building contest,`,
          `it turns out they don't need a fancy ${story.contest} to remember the true spirit of Christmas.`,
          `...`,
          ...contestEnd,
        ],
      },
      {
        setup,
        final_push: [
          `${story.leadA.name} volunteers to be put into the old stocks in the town centre,`,
          `and charges people to throw snowballs at ${story.leadA.pronoun2}.`,
          `The people of ${story.town} absolutely love the idea,`,
          `and are soon taking it it turns in the stocks.`,
          `Even ${story.cop}, the grumpy local cop has a go, and proves particularly popular.`,
          `Enough money is raised to put on the ${story.contest}.`,
          `...`,
          ...contestEnd,
        ],
      },
      {
        setup,
        final_push: [
          ...santaDonation,
          `...`,
          ...contestEnd,
        ]
      },
      {
        setup,
        final_push: [
          ...helperRich,
          `...`,
          ...contestEnd,
        ]
      },
    ];
  }
}