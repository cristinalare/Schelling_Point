import StageContent from "./StageContent";

function Stage({stageTitle, talksArray, classes}) {
  return (
    <div className={classes}>
      <StageContent stageTitle={stageTitle} talksArray={talksArray} />
    </div>
  );
}

export default Stage;