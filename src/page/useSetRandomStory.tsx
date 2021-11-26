import { useEffect, useState } from "react";
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
  const [oldHelper, setOldHelper] = useState('');
  
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
      getCity();
    }
  }, [shop]);

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
    if (leadA && leadB && town && city && contest && oldHelper) {
      const randomStory: Story = {
        leadA,
        leadB,
        town,
        city,
        contest,
        oldHelper,
        shop,
        plot: Math.floor(Math.random() * 3),
      };
      setStory(randomStory);
    }
  }, [oldHelper]);





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
      fetchData(`https://api.datamuse.com/words?rel_bgb=industry&topics=work`)
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


  // RETURN
  return story;
}

export default useSetRandomStory;