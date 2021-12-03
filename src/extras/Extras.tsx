import { Story } from "../page/StoryTypes";
import Bauble from "./Bauble";
import './Extras.scss';

const Extras = (props: {
  story: Story,
}) => {
  return (
    <div className="sides">
      <Bauble name={props.story.leadA.name} isLeadA={true} />
      <Bauble name={props.story.leadB.name} isLeadA={false} />
    </div>
  );
}

export default Extras;