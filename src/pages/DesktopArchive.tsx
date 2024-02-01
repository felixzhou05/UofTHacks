import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DesktopArchive.css";

const DesktopArchive: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-archive">
      <header className="nav1">
        <img className="nav-item" loading="eager" alt="" src="/group-51.svg" />
        <div className="logo1">
          <img className="vector-icon1" alt="" />
        </div>
        <div className="icons1">
          <img
            className="icons-inner"
            loading="eager"
            alt=""
            src="/group-121@2x.png"
          />
          <img
            className="group-icon"
            loading="eager"
            alt=""
            src="/group-131.svg"
          />
        </div>
      </header>
      <img className="desktop-archive-child" alt="" />
      <main className="day-review-frame">
        <section className="record-rewind-parent">
          <h1 className="record-rewind">Record Rewind</h1>
          <div className="wrapper-group-16">
            <img
              className="wrapper-group-16-child"
              loading="eager"
              alt=""
              src="/group-16@2x.png"
            />
          </div>
          <textarea
            className="frame-child"
            placeholder="Take a scroll down memory lane by revisiting your old memory playlists."
            rows={12}
            cols={24}
          />
        </section>
        <section className="your-day-wrapped">
          <div className="rectangle-parent">
            <img className="frame-item" alt="" src="/rectangle-21@2x.png" />
            <button className="rectangle-group">
              <div className="frame-inner" />
              <b className="your-day-wrapped1">Your Day Wrapped: 28/01/2024</b>
            </button>
          </div>
          <div className="rectangle-container">
            <img className="rectangle-icon" alt="" src="/rectangle-28@2x.png" />
            <button className="frame-button">
              <div className="rectangle-div" />
              <b className="your-day-wrapped2">Your Day Wrapped: 22/01/2024</b>
            </button>
          </div>
          <div className="wrapper-frame-5">
            <input
              className="wrapper-frame-5-child"
              placeholder="Your Day Wrapped: 16/01/2024"
              type="text"
            />
            <div className="frame-div">
              <div className="frame-child1" />
              <b className="your-day-wrapped3">Your Day Wrapped: 16/01/2024</b>
            </div>
          </div>
          <div className="wrapper-frame-7">
            <input
              className="wrapper-frame-7-child"
              placeholder="Your Day Wrapped: 01/01/2024"
              type="text"
            />
            <div className="rectangle-parent1">
              <div className="frame-child2" />
              <b className="your-day-wrapped4">Your Day Wrapped: 01/01/2024</b>
            </div>
          </div>
          <div className="rectangle-parent2">
            <img className="frame-child3" alt="" src="/rectangle-31@2x.png" />
            <button className="rectangle-parent3">
              <div className="frame-child4" />
              <b className="your-day-wrapped5">Your Day Wrapped: 03/12/2024</b>
            </button>
          </div>
          <div className="rectangle-parent4">
            <img className="frame-child5" alt="" src="/rectangle-32@2x.png" />
            <button className="rectangle-parent5">
              <div className="frame-child6" />
              <b className="your-day-wrapped6">Your Day Wrapped: 01/10/2023</b>
            </button>
          </div>
          <div className="rectangle-parent6">
            <img className="frame-child7" alt="" src="/rectangle-33@2x.png" />
            <div className="rectangle-parent7">
              <div className="frame-child8" />
              <b className="your-day-wrapped7">Your Day Wrapped: 24/06/2023</b>
            </div>
          </div>
          <div className="rectangle-parent8">
            <img className="frame-child9" alt="" src="/rectangle-34@2x.png" />
            <div className="rectangle-parent9">
              <div className="frame-child10" />
              <b className="your-day-wrapped8">Your Day Wrapped: 12/05/2023</b>
            </div>
          </div>
          <div className="rectangle-parent10">
            <img className="frame-child11" alt="" src="/rectangle-35@2x.png" />
            <div className="rectangle-parent11">
              <div className="frame-child12" />
              <b className="your-day-wrapped9">Your Day Wrapped: 15/03/2023</b>
            </div>
          </div>
        </section>
      </main>
      <footer className="vector-generator">
        <img className="vector-icon2" alt="" src="/vector-1.svg" />
        <div
          className="generate-new-tracks-wrapper"
          onClick={onFrameContainerClick}
        >
          <h1 className="generate-new-tracks">Generate New Tracks</h1>
        </div>
      </footer>
    </div>
  );
};

export default DesktopArchive;
