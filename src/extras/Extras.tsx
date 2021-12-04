import { Story } from "../page/StoryTypes";
import Bauble from "./Bauble";
import './Extras.scss';
import Postcard from "./Postcard";

const Extras = (props: {
  story: Story,
  end: boolean,
}) => {
  return (
    <div className="sides">
      <Bauble name={props.story.leadA.name} isLeadA={true} />
      <Bauble name={props.story.leadB.name} isLeadA={false} />
      <img className="candycane" src={`${process.env.PUBLIC_URL}/img/candycane.png`} />
      <img className="hotchoc" src={`${process.env.PUBLIC_URL}/img/hotchoc.png`} />
      <img className="present1" src={`${process.env.PUBLIC_URL}/img/present1.png`} />
      <img className="present2" src={`${process.env.PUBLIC_URL}/img/present2.png`} />
      <Postcard town={props.story.town} end={props.end} />
    </div>
  );
}

export default Extras;