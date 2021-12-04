import { useEffect, useState } from "react";
import { fetchData, getRandom } from "../utils";
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
  const [boss, setBoss] = useState('');
  const [accident, setAccident] = useState('');
  const [heartWarmer, setHeartWarmer] = useState('');

  // ON INIT
  useEffect(() => {
    getContestName();
    getLeads();
    getShop();
    getLuxury();
    getCity();
    getTown();
    getOldHelper();
    getCop();
    getBoss();
    getAccident();
    getHeartWarmer();
  }, []);

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
        boss,
        shop,
        luxury,
        accident,
        heartWarmer,
        meetCute: getRandomMeetCute(leadA, leadB),
        plot: getRandom([0,1,2]),
      };
      setStory(randomStory);
    }
  }, [leadA, leadB, town, city, contest, oldHelper, accident, heartWarmer]);





  // GET FUNCTIONS
  const getContestName = () => {
    const isFood = getRandom([1,2]) === 1;

    fetchData(`${process.env.PUBLIC_URL}/data/${isFood ? 'food' : 'objects'}.json`)
    .then((results: {words: string[]}) => {
      const randomContest = getRandom(results.words).word;
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
      fetchData(`${process.env.PUBLIC_URL}/data/industries.json`)
      .then((industryList: {words: string[]}) => {
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
    fetchData(`${process.env.PUBLIC_URL}/data/objects.json`)
    .then((results: {words: string[]}) => {
      const randomShop = getRandom(results.words).word;
      setShop(`${randomShop} shop`);
    });
  }

  const getLuxury = () => {
    fetchData(`${process.env.PUBLIC_URL}/data/luxury.json`)
    .then((results: {words: string[]}) => {
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
    fetchData(`${process.env.PUBLIC_URL}/data/surnames.json`)
    .then((result: {names: string[]}) => {
      setCop(`Chief ${getRandom(result.names).name}`);
    });
  }

  const getBoss = () => {
    fetchData(`${process.env.PUBLIC_URL}/data/surnames.json`)
    .then((result: {names: string[]}) => {
      setBoss(`Mr. ${getRandom(result.names).name}`);
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
    .then((adjResult: {words: string[]}) => {
      const randomAdj = getRandom(adjResult.words).word;

      fetchData(`${process.env.PUBLIC_URL}/data/heart-warmer-nouns.json`)
      .then((nounResult: {words: string[]}) => {
        const randomNoun = getRandom(nounResult.words).word;
        setHeartWarmer(`${getRandom(['feeds','gives presents to'])} ${randomAdj} ${randomNoun}`);
      });
    });
  }

  return story;
}

export default useSetRandomStory;