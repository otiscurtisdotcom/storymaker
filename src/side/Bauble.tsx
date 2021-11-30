import { Stage, Text, withFilters, Container, Sprite } from '@inlet/react-pixi'
import { TextStyle } from '@pixi/text';
import { BulgePinchFilter } from '@pixi/filter-bulge-pinch';
import './Bauble.scss';

const Filters = withFilters(Container, {
  bulge: BulgePinchFilter,
});

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

  const bulgeOptions = {
    radius: 200,
    strength: 0.5
  }

  return (
    <div className="bauble">
      <Stage {...stageProps}>
        <Sprite
          image={`${process.env.PUBLIC_URL}/img/bauble.png`}
          scale={0.23}
          anchor={0.5}
          x={width / 2}
          y={width / 2 - 30}
        />
        <Filters bulge={bulgeOptions}>
          <Text
            text={props.name}
            anchor={0.5}
            x={width / 2}
            y={width / 2}
            style={
              new TextStyle({
                align: 'center',
                fontFamily: 'cursive',
                fontSize: 70,
                fontWeight: `400`,
                letterSpacing: 8,
                fill: ['#BF953F', '#B38728'],
                padding: 50,
              })
            }
          />
        </Filters>
      </Stage>
    </div>
  )
};

export default Bauble;