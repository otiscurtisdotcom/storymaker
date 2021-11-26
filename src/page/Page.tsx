import { useEffect, useState } from "react";
import { Story } from "./StoryTypes";
import Row from "./Row";
import getStoryRows from "./StoryRows";
import useSetRandomStory from "./useSetRandomStory";

const Page = () => {
  const [rows, setRows] = useState<string[]>([]);
  const [currentRow, setCurrentRow] = useState(0);
  // const [story, setStory] = useState<Story>();

  const nextRow = () => {
    const newRow = currentRow + 1;
    setCurrentRow(newRow);
    window.scrollTo({top: document.body.clientHeight});
  };

  const randomStory = useSetRandomStory();

  // ON APP INIT
  useEffect(() => {
    console.log('INIT');
  }, []);

  // ON BACKSTORY LOAD
  useEffect(() => {
    if (randomStory) {
      setRows(getStoryRows(randomStory));
    }
  }, [randomStory]);

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