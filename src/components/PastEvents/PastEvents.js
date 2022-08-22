import { useRef, useEffect } from 'react';
import './PastEvents.css';
import PastEventsImg from './PastEventsImg';
import { Parallax } from 'react-scroll-parallax';
import spAms from './sp-amsterdam.mp4';
import PlaylistBtn from './PlaylistBtn/PlaylistBtn';

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);

function PastEvents() {

    const gradientTarget = useRef();
    const flower = useRef();
    
    useEffect(() => {
        const gradientAnimation = gsap.timeline({scrollTrigger: {
            scrub: true,
            trigger: flower.current,
            start: 'top 70%',
            end: '+=70%'
        }});
        gradientAnimation.to(gradientTarget.current, {
            attr: {r: 1.8}
        });
         return () => gradientAnimation.kill();
    }, []);

    // const onMouseOver = () => {
    //     tl.play(0);
    // }
    // const onMouseLeave = () => {
    //     tl.reverse();
    // }

    const videoRef = useRef();

    return (
        <div className='past-events'>
            <Parallax className='past-events-video' opacity={[0, 2]} startScroll={100} scale={[0.8, 1.2]} speed={8} onEnter={() => videoRef.current.play()} onExit={() => videoRef.current.pause()}>
                <video ref={videoRef} controls  disablePictureInPicture controlsList="nodownload noplaybackrate" muted preload="none" width="640" height="360">
                    <source src={spAms} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
            </Parallax>

            <div className='past-events-playlists'>
                <PlaylistBtn name='Denver' link='https://www.youtube.com/playlist?list=PLvTrX8LNPbPlryx_S85pZPfH9yD7qcPsg' />
                <PlaylistBtn name='Amsterdam' link='https://www.youtube.com/playlist?list=PLvTrX8LNPbPlLNcFPuWiac3W19cUSaKFF' />
            </div>
            <PastEventsImg ref={flower} gradientTarget={gradientTarget} imgClass="past-events-flower" />
        </div>
    );
}

export default PastEvents;