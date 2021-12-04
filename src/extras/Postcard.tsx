import { Stage, Text, Sprite, withFilters, Container } from '@inlet/react-pixi';
import { CRTFilter } from '@pixi/filter-crt';
import { TextStyle } from '@pixi/text';
import { useState } from "react";
import { fetchData } from "../utils";

const ImageFilters = withFilters(Container, { 
  crt: CRTFilter
});

const crtConfig = {
  lineWidth: 0,
  vignetting: 0.2,
  vignettingAlpha: 0.3,
}

const Postcard = (props: {
  town: string,
  end: boolean,
}) => {
  const [photo, setPhoto] = useState<string | null>(null);

  fetchData(`https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages%7Cpageterms&piprop=thumbnail&pithumbsize=600&origin=*&imlimit=20&titles=${props.town}`)
  .then(
    (result: any) => {
      if(result) {
        setPhoto(result.query.pages[0].thumbnail.source);
      };
    }
  ).catch(
    error => {
      setPhoto(null);
    }
  )
  
  const width = 600;
  const height = 400;
  const stageProps = {
    width,
    height,
    options: {
      antialias: true,
      backgroundAlpha: 0,
    },
  }

  const photoGraphic = photo ?
  <Sprite
    image={photo}
    anchor={0.5}
    x={width / 2}
    y={height / 2}
    width={width - 20}
    height={height - 20}
  /> : <></>;

  return (
    <div className={`postcard ${props.end ? 'shown' : ''}`}>
      <Stage {...stageProps}>
        <ImageFilters crt={crtConfig}>
          {photoGraphic}
        </ImageFilters>
        <Text
          text={`Merry Christmas from ${props.town}`}
          anchor={0.5}
          x={width / 2}
          y={height - 40}
          style={
            new TextStyle({
              align: 'center',
              fontFamily: `'Great Vibes', cursive`,
              fontSize: 30,
              fill: `${photo ? '#fff' : '#e23'}`,
              padding: 20,
              wordWrap: true,
              wordWrapWidth: 500,
            })
          }
        />
      </Stage>
    </div>
  );
}

export default Postcard;