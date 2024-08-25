import { StyleSkillsBar } from "./style";

import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import {
  // FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";

import { useState } from "react";

import { dataBase } from "../../dabaBase";

// import { AiFillGithub } from "react-icons/ai";

export function SkillsBar() {
  const [titleTech, setTitleTech] = useState("");
  // const [techInfo, setTechInfo] = useState("");
  const [techMyInfo, setTechMyInfo] = useState("");

  function ShowsInformationAbouttheTechnology(title) {
    let data = dataBase.find((element) => element.title === title);

    setTitleTech(data.title);
    // setTechInfo(data.techInfo);
    setTechMyInfo(data.myTechInfo);

    // console.log(techInfo)
    // console.log(techInfo2)
  }

  return (
    <StyleSkillsBar>
      <div className="titleOfSkillsBar1">
        <b>Habilidades</b>
      </div>

      <div className="internalBoxIcon">
        <div>
          <div className="boxIcon">
            <p
              onClick={() => {
                ShowsInformationAbouttheTechnology("HTML 5");
              }}
              className="icon"
            >
              <FaHtml5 />
            </p>
            <p
              onClick={() => {
                ShowsInformationAbouttheTechnology("CSS 3");
              }}
              className="icon"
            >
              <FaCss3Alt />
            </p>
            <p
              onClick={() => {
                ShowsInformationAbouttheTechnology("JavaScript");
              }}
              className="icon"
            >
              <FaJs />
            </p>
            <p
              onClick={() => {
                ShowsInformationAbouttheTechnology("Node.js");
              }}
              className="icon"
            >
              <FaNode />
            </p>
            <p
              onClick={() => {
                ShowsInformationAbouttheTechnology("React");
              }}
              className="icon"
            >
              <FaReact />
            </p>
            <p className="icon">
              <SiPostgresql />
            </p>
            <p className="icon">
              <SiTypescript />
            </p>
            <p className="icon">
              <FaGit />
            </p>
            <p className="icon">
              <TbBrandNextjs />
            </p>
            <p className="icon">
              <FaPython />
            </p>
          </div>
        </div>
        <div className="boxInformation">
          <div className="boxInformationMedium">
            <div className="boxInformationTop">
              <h1>{titleTech}</h1>
            </div>
            <div className="boxInformationLow">
              <p>{techMyInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </StyleSkillsBar>
  );
}
