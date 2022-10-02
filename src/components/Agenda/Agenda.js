import './Agenda.css';
import Stage from './Stage';
import StageContent from './StageContent';
import { talksDeSci, talksFTC, talksMain, talksPlurality, talksWellness } from './talks';

function Agenda () {
  return (
    <div className="agenda" id="agenda">
        <p className="agenda-description">Click on a title in order to add it to your calendar</p>
        <div className="agenda-items">
          <div className="agenda-items-group group-1">
            <Stage stageTitle='Schelling Point Stage' talksArray={talksMain} classes='agenda-item-1' />
            <Stage stageTitle='Funding the Commons Pop Up' talksArray={talksFTC} classes='agenda-item-2' />
          </div>
          <div className="agenda-items-group group-2">
            <Stage stageTitle='Plurality Zone' talksArray={talksPlurality} classes='agenda-item-3' />
            <div className="last-talks agenda-item-4">
              <StageContent stageTitle='DeSci Space' talksArray={talksDeSci} />
              <StageContent stageTitle='Wellness Hub' talksArray={talksWellness} />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Agenda ;