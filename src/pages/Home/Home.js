import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Speakers from "../../components/Speakers/Speakers";
import Sponsors from '../../components/Sponsors/Sponsors'
import Agenda from '../../components/Agenda/Agenda';
import Afterparty from '../../components/Afterparty/Afterparty';
// import Divider from "../../components/Divider/Divider";
import SectionTemplate from "../../components/SectionTemplate/SectionTemplate";
import PastEvents from "../../components/PastEvents/PastEvents";
import { useRef } from "react";

function Home() {
    const sectionTitles = [
        // {name: 'About', component: <About />, disabled: false}, 
        // {name:'Speakers', component: <Speakers />, disabled: false },
        {name:'Sponsors', component: <Sponsors />, disabled: false},
        // {name:'Agenda', component: <Agenda />, disabled: false},
        // {name:'Afterparty', component: <Afterparty />, disabled: false},
        {name: 'Past Events', component: <PastEvents />, disabled: false}
    ];

    const endRef = useRef();
    return (
        <div>
            {/* <Divider end={endRef} /> */}
            <Hero />
            <div className="sections" style={{ overflowX: 'hidden' }}>
                <div ref={endRef}>
                    <div className="section" id="About">
                        <About />
                    </div>
                {
                    sectionTitles.map((sectionTitle, index) => (
                        !sectionTitle.disabled &&
                        <SectionTemplate title={sectionTitle.name} key={index} index={index}>
                            {sectionTitle.component}
                        </SectionTemplate>
                    ))
                }
                </div>
                
            </div>
        </div>
    );
}

export default Home;