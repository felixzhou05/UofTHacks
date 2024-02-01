import React, { useState, useCallback, useEffect } from "react"; // Added useState here
import { useNavigate } from "react-router-dom";
import FileUpload from './FileUpload'; // Removed the .js extension and ensured it's in the same directory
import "./DesktopApp.css";
import axios from 'axios';
import { Spotify } from "react-spotify-embed";

const DesktopApp: React.FC = () => {
  const [uploadedImagePath, setUploadedImagePath] = useState('');
  const navigate = useNavigate();
  const authorizationUrl = 'https://accounts.spotify.com/authorize?client_id=64f1524ada334d40a89ddf08b6a67a00&response_type=code&redirect_uri=http://localhost:5000/callback&scope=user-read-private%20user-read-email%20playlist-modify-private'

  const onRewindFrameClick = useCallback(() => {
    navigate("/desktop-profile");
  }, [navigate]);

  const onRewindFrame1Click = useCallback(() => {
    navigate("/desktop-archive");
  }, [navigate]);

  const handleLoginClick = () => {
    window.location.href = authorizationUrl;
  };

  // Function to be called when an image is uploaded successfully
  const onImageUpload = (imagePath: string) => {
    // Assuming imagePath is the path returned from the Flask backend
    // Update the state with the Flask server's URL
    setUploadedImagePath(`http://localhost:5000${imagePath}`);
  };


  return (
    <div className="desktop-app">
      <FileUpload onImageUpload={onImageUpload} />
      <section className="f-r-a-m-e">
        <div className="f-r-a-m-e-child" />
        <div className="f-r-a-m-e1">
          <div className="e-l-l-i-p-s-e" />
          <img
            className="f-r-a-m-e-item"
            loading="eager"
            alt=""
            src="/group-36711.svg"
          />
          <div className="f-r-a-m-e2">
            <img className="v-e-c-t-o-r" alt="" src="/v-e-c-t-o-r.svg" />
            <div className="audio-2">
              <div className="e-l-l-i-p-s-e1" />
              <img
                className="image-422-icon"
                loading="eager"
                alt=""
                src="/image-422@2x.png"
              />
            </div>
            <div className="audio-1">
              <div className="audio-1-child" />
              <img className="image-423-icon" alt="" src="/image-422@2x.png" />
            </div>
            <div className="wrapper-photo">
              <img className="photo-icon" alt="" src={uploadedImagePath} />
            </div>
          </div>
        </div>
        <header className="nav">
          <img
            className="nav-child"
            loading="eager"
            alt=""
            src="/group-5.svg"
          />
          <div className="logo">
            <img className="vector-icon" alt="" />
          </div>
          <div className="icons">
            <img
              className="icons-child"
              loading="eager"
              alt=""
              src="/group-12@2x.png"
            />
            <img
              className="icons-item"
              loading="eager"
              alt=""
              src="/group-13.svg"
            />
          </div>
        </header>
        <div className="f-r-a-m-e3">
          <button className="f-r-a-m-e4">
            <b className="upload-a-photo">Upload a Photo</b>
          </button>
          <button className="f-r-a-m-e5" onClick={handleLoginClick}>
            <b className="snap-a-photo"> Get Playlist</b>
          </button>
        </div>
      </section>
      <section className="f-r-a-m-e6">
        <div className="t-e-x-t">
          <h2 className="todays-vocal-vibes">Today’s Vocal Vibes</h2>
          <div className="here-are-your-container">
            <span>{`Here are your `}</span>
            <b>top songs</b>
            <span>, generated from your photo.</span>
          </div>
        </div>
        <Spotify link="https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw" />
      </section>
      <footer className="frame-tunes">
        <div className="frame-tunes-child" />
        <img className="vector-line-icon" alt="" src="/vector-2.svg" />
        <button className="rewind-frame" onClick={onRewindFrameClick}>
          <b className="todays-tunes">Today’s Tunes</b>
        </button>
        <button className="rewind-frame1" onClick={onRewindFrame1Click}>
          <b className="rewind">Rewind</b>
        </button>
      </footer>
    </div>
  );
};

export default DesktopApp;
