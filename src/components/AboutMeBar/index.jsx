import { StyleAboutMeBar } from "./style";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

export function AboutMeBar() {
  return (
    <StyleAboutMeBar>
      <div>
        <p>E-mail: gomesbruno030@outlook.com</p>
        <p>Tel: (12)99189-1887</p>
        {/* <p>CV:</p> */}
      </div>
      <div className="boxAboutBox">
        <p className="iconAboutBox">
          <AiFillGithub />
        </p>
        <p className="iconAboutBox">
          <BsLinkedin />
        </p>
      </div>
    </StyleAboutMeBar>
  );
}
