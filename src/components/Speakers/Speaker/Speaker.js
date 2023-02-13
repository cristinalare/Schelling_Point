import Avatar from './Avatar';
import './Speaker.css';

function Speaker ({twitter, avatar, name, role, index}) {
    return (
        <div className="speaker-container">
            <a href={twitter} target="_blank" rel="noreferrer" className="avatar-container">
              <Avatar imgSrc={avatar} name={name} shape={index % 4}/>
            </a>
            <div className="speaker-description">
                <p className="speaker-name">{name}</p>
                <p className="role">{role}</p>
            </div>
        </div>
        
    );
}

export default Speaker ;