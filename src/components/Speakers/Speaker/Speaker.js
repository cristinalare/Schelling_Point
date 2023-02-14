import Avatar from './Avatar';
import './Speaker.css';

function Speaker ({twitter, avatar, name, role, index}) {
    return (
        <a href={twitter} target="_blank" rel="noreferrer" className="speaker-container">
            <div className="avatar-container">
              <Avatar imgSrc={avatar} name={name} shape={index % 4}/>
            </div>
            <div className="speaker-description">
                <p className="speaker-name">{name}</p>
                {/* <p className="role">{role}</p> */}
            </div>
        </a>
        
    );
}

export default Speaker ;