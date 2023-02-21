import "./Agenda.css";
import Stage from "./Stage";
import StageContent from "./StageContent";
import {
  talksMain,
  Unconference,
  desciTalks,
  desciWorkshops
} from "./talks";

function Agenda() {
  return (
    <div className="agenda" id="agenda">
      {/* <p className="agenda-description">◖ Click on a title in order to add it to your calendar</p> */}
      <div className="agenda-items">
        <Stage
          stageTitle="SP Main Stage"
          talksArray={talksMain}
          classes="agenda-item-1"
        />
        <Stage
          stageTitle="Unconference"
          talksArray={Unconference}
          classes="agenda-item-2"
        />
        <Stage
          stageTitle="DeSci Talks"
          talksArray={desciTalks}
          classes="agenda-item-3"
        />
        <Stage
          stageTitle="DeSci Workshops"
          talksArray={desciWorkshops}
          classes="agenda-item-4"
        />
      </div>
    </div>
  );
}

export default Agenda;
