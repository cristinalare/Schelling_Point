import InfoCard from "../../components/InfoCard/InfoCard";
import infoHeroBg from "./info-hero-bg.svg";
import afterpartyPoster from "./afterparty-poster.png";
import afterpartyImg from "./afterparty-img.svg";
import "./InfoPage.css";
import { Parallax } from "react-scroll-parallax";

function InfoPage() {
  return (
    <div className="info-page">
      <div className="info-hero">
        <div className="info-hero-bg">
          <Parallax
            translateY={[0, 70]}
            shouldAlwaysCompleteAnimation={true}
            scale={[1, 1.4]}
            opacity={[1, 0.2]}
          >
            <img
              src={infoHeroBg}
              alt=""
              width="450"
              height="450"
              fetchpriority="high"
            />
          </Parallax>
        </div>
        <h1 className="main-xxl">
          All you need
          <br />
          to know
        </h1>
      </div>
      <section style={{ margin: "5vw 1.75rem" }}>
        <InfoCard border={true}>
          <p>
            Stay up to date on all the latest by joining our community on{" "}
            <a href="https://t.me/+bylaWeeWzeI4MjVh" className="link">
              Telegram
            </a>{" "}
            and{" "}
            <a href="https://twitter.com/schellingpoint_" className="link">
              Twitter
            </a>
            .
            <br />
            <br />
            Don’t forget, in order to gain access to Schelling Point, you will
            need to be a confirmed ETHDenver attendee.{" "}
            <a
              href="https://ethdenver.typeform.com/to/FFN8e1Cz?typeform-source=www.google.com"
              className="link"
            >
              Click here
            </a>{" "}
            to apply to ETH Denver TODAY!
          </p>
        </InfoCard>
        <InfoCard title="Conference details" divider={true}>
          <p>
            Schelling Point and ETHDenver are partnering with MEW wallet as
            their official wallet for this year's event. Preinstall MEW wallet
            and claim $BUIDLBux for food and beverages during Schelling Point
            and ETHDenver.<br/>
            Preinstall today: <a
              href="https://www.mewwallet.com"
              className="link"
            >https://www.mewwallet.com</a><br/>
            A MEW representative will be at the check-in table on the day of the Schelling Point event to assist with the MEW wallet setup.<br/><br/>
            <span className="bold">Date: </span>March 2nd 2023
            <br />
            <span className="bold">Time: </span>Doors open at 8:30 AM. The
            conference starts at 10:00 AM.
            <br />
            <span className="bold">Location: </span>
            <a
              className="link"
              href="https://www.google.com/maps/place/4655+Humboldt+St,+Denver,+CO+80216/@39.7813353,-104.9737487,17z/data=!3m1!4b1!4m5!3m4!1s0x876c79a79d6ecaed:0x76b27e8871b63c4c!8m2!3d39.7813353!4d-104.97156?hl=en&authuser=0"
            >
              National Western $SPORK Castle, 4655 Humboldt St, Denver CO 80216
            </a>
          </p>
        </InfoCard>
        <InfoCard title="Check in" divider={true}>
          <p>
            Our first checkpoint will be at the entrance of the National Western
            $SPORK Castle where you will need to show your ETHDenver ticket.
            <br />
            <br />
            After you pass the first checkpoint, make your way up to the third
            floor where you will present your Schelling Point ticket (located in
            your crypto wallet) where a friendly SP volunteer will scan your
            ticket’s QR code. Once you are scanned, you will receive your green
            wristband.
          </p>
        </InfoCard>
        <InfoCard smallPadding={true}>
          <img
            src={afterpartyPoster}
            alt="afterparty-poster"
            width="555"
            height="559"
          />
        </InfoCard>
        <InfoCard title="Afterparty">
          <p>
            After a stacked day of programming featuring some of the most
            brilliant minds in the web3 space, we welcome you to unwind and
            socialize over drinks and delicious snacks, and hit the dance floor
            to make new friends at the official ETHDenver Opening Night Party!
            <br />
            <br />
            Yep, that’s right. Your ticket now doubles as a VIP pass to the
            Schelling Point Happy Hour and the ETHDenver Opening Night Party.
            <br />
            <br />
            How does that work? Both events are happening at the same venue -
            The Mission Ballroom.
            <br />
            <br />
            There’s a limited number of spots available so make sure to come
            early to enjoy the Happy Hour, where you can relax and hang and
            savor some refreshments before the ETHDenver Opening Night Party
            kicks off.
            <br />
            <br />
            <span className="bold">Time:</span> Schelling Point VIP Happy Hour
            starts at 8pm sharp after the ETHDenver Opening Ceremonies.
            <br />
            <br />
            <span className="bold">Location:</span>{" "}
            <a href="https://goo.gl/maps/EYckX2psd77NfPFp9" className="link">
              The Mission Ballroom, 4242 Wynkoop St, Denver, CO 80216
            </a>{" "}
            (2 min drive or 10 min walk from National Western $SPORK Castle)
            <br />
            <br />
            To gain access to the Happy Hour and After Party, you will need to
            show your green wristband or ticket to a Schelling Point organizer.
          </p>
          <Parallax rotate={[0, 120]}>
            <img src={afterpartyImg} width="231" height="230" alt="" />
          </Parallax>
          <p>
            We are so excited to see you in Denver! Each Schelling Point acts as
            a safe place where web3 and collective thriving converge and
            alchemize into powerful ideas and meaningful action. We can't wait
            to witness the incredible conversations, collaborations, and
            innovations that will emerge from this year’s Schelling Point.
          </p>
        </InfoCard>
      </section>
    </div>
  );
}

export default InfoPage;
