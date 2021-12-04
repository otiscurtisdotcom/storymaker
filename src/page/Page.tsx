import { useEffect, useState } from "react";
import Extras from "../extras/Extras";
import Row from "./Row";
import getStoryRows from "./StoryRows";
import useSetRandomStory from "./useSetRandomStory";

const Page = (
  props: {
    allLoaded: () => void,
    currentRow: number
  }
) => {
  const [rows, setRows] = useState<string[]>([]);
  const [imageLoaded, setImageLoaded] = useState<any>();
  const [imageArray, setImageArray] = useState<string[]>([]);
  const [end, setEnd] = useState(false);

  const randomStory = useSetRandomStory();
  const images = ['present1', 'present2', 'hotchoc', 'candycane', 'bauble'];
  
  useEffect(() => {
    for (const picture of images) {
      const img = new Image();
      img.src = `${process.env.PUBLIC_URL}/img/${picture}.png`;
      if (img.complete) {
        setImageLoaded(picture);
      } else {
        img.onload = () => {
          if (picture) {
            setImageLoaded(picture);
          }
        }
      }
    };
  }, []);

  useEffect(() => {
    if (imageLoaded) {
      const array = imageArray;
      array.push(imageLoaded);
      setImageArray(array);
      props.allLoaded();
    }
  }, [imageLoaded]);

  // ON BACKSTORY LOAD
  useEffect(() => {
    if (randomStory) {
      const storyRows = getStoryRows(randomStory);
      if (storyRows) setRows(storyRows);
    }
  }, [randomStory]);

  useEffect(() => {
    setEnd(props.currentRow > 0 && props.currentRow >= rows.length);
  }, [props.currentRow])

  if (randomStory) {
    return (
      <div className="page-wrapper">
        <div>
          {rows.map((text, index) => {
            if (index <= props.currentRow) {
              return <Row key={index}
                          text={text} />
            }
          })}
        </div>
        <Extras story={randomStory} end={end} />
      </div>
    )
  } else {
    return (<></>)
  }
}

export default Page;