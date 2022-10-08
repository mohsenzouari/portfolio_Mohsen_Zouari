import "./intro.scss";
import { init } from "ityped";
import Typewriter from 'typewriter-effect';
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1700,
      backSpeed: 60,
      strings: ["m'appelle Mohsen Zouari.", "suis un développeur informatique."],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/my_pic.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wraper">
          <h3><mark> Bonjour,</mark></h3>
          <br />
          <h2>&nbsp;Bienvenue sur mon portfolio</h2>
          <br />
          <h3>
            Je <span ref={textRef}></span>
          </h3>
          <br />
          

          {/* <p>
            I am a full-stack React, Asp.net developer and WPF && Winforms
            developer. I live in Ariana, Tunisia. I love everything about the
            Web and mobile developement. My ideal day consists of solving real
            problems, creating web pages from scratch, testing a new library,
            adding value, sharing my knowledge and learning something new. Check
            out my portfolio to see some of my projects.
          </p> */}
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
