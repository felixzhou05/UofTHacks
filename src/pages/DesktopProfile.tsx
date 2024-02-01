import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DesktopProfile.css";

const DesktopProfile: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCreateTracksContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-profile">
      <header className="nav2">
        <img className="nav-inner" loading="eager" alt="" src="/group-52.svg" />
        <div className="logo2">
          <img className="vector-icon3" alt="" />
        </div>
        <div className="icons2">
          <img
            className="icons-child1"
            loading="eager"
            alt=""
            src="/group-12@2x.png"
          />
          <img
            className="icons-child2"
            loading="eager"
            alt=""
            src="/group-132.svg"
          />
        </div>
      </header>
      <img className="desktop-profile-child" alt="" />
      <section className="f-r-a-m-eframe">
        <div className="r-e-c-t-a-n-g-l-erectangle-parent">
          <div className="r-e-c-t-a-n-g-l-erectangle" />
          <div className="frame-parent">
            <img
              className="frame-child13"
              loading="eager"
              alt=""
              src="/group-36715@2x.png"
            />
            <div className="bobby-yan-parent">
              <b className="bobby-yan">Bobby Yan</b>
              <div className="t0te12345">@t0te12345</div>
            </div>
          </div>
        </div>
      </section>
      <section className="desktop-profile-inner">
        <div className="f-r-a-m-egym-parent">
          <div className="f-r-a-m-egym">
            <div className="t-e-x-tbeats-in-a-bottle">
              <div className="t-e-x-ttoday-songs-summary">
                <div className="t-e-x-ttodays-tunes-playlist-parent">
                  <img
                    className="t-e-x-ttodays-tunes-playlist"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <b className="todays-tunes1">Today’s Tunes</b>
                </div>
                <div className="summary-of-todays">
                  Summary of today’s songs, in a Spotify playlist
                </div>
              </div>
              <div className="workout-prompt">
                <img
                  className="workout-prompt-child"
                  loading="eager"
                  alt=""
                  src="/group-36721.svg"
                />
                <div className="achievement-text">
                  <div className="connect-button">
                    <b className="gym">Gym</b>
                    <i className="achieve-your-latest">
                      Achieve your latest PR with this playlist!
                    </i>
                  </div>
                  <button className="study-group">
                    <b className="connect-spotify-to">
                      Connect Spotify to Save this Playlist
                    </b>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-button">
            <div className="menu-frame">
              <div className="new-track-gen">
                <img
                  className="vector-line-icon1"
                  alt=""
                  src="/vector-21.svg"
                />
                <b className="beats-in-a">Beats in a Bottle</b>
              </div>
              <div className="explore-past-playlists">
                Explore past playlists and songs.
              </div>
            </div>
            <div className="study-work-groups">
              <div className="study-work-groups-inner">
                <div className="studying-group-parent">
                  <input
                    className="studying-group"
                    placeholder="Studying"
                    type="text"
                  />
                  <div className="wrapper-nature-walk-button">
                    <img
                      className="nature-walk-button"
                      alt=""
                      src="/nature-walk-button.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="study-work-groups-child">
                <div className="frame-group">
                  <input
                    className="frame-input"
                    placeholder="Working"
                    type="text"
                  />
                  <div className="wrapper-vector-5">
                    <img
                      className="wrapper-vector-5-child"
                      alt=""
                      src="/nature-walk-button.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="group-div">
                <div className="frame-container">
                  <input
                    className="frame-child14"
                    placeholder="Deep Focus"
                    type="text"
                  />
                  <div className="wrapper-vector-51">
                    <img
                      className="wrapper-vector-5-item"
                      alt=""
                      src="/nature-walk-button.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="study-work-groups-inner1">
                <div className="frame-parent1">
                  <input
                    className="frame-child15"
                    placeholder="Nature Walk"
                    type="text"
                  />
                  <div className="wrapper-vector-52">
                    <img
                      className="wrapper-vector-5-inner"
                      alt=""
                      src="/nature-walk-button.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="generate-track">
        <img className="new-playlist-icon" alt="" src="/vector-1.svg" />
        <div className="create-tracks" onClick={onCreateTracksContainerClick}>
          <b className="generate-new-tracks1">Generate New Tracks</b>
        </div>
      </footer>
    </div>
  );
};

export default DesktopProfile;
