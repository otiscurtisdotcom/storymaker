import { useEffect, useState } from "react";
import { getRandom } from "../utils";
import getRandomMeetCute from "./getRandomMeetCute";
import { Character, Story } from "./StoryTypes";

const useSetRandomStory = () => {
  const [story, setStory] = useState<Story|null>(null);
  const [contest, setContest] = useState('');
  const [leadA, setLeadA] = useState<Character>();
  const [leadB, setLeadB] = useState<Character>();
  const [city, setCity] = useState('');
  const [town, setTown] = useState('');
  const [shop, setShop] = useState('');
  const [luxury, setLuxury] = useState('');
  const [oldHelper, setOldHelper] = useState('');
  const [cop, setCop] = useState('');
  const [accident, setAccident] = useState('');
  const [heartWarmer, setHeartWarmer] = useState('');
  
  const fetchData = async (url: string) => {
    const res = await fetch(url);
    const json = await res.json();

    return json;
  };

  // USE EFFECTS CHAIN REACTION (ON INIT)
  // TODO (use one effect for everything?)
  useEffect(() => {
    getContestName();
  }, []);

  useEffect(() => {
    if (contest) {
      getLeads();
    }
  }, [contest]);

  useEffect(() => {
    if (leadA && leadB) {
      getShop();
    }
  }, [leadA, leadB]);

  useEffect(() => {
    if (shop) {
      getLuxury();
    }
  }, [shop]);

  useEffect(() => {
    if (luxury) {
      getCity();
    }
  }, [luxury]);

  useEffect(() => {
    if (city) {
      getTown();
    }
  }, [city]);

  useEffect(() => {
    if (town) {
      getOldHelper();
    }
  }, [town]);

  useEffect(() => {
    if (oldHelper) {
      getCop();
    }
  }, [oldHelper]);

  useEffect(() => {
    if (cop) {
      getAccident();
    }
  }, [cop]);

  useEffect(() => {
    if (accident) {
      getHeartWarmer();
    }
  }, [accident])

  useEffect(() => {
    if (leadA && leadB && town && city && contest && oldHelper && accident && heartWarmer) {
      const randomStory: Story = {
        leadA,
        leadB,
        town,
        city,
        contest,
        oldHelper,
        cop,
        shop,
        luxury,
        accident,
        heartWarmer,
        meetCute: getRandomMeetCute(leadA, leadB),
        plot: getRandom([0,1,2]),
      };
      setStory(randomStory);
    }
  }, [heartWarmer]);





  // GET FUNCTIONS
  const getContestName = () => {
    const isFood = getRandom([1,2]) === 1;

    fetchData(`${process.env.PUBLIC_URL}/data/${isFood ? 'food' : 'objects'}.json`)
    .then((results: any) => {
      const randomContest = getRandom(results.words).word;
      const randomVerb = isFood ? getRandom(['eating', 'cooking']) : getRandom(['making', 'throwing', 'sculpting']);
      setContest(`${randomContest} ${randomVerb} contest`);
    });
  }

  const getLeads = () => {
    const isLeadAMale = getRandom([1,2]) === 1;
    
    // Lead A
    fetchData(`${process.env.PUBLIC_URL}/data/${isLeadAMale ? 'm' : 'f'}-names.json`)
    .then((namesList: any) => {

      // Get Industry
      fetchData(`${process.env.PUBLIC_URL}/data/industries.json`)
      .then((industryList: any) => {
        const randomLeadA: Character = {
          name: getRandom(namesList.names).name,
          pronoun1: isLeadAMale ? 'he' : 'she',
          pronoun2: isLeadAMale ? 'him' : 'her',
          pronoun3: isLeadAMale ? 'his' : 'her',
          industry: getRandom(industryList.words).word
        }
        setLeadA(randomLeadA);
  
        // Lead B
        fetchData(`${process.env.PUBLIC_URL}/data/${!isLeadAMale ? 'm' : 'f'}-names.json`)
        .then((namesListB: any) => {
          const randomLeadB: Character = {
            name: getRandom(namesListB.names).name,
            pronoun1: !isLeadAMale ? 'he' : 'she',
            pronoun2: !isLeadAMale ? 'him' : 'her',
            pronoun3: !isLeadAMale ? 'his' : 'her',
          }
          setLeadB(randomLeadB);
        });
      })
    });
  }

  const getShop = () => {
    fetchData(`${process.env.PUBLIC_URL}/data/objects.json`)
    .then((results: any) => {
      const randomShop = getRandom(results.words).word;
      setShop(`${randomShop} shop`);
    });
  }

  const getLuxury = () => {
    fetchData(`${process.env.PUBLIC_URL}/data/luxury.json`)
    .then((results: any) => {
      const randomLuxury = getRandom(results.words).word;
      setLuxury(`${randomLuxury}`);
    });
  }

  const getCity = () => {
    fetchData(`${process.env.PUBLIC_URL}/data/cities.json`)
    .then((result: {cities: string[]}) => {
      const randomCity = getRandom(result.cities);
      setCity(randomCity.city);
    });
  }

  const getTown = () => {
    fetchData(`${process.env.PUBLIC_URL}/data/towns.json`)
    .then((result: {towns: string[]}) => {
      const randomTown = getRandom(result.towns);
      setTown(randomTown.town);
    });
  }

  const getOldHelper = () => {
    const isOldHelperMale = getRandom([0,1]) === 0;
    fetchData(`${process.env.PUBLIC_URL}/data/${isOldHelperMale ? 'm' : 'f'}-names.json`)
    .then((result: {names: string[]}) => {
      setOldHelper(getRandom(result.names).name);
    });
  }

  const getCop = () => {
    const isCopMale = getRandom([0,1]) === 0;
    fetchData(`${process.env.PUBLIC_URL}/data/${isCopMale ? 'm' : 'f'}-names.json`)
    .then((result: {names: string[]}) => {
      setCop(getRandom(result.names).name);
    });
  }

  const getAccident = () => {
    fetchData(`${process.env.PUBLIC_URL}/data/transport.json`)
    .then((result: any) => {
      const randomAccident = getRandom(result.words).word;
      setAccident(`in a tragic ${randomAccident} accident`);
    });
  }

  const getHeartWarmer = () => {
    fetchData(`${process.env.PUBLIC_URL}/data/heart-warmer-adj.json`)
    .then((adjResult: any) => {
      const randomAdj = getRandom(adjResult.words).word;

      fetchData(`${process.env.PUBLIC_URL}/data/heart-warmer-nouns.json`)
      .then((nounResult: any) => {
        const randomNoun = getRandom(nounResult.words).word;
        setHeartWarmer(`${getRandom(['feeds','gives presents to'])} ${randomAdj} ${randomNoun}`);
      });
    });
  }

  // RETURN
  return story;
}

export default useSetRandomStory;