import './Speaker.css';

function Speaker ({twitter, avatar, name, role}) {
    return (
        <div className="speaker-container">
            <a href={twitter} target="_blank" rel="noreferrer" className="avatar-container">
                <img className="avatar" loading="lazy" data-src="" src={avatar} alt={name} width="160" height="160"/>
            </a>
            <div className="speaker-description">
                <p className="speaker-name">{name}</p>
                <p className="role">{role}</p>
            </div>
        </div>
        
    );
}

export default Speaker ;