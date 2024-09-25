import Sponsor from "./Sponsor";
import "./Sponsors.css";
import aztec from "./logos/aztec.svg";
import consensys from "./logos/consensys.svg";
import ens from "./logos/ens.svg";
import foresightVentures from "./logos/foresightVentures.svg";
import drips from "./logos/drips.svg";
import karpatkey from "./logos/karpatkey.svg";
import zkSync from "./logos/zkSync.svg";
import lukso from "./logos/lukso.svg";
import celo from './logos/celo.svg';
import lens from './logos/lens.svg';
import bitkeep from './logos/bitkeep.svg';
import gitcoin from './logos/gitcoin.svg';

function Sponsors() {
  const lead = [
    {
      name: "foresightVentures",
      logo: foresightVentures,
    },
    {
      name: "zkSync",
      logo: zkSync,
    },
    {
      name: "lukso",
      logo: lukso,
    },
    {
      name: "drips",
      logo: drips,
    },
    {
      name: "bitkeep",
      logo: bitkeep,
    },
    {
      name: "gitcoin",
      logo: gitcoin,
    },
    {
      name: "celo",
      logo: celo,
    },
  ];
  const core = [
    {
      name: "aztec",
      logo: aztec,
    },
    {
      name: "karpatkey",
      logo: karpatkey,
    },
    {
      name: "ens",
      logo: ens,
    },
    {
      name: "lens",
      logo: lens,
    },
  ];

  const node = [
    {
      name: "consensys",
      logo: consensys,
    },
  ];

  const lines = [
    { title: "Lead", list: lead },
    { title: "Core", list: core },
    { title: "Node", list: node },
  ];

  return (
    <div className="sponsors">
      <h3 className="coming-soon">Coming soon</h3>
      {/* {lines.map((line) => (
        <div className={`sponsors-line ${line.title}`} key={line.title}>
          <div className="line-logos">
            {line.list.map((sponsor) => (
              <Sponsor
                logo={sponsor.logo}
                name={sponsor.name}
                key={sponsor.name}
              />
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default Sponsors;
