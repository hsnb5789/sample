import React from "react";
import "./skills.css";
import UIdesign from "../../assets/ui-design.png";
import Webdesign from "../../assets/website-design.png";
import Appdesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDescription">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS and JavaScript, as well as design software such as Adobe
        Photoshop and illustrator.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIdesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX design</h2>
            <p>This is a demo text, you can write your own content here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Webdesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website design</h2>
            <p>This is a demo text, you can write your own content here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Appdesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App design</h2>
            <p>This is a demo text, you can write your own content here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
