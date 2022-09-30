import Sponsor from './Sponsor';
import './Sponsors.css';
import anoma from './logos/anoma.svg';
import celo from './logos/celo.svg';
import lukso from './logos/lukso.svg';
import protocol from './logos/protocol.svg';
import radicle from './logos/radicle.svg';
import supermodular from './logos/supermodular2.svg';
import filecoin from './logos/filecoin.svg';
import opolis from './logos/opolis.svg';
import superrare from './logos/superrare.png';
import ethlatam from './logos/ethlatam.svg';

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
        name: 'opolis',
        logo: opolis
      },
    ];

    const node = [
      {
        name: 'superrare',
        logo: superrare
      },
      {
        name: 'filecoin',
        logo: filecoin
      },
      {
        name: 'supermodular',
        logo: supermodular
      },
    ];

    const extra = [
      {
        name: 'ethlatam',
        logo: ethlatam
      }
    ]

    const lines = [
      {title: 'Champ', list: champ, weight: '800'},
      {title: 'Lead', list: lead, weight: '700'},
      {title: 'Core', list: core, weight: '600'},
      {title: 'Node', list: node, weight: '500'},
      {title: 'Extra', list: extra},
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