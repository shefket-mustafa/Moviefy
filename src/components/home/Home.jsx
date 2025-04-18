import { NavLink } from "react-router";
import "./home.css";
import welcomingImage from "/images/home-page-container.jpg";

export default function Home() {
  return (
    <>
      <div className="home-page-container">
        <div className="sub-container">
          <div className="home-page-welcoming">
            <p>
              Welcome to <strong>Moviefy</strong> — Your movie universe, simplified. <br />
              Discover trending films, search by title, and explore <br />{" "}
              cinematic gems from around the globe.
            </p>
            <NavLink className={"home-nav"} to={"/movies"}>
              Explore
            </NavLink>
          </div>

          <div className="welcoming-image">
            <img src={welcomingImage} alt="Loading.." />
          </div>
        </div>
      </div>

    <div className="lower-home">

      <div className="secondary-container-left">
      <div className="sec-con-icons">

        <p style={{color:'rgb(0, 115, 128)'}}>Share Moviefy with<br/>
         your friends</p>
         
         <a href="https://telegram.org" target="_blank" rel="noreferrer">
    <img
      alt="telegram sharing button"
      className="telegram-icon"
      src="https://platform-cdn.sharethis.com/img/telegram.svg"
    />
  </a>

  <a href="https://twitter.com" target="_blank" rel="noreferrer">
    <img
      alt="twitter sharing button"
      className="twitter-icon"
      src="https://platform-cdn.sharethis.com/img/twitter.svg"
    />
  </a>

  <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <img
      alt="facebook sharing button"
      className="facebook-icon"
      src="https://platform-cdn.sharethis.com/img/facebook.svg"
    />
  </a>

  <a href="https://reddit.com" target="_blank" rel="noreferrer">
    <img
      alt="reddit sharing button"
      className="reddit-icon"
      src="https://platform-cdn.sharethis.com/img/reddit.svg"
    />
  </a>
      </div>

        <p>
          Moviefy is a free movie streaming platform where you can 
          <strong>watch and download movies</strong> in ultra HD — without
          registration, fees, or annoying popups. With just one non-intrusive ad
          to help us cover server costs, we focus on offering a clean and
          enjoyable space for all movie lovers.
        </p>

        <h3 style={{color:'black'}}>🎬 Why Choose Moviefy?</h3>
        <ul>
          <li>
            <strong style={{color:'black'}}>Safe Streaming:</strong> We only use one carefully-monitored
            ad source and constantly scan for anything suspicious to keep
            Moviefy safe for everyone.
          </li>
          <li>
            <strong style={{color:'black'}}>Massive Movie Library:</strong> From blockbusters to indie
            gems, we've got a wide range of genres — action, drama, comedy,
            romance, thriller, sci-fi, and more. Subtitled and dubbed options
            are available too.
          </li>
          <li>
            <strong style={{color:'black'}}>HD Quality, Your Way:</strong> Whether you're on a slow
            connection or lightning-fast Wi-Fi, Moviefy lets you stream in
            resolutions from 360p to 1080p. Choose what works for you.
          </li>
          <li>
            <strong style={{color:'black'}}>Fast & Easy:</strong> Our platform loads quickly and streams
            smoothly. Want to download and watch offline? You can do that too —
            hassle-free.
          </li>
          <li>
            <strong style={{color:'black'}}>Always Up to Date:</strong> We update our collection daily
            and take content requests seriously — so you'll never run out of
            fresh movies to enjoy.
          </li>
          <li>
            <strong style={{color:'black'}}>Simple Interface:</strong> Moviefy's clean design is easy
            to navigate whether you're tech-savvy or brand new to online
            streaming. Search, browse, and discover in seconds.
          </li>
          <li>
            <strong style={{color:'black'}}>Works Everywhere:</strong> Whether you're on your desktop or
            phone, Moviefy is optimized to deliver a great experience on any
            screen.
          </li>
          <li>
            <strong style={{color:'black'}}>Here for You 24/7:</strong> Got a question or found a broken
            link? Our support team is always around to help, just a message
            away.
          </li>
        </ul>

        <p>
          If you're looking for a reliable, free, and fan-friendly movie site —
          give Moviefy a try. And if you love what we do, don't forget to
          bookmark us and share the word with your friends!
        </p>

        <p>
          <strong>Thanks for being part of the Moviefy family!</strong>
        </p>
      </div>
      <div className="secondary-container-right">

      <p>Most popular movies:</p>
    
      <div className="topics">
      <div className="topics-text">
    <p><strong>Title: Gladiator</strong></p>
    <p>Genre: Action/Adventure</p>
    <p>Year: 2000</p>
  </div>
      <img src="https://i.ebayimg.com/00/s/MTYwMFgxMDU2/z/epsAAOSwDjdka0YZ/$_57.JPG?set_id=880000500F" alt="Loading.." />
      </div>

      <div className="topics">
      <div className="topics-text">
    <p><strong>Title: The Shawshank Redemption</strong></p>
    <p>Genre: Thriller/Crime</p>
    <p>Year: 1994</p>
  </div>
      <img src="https://humanehollywood.org/app/uploads/2020/06/5KCVkau1HEl7ZzfPsKAPM0sMiKc-scaled.jpg" alt="Loading.." />
      </div>

      <div className="topics">
      <div className="topics-text">
    <p><strong>Title: Avatar</strong></p>
    <p>Genre: Sci-fi/Action</p>
    <p>Year: 2009</p>
  </div>
      <img src="https://c8.alamy.com/comp/2JH1480/zoe-saldana-poster-avatar-2009-2JH1480.jpg" alt="Loading.." />
      </div>

      </div>
      </div>
    </>
  );
}
