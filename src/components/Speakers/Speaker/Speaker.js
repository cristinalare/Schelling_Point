import './Speaker.css';
// import sprite from '../../../helpers/sprite.svg';
// import speakerTemplate from './speaker_template.svg';
import avatarDemo from './avatar-demo.png';

function Speaker ({twitter, avatar, name, role}) {
    return (
        <div className="speaker-container">
            <a href={twitter} target="_blank" rel="noreferrer" className="avatar-container">
                <div className="avatar-bg">
                    <div className="green"></div>
                    <div className="yellow"></div>
                    <div className="purple"></div>
                </div>
                <img className="avatar" loading="lazy" data-src="" src={avatarDemo} alt={name} width="160" height="160"/>
            </a>
            <div className="speaker-description">
                <p className="speaker-name">{name}</p>
                <p className="role">{role}</p>
            </div>
        </div>
        
    );
}

export default Speaker ;