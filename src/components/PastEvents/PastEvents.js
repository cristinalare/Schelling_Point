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
    return (
      <div className='past-events'>
        <Parallax className='past-events-video' opacity={[0, 2]} startScroll={100} scale={[0.8, 1.2]} speed={8}>
          <video poster={videoPoster} controls disablePictureInPicture controlsList="nodownload noplaybackrate" preload="none" width="640" height="360">
            <source src={spBogota} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </Parallax>

        <div className='past-events-playlists'>
          <PlaylistBtn name="Denver '22" link='https://www.youtube.com/playlist?list=PLvTrX8LNPbPlryx_S85pZPfH9yD7qcPsg' />
          <PlaylistBtn name='Amsterdam' link='https://www.youtube.com/playlist?list=PLvTrX8LNPbPlLNcFPuWiac3W19cUSaKFF' />
          <PlaylistBtn name='Bogota' link='https://www.youtube.com/watch?v=K8tEQui7zEo&list=PLvTrX8LNPbPkQ3qDNpQDRZQClhUl_BJQp' />
           <PlaylistBtn name="Denver '23" link='https://www.youtube.com/playlist?list=PLvTrX8LNPbPmhPdK2sXR2lT20Ty9fT9t1' />

        </div>
      </div>
    );
}

export default PastEvents;