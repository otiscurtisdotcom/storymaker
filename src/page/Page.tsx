import { useEffect, useState } from "react";
import { Plot, Story } from "./StoryTypes";
import Row from "./Row";
import { getStoryRows } from "./StoryRows";

const FAKE_STORY: Story = {
  leadA: {
    name: 'Tom',
    place_of_work: 'bank',
    pronoun1: 'he',
    pronoun2: 'him',
    pronoun3: 'his',
  },
  leadB: {
    name: 'Sue',
    place_of_work: 'ice cream shop',
    pronoun1: 'she',
    pronoun2: 'her',
    pronoun3: 'her',
  },
  city: 'London',
  town: 'Haywards Heath',
  plot: Math.floor(Math.random() * 3),
  contest: 'mince pie eating contest',
  old_helper: 'Bruce',
}

const Page = () => {
  const [rows, setRows] = useState<string[]>([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [story, setStory] = useState<Story>();

  const nextRow = () => {
    const newRow = currentRow + 1;
    setCurrentRow(newRow);
    window.scrollTo({top: document.body.clientHeight});
  };

  // ON APP INIT
  useEffect(() => {
    const starterStory: Story = FAKE_STORY;
    setStory(starterStory);
  }, []);

  // ON BACKSTORY LOAD
  useEffect(() => {
    if (story) {
      setRows(getStoryRows(story!));
    }
  }, [story]);

  return (
    <div>
      <div>
        {rows.map((text, index) => {
          if (index <= currentRow) {
            return <Row key={index}
                        text={text}
                  />
          }
        })}
      </div>
      <button onClick={nextRow}>Next</button>
    </div>
  );
}

export default Page;