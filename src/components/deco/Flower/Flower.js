import flower1 from './flower1.svg';
import flower2 from './flower2.svg';
import flower3 from './flower3.svg';
import './Flower.css';

function Flower () {
    return (
        <div className="flower-img">
            <Parallax translateY={[0, -50]} className="layer">
                <img src={flower1} />
            </Parallax>
            <Parallax translateY={[0, 5]} opacity={[0.7, 0.2]} className="layer">
                <img src={flower2} />
            </Parallax>
            <Parallax shouldAlwaysCompleteAnimation={true}  translateY={[0, 50]} opacity={[1, 0.6]} startScroll={500} className="layer">
                <img src={flower3} />
            </Parallax>
        </div>
    );
}

export default Flower ;