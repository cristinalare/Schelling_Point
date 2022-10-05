import poster1x from './afterparty-poster@1x.jpg';
import poster2x from './afterparty-poster@2x.jpg';
import mobileposter1x from './afterparty-poster-mobile@1x.jpg';
import mobileposter2x from './afterparty-poster-mobile@2x.jpg';


function Afterparty() {
  return (
    <div className="afterparty" id="afterparty">
      <picture>
        <source 
          media="(min-width: 37.5rem)" /* 600px */ 
          srcSet={`${poster1x} 1x,
          ${poster2x} 2x`}
          width="1920" height="1405"
        />
        <source 
          media="(max-width: 37.5rem)" 
          srcSet={`${mobileposter1x} 1x,
          ${mobileposter2x} 2x`}
          width='600' height='440'
        />
        <img src={poster1x} alt="afterparty poster schelling point" width="1920" height="1405" />
      </picture>
    </div>
  );
}

export default Afterparty;