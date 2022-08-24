import './Button.css';

function Button ({ctaRef, text, link}) {
    return (
        <a className='btn cta main-s' href={link} target='_blank' rel='noreferrer'>
            <span>{text} <span ref={ctaRef}></span></span>
        </a>
    );
}
export default Button ;