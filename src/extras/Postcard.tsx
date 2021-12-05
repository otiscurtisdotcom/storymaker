import { Stage, Text, Sprite, withFilters, Container } from '@inlet/react-pixi';
import { Texture } from '@pixi/core';
import { BLEND_MODES } from '@pixi/constants';
import { Graphics } from '@pixi/graphics';
import { TextStyle } from '@pixi/text';
import { useState } from "react";
import { fetchData } from "../utils";
import { ColorMatrixFilter } from '@pixi/filter-color-matrix';

const ImageFilters = withFilters(Container, { 
  matrix: ColorMatrixFilter
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

  const mask = new Graphics()
    .beginFill(0xffffff)
    .drawRect(10, 10, width - 20, height - 20)
    .endFill();

  const photoGraphic = photo ?
    <Sprite
      image={photo}
      anchor={0.5}
      x={width / 2}
      y={height / 2}
      width={width - 20}
      mask={mask}
    /> : <></>;

  const videoTexture = props.end ? Texture.from(`${process.env.PUBLIC_URL}/img/snow.mp4`) : undefined;
  if (videoTexture) {
    // @ts-ignore - loop video
    videoTexture.baseTexture.resource.source.loop = true;
  }
  
  const getVideo = () => {
    return props.end ?
     <Sprite
      texture={videoTexture}
      anchor={0.5}
      x={width / 2}
      y={height / 2}
      width={width - 20}
      mask={mask}
      blendMode={BLEND_MODES.ADD}
    /> : <></>;
  }

  return (
    <div className={`postcard ${props.end ? 'shown' : ''}`}>
      <Stage {...stageProps}>
        <ImageFilters
          // @ts-ignore: TS / React / Pixi
          matrix={{ enabled: true }} apply={ ({ matrix }) => matrix.polaroid() }
        >
          {photoGraphic}
        </ImageFilters>
        {getVideo()}
        <Text
          text={`Merry Christmas from ${props.town}`}
          anchor={0.5}
          x={width / 2}
          y={height - 60}
          style={
            new TextStyle({
              align: 'center',
              dropShadow: true,
              dropShadowColor: '#ffffff',
              dropShadowBlur: 0,
              dropShadowAngle: Math.PI / 6,
              dropShadowDistance: 3,
              fontFamily: `'Great Vibes', cursive`,
              fontSize: 40,
              fill: ['#ee2b2b', '#c8115b'],
              lineHeight: 40,
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