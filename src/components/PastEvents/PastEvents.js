import { useRef, useEffect } from 'react';
import './PastEvents.css';
import { Parallax } from 'react-scroll-parallax';
import spBogota from './sp-bogota.mp4';
import videoPoster from './video-poster.png';
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

    return (
      <div className='past-events'>
        <Parallax className='past-events-video' opacity={[0, 2]} startScroll={100} scale={[0.8, 1.2]} speed={8}>
          <video poster={videoPoster} controls disablePictureInPicture controlsList="nodownload noplaybackrate" preload="none" width="640" height="360">
            <source src={spBogota} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </Parallax>

        <div className='past-events-playlists'>
          <PlaylistBtn name='Denver' link='https://www.youtube.com/playlist?list=PLvTrX8LNPbPlryx_S85pZPfH9yD7qcPsg' />
          <PlaylistBtn name='Amsterdam' link='https://www.youtube.com/playlist?list=PLvTrX8LNPbPlLNcFPuWiac3W19cUSaKFF' />
          <PlaylistBtn name='Bogota' link='https://www.youtube.com/watch?v=K8tEQui7zEo&list=PLvTrX8LNPbPkQ3qDNpQDRZQClhUl_BJQp' />

        </div>
      </div>
    );
}

export default PastEvents;