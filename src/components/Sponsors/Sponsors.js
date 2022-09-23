import Sponsor from './Sponsor';
import './Sponsors.css';
import anoma from './logos/anoma.svg';
import celo from './logos/celo.svg';
import lukso from './logos/lukso.svg';
import protocol from './logos/protocol.svg';
import radicle from './logos/radicle.svg';
import w3e from './logos/w3e.svg';

function Sponsors () {
    const champ = [{
      name: 'protocol',
      logo: protocol
    }];
    const lead = [
      {
        name: 'lukso',
        logo: lukso
      },
      {
        name: 'radicle',
        logo: radicle
      },
      {
        name: 'celo',
        logo: celo
      },
    ];
    const core = [
      {
        name: 'anoma',
        logo: anoma
      },
      {
        name: 'w3e',
        logo: w3e
      }
    ];

    // const node = [];
    const lines = [
      {title: 'Champ', list: champ, weight: '800'},
      {title: 'Lead', list: lead, weight: '700'},
      {title: 'Core', list: core, weight: '600'},
      // {title: 'Node', list: node, weight: '500'}
    ];

    return (
      <div className="sponsors" id="sponsors">
        {lines.map(line => (
          <div className={`sponsors-line ${line.title}`} key={line.title}>
            {/* <p className="line-title main-m"  style={{ fontWeight: line.weight}}>{line.title}</p> */}
            <div className="line-logos">
              {line.list.map(sponsor => (
                <Sponsor logo={sponsor.logo} name={sponsor.name} key={sponsor.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
}

export default Sponsors ;