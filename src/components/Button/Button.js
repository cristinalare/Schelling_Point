import './Button.css';

function Button ({text, link}) {
  return (
    <a className='btn main-xs' href={link} target='_blank' rel='noreferrer'>
      <span>{text}</span>
    </a>
  );
}
export default Button ;