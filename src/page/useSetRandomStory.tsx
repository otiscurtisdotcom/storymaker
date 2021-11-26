import { useEffect, useState } from "react";
import getRandomMeetCute from "./getRandomMeetCute";
import { Character, Story } from "./StoryTypes";

interface DataMuseData {
  score: number,
  tags?: string[],
  word: string,
}

const getRandom = (list: any[]): any => {
  const randomNumber = Math.floor(Math.random() * list.length);
  return list[randomNumber];
}

const getNouns = (list: DataMuseData[]): DataMuseData[] => {
  return list.filter((word) => word.tags?.length === 1 && word.tags[0] === 'n');
}

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
  const [accident, setAccident] = useState('');
  const [heartWarmer, setHeartWarmer] = useState('');
  
  const fetchData = async (url: string) => {
    const res = await fetch(url);
    const json = await res.json();

    return json;
  };

  // USE EFFECTS CHAIN REACTION (ON INIT)
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
      getAccident();
    }
  }, [oldHelper]);

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
    const source = isFood ? 'ml=christmas+food' : 'ml=christmas+object';

    fetchData(`https://api.datamuse.com/words?${source}`)
    .then((results: DataMuseData[]) => {
      const randomContest = getRandom(getNouns(results)).word;
      const randomVerb = isFood ? getRandom(['eating', 'cooking']) : getRandom(['making', 'throwing', 'sculpting']);
      setContest(`${randomContest} ${randomVerb} contest`);
    });
  }

  const getLeads = () => {
    const isLeadAMale = getRandom([1,2]) === 1;
    
    // Lead A
    fetchData(`${process.env.PUBLIC_URL}/data/${isLeadAMale ? 'm' : 'f'}-names.json`)
    .then((namesList: {names: string[]}) => {

      // Get Industry
      fetchData(`https://api.datamuse.com/words?ml=finance&rel_bgb=industry`)
      .then((industryList: DataMuseData[]) => {
        const randomLeadA: Character = {
          name: getRandom(namesList.names).name,
          pronoun1: isLeadAMale ? 'he' : 'she',
          pronoun2: isLeadAMale ? 'him' : 'her',
          pronoun3: isLeadAMale ? 'his' : 'her',
          industry: getRandom(industryList).word
        }
        setLeadA(randomLeadA);
  
        // Lead B
        fetchData(`${process.env.PUBLIC_URL}/data/${!isLeadAMale ? 'm' : 'f'}-names.json`)
        .then((namesListB: {names: string[]}) => {
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
    fetchData(`https://api.datamuse.com/words?ml=christmas+object&rc=shop`)
    .then((results: DataMuseData[]) => {
      const randomShop = getRandom(getNouns(results)).word;
      setShop(`${randomShop} shop`);
    });
  }

  const getLuxury = () => {
    // Todo: move to JSON, add more.
    setLuxury(getRandom(['Luxury flats', 'A helipad', 'A car park', 'A fast-food restaurant']));
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

  const getAccident = () => {
    fetchData(`https://api.datamuse.com/words?ml=transport`)
    .then((result: DataMuseData[]) => {
      const randomAccident = getRandom(getNouns(result)).word;
      setAccident(`in a horrible ${randomAccident} accident`);
    });
  }

  const getHeartWarmer = () => {
    const synonym = getRandom(['crippled','hungry','poor','blind','fat','stupid','disabled'])
    fetchData(`https://api.datamuse.com/words?rel_syn=${synonym}`)
    .then((adjResult: DataMuseData[]) => {
      const randomAdj = getRandom(adjResult).word;

      const noun = getRandom(['orphans','animals'])
      fetchData(`https://api.datamuse.com/words?ml=${noun}&topics=${noun}&max=${noun === 'orphans' ? '200' : '100'}`)
      .then((nounResult: DataMuseData[]) => {
        const plurals = nounResult.filter((def: DataMuseData) => def.word.slice(-1) === 's');
        const randomNoun = getRandom(getNouns(plurals)).word;
        setHeartWarmer(`${getRandom(['feeds','gives presents to'])} ${randomAdj} ${randomNoun}`);
      });
    });
  }

  // RETURN
  return story;
}

export default useSetRandomStory;