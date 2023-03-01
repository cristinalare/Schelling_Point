function StageContent({ stageTitle, talksArray, desciWorkshops }) {
  return (
    <>
      <div className="agenda-item-header">{stageTitle}</div>
      <div className="agenda-item-content">
        {desciWorkshops && <div className="desci-tag">Talks</div>}
        {talksArray.map((talk, index) => (
          <div className="agenda-item-talk" key={`${index}-${talk.name}`}>
            <p className="agenda-item-hour">{talk.time}</p>
            {talk.link ? (
              <p className="agenda-item-title">
                <a href={talk.link} target="_blank" rel="noreferrer">
                  <span className="talk-title">{talk.title}</span>&nbsp;
                  {talk.name.length > 0 && <span>&#40;{talk.name}&#41;</span>}
                </a>
              </p>
            ) : (
              <p className="agenda-item-title">
                <span className="talk-title">{talk.title}</span>&nbsp;
                {talk.name.length > 0 && <span>&#40;{talk.name}&#41;</span>}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default StageContent;
