import './Speaker/Speaker';
import './Speakers.css';
import Speaker from './Speaker/Speaker';
import { speakersArray } from './speakersArray';

function Speakers () {
    return (
        <div className="speakers">
            <div className="speakers-container">
              { 
              speakersArray.map((speaker, index) => (
                speaker.avatar && (
                <Speaker
                  twitter={speaker.twitter}
                  avatar={speaker.avatar}
                  name={speaker.name}
                  role={speaker.company}
                  key={`speaker-${index}`}
                />
                )
              ))
              }
            </div>
        </div>
    );
}

export default Speakers ;