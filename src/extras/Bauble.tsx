import { Stage, Text, withFilters, Container, Sprite } from '@inlet/react-pixi'
import { TextStyle } from '@pixi/text';
import { BulgePinchFilter } from '@pixi/filter-bulge-pinch';
import { ColorMatrixFilter } from '@pixi/filter-color-matrix';
import { getRandom } from '../utils';

const TextFilters = withFilters(Container, {
  bulge: BulgePinchFilter,
});

const ImageFilters = withFilters(Container, { 
  matrix: ColorMatrixFilter
});

const bulgeConfig = {
  radius: 200,
  strength: 0.5
}

const rotate = `rotate(${Math.random() * 40 - 20}deg)`;
const hughes = [0, 180, 230];
const hugh = getRandom(hughes);

const Bauble = (props: {
  name: string | undefined,
}) => {
  const width = 600
  const stageProps = {
    width,
    height: width, // SQUARE
    options: {
      backgroundAlpha: 0,
      antialias: true,
    },
  }

  return (
    <div className="bauble" style={{transform: rotate}}>
      <Stage {...stageProps}>
        <ImageFilters
          // @ts-ignore: TS / React / Pixi
          matrix={{ enabled: true }} apply={ ({ matrix }) => matrix.hue(hugh) }
          >
          <Sprite
            image={`${process.env.PUBLIC_URL}/img/bauble2.png`}
            scale={0.23}
            anchor={0.5}
            x={width / 2}
            y={width / 2 - 30}
          />
        </ImageFilters>
        <TextFilters bulge={bulgeConfig}>
          <Text
            text={props.name}
            anchor={0.5}
            x={width / 2}
            y={width / 2}
            style={
              new TextStyle({
                align: 'center',
                fontFamily: `'Comforter Brush', cursive`,
                fontSize: 70,
                fontWeight: `400`,
                letterSpacing: 8,
                fill: ['#BF953F', '#B38728'],
                padding: 50,
              })
            }
          />
        </TextFilters>
      </Stage>
    </div>
  )
};

export default Bauble;