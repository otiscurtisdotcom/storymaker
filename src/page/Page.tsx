import { useEffect, useState } from "react";
import { BackStory } from "./BackStoryTypes";
import Row from "./Row";
import { getStoryRows } from "./StoryRows";

const FAKE_STORY: BackStory = {
  leadA: {
    name: 'Tom',
    gender: {
      pronoun1: 'he',
      pronoun2: 'his'
    }
  },
  leadB: {
    name: 'Sue',
    gender: {
      pronoun1: 'she',
      pronoun2: 'her'
    }
  },
  city: 'London',
  town: 'Haywards Heath'
}

const Page = () => {
  const [rows, setRows] = useState<string[]>([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [backStory, setBackStory] = useState<BackStory>();

  const nextRow = () => {
    const newRow = currentRow + 1;
    setCurrentRow(newRow);
  };

  // ON APP INIT
  useEffect(() => {
    const starterBackStory: BackStory = FAKE_STORY;
    setBackStory(starterBackStory);
  }, []);

  // ON BACKSTORY LOAD
  useEffect(() => {
    if (backStory) {
      setRows(getStoryRows(backStory!));
    }
  }, [backStory]);

  return (
    <div>
      {rows.map((text, index) => {
        if (index <= currentRow) {
          return <Row key={index}
                      text={text}
                      nextRow={nextRow}
                      isLastRow={index === currentRow}
                 />
        }
      })}
    </div>
  );
}

export default Page;