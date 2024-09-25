import './Speaker/Speaker';
import './Speakers.css';
import Speaker from './Speaker/Speaker';
import { speakersArray } from './speakersArray';

function Speakers () {
    return (
      
        <div className="speakers">
            <div className="speakers-container">
              <h3 className="coming-soon">Coming soon</h3>
              {/* { 
              speakersArray.map((speaker, index) => (
                speaker.avatar && (
                <Speaker
                  twitter={speaker.twitter}
                  index={index}
                  avatar={speaker.avatar}
                  name={speaker.name}
                  role={speaker.company}
                  key={`speaker-${index}`}
                />
                )
              ))
              } */}
            </div>
        </div>
    );
}

export default Speakers ;