import StageContent from "./StageContent";

function Stage({stageTitle, talksArray, desciWorkshops, classes}) {
  return (
    <div className={classes}>
      <StageContent stageTitle={stageTitle} talksArray={talksArray} desciWorkshops={desciWorkshops}/>
    </div>
  );
}

export default Stage;