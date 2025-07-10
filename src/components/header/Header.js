import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";

import {
  greeting,
  workExperiences,
  skillsSection,
  // openSource,
  // blogSection,
  // talkSection,
  achievementSection,
  // resumeSection
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);

  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;

  // 🔒 Commented out: These sections are not added
  // const viewOpenSource = openSource.display;
  // const viewBlog = blogSection.display;
  // const viewTalks = talkSection.display;
  // const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}

          {/* ❌ Open Source - section not included */}
          {/* {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )} */}

          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}

          {/* ❌ Blog - section not included */}
          {/* {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )} */}

          {/* ❌ Talks - section not included */}
          {/* {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )} */}

          {/* ❌ Resume - section not included */}
          {/* {viewResume && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )} */}

          {/* ✅ Education - custom section added */}
          <li>
            <a href="#education">Education</a>
          </li>

          {/* ✅ Projects - custom section added */}
          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact Me</a>
          </li>

          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
