function StageContent({stageTitle, talksArray}) {
  return (
    <>
    <div className="agenda-item-header">
        {stageTitle}
      </div>
      <div className="agenda-item-content">
        {talksArray.map((talk, index) => (
          <div className="agenda-item-talk" key={`${index}-${talk.name}`}>
            <p className="agenda-item-hour">{talk.time}</p>
            { talk.link ? (
              <p className="agenda-item-title">
                <a href={talk.link} target="_blank" rel="noreferrer">
                  {talk.title}&nbsp;
                  { talk.name.length > 0 && (<span>&#40;{talk.name}&#41;</span>) }
                </a>
              </p>
            ) : (
              <p className="agenda-item-title">{talk.title}&nbsp;
                { talk.name.length > 0 && (<span>&#40;{talk.name}&#41;</span>) }
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default StageContent;