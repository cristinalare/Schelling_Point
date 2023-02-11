import './Button.css';

function Button ({text, link, disabled}) {
  return (
    <a
      className={`btn main-xs ${disabled ? 'disabled' : ''}`}
      href={link}
      target='_blank' rel='noreferrer'>
      <span>{text}</span>
    </a>
  );
}
export default Button;