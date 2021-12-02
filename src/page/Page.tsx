import { useEffect, useState } from "react";
import Bauble from "../extras/Bauble";
import Extras from "../extras/Extras";
import Row from "./Row";
import getStoryRows from "./StoryRows";
import useSetRandomStory from "./useSetRandomStory";

const Page = () => {
  const [rows, setRows] = useState<string[]>([]);
  const [currentRow, setCurrentRow] = useState(0);

  const nextRow = () => {
    const newRow = currentRow + 1;
    setCurrentRow(newRow);
    setTimeout(() => {
      window.scrollTo({top: document.body.clientHeight, behavior: 'smooth'});
    }, 100);
  };

  const randomStory = useSetRandomStory();

  // ON BACKSTORY LOAD
  useEffect(() => {
    if (randomStory) {
      setRows(getStoryRows(randomStory));
    }
  }, [randomStory]);

  if (randomStory) {
    return (
      <div className="page-wrapper">
        <div>
          {rows.map((text, index) => {
            if (index <= currentRow) {
              return <Row key={index}
                          text={text} />
            }
          })}
        </div>
        <button onClick={nextRow}>Next</button>
        <Extras story={randomStory} />
      </div>
    )
  } else {
    return (<></>)
  }
}

export default Page;