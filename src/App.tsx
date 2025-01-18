import { useState } from "react";
import { DotImage, LinkRow, NameRow } from "./components/home.components";
import "./App.css";

function App() {
  const [showImage, setShowImage] = useState(false);
  return (
    <div className="container">
      <div className="text-container">
        <NameRow
          text={"Ghiri Harihaaran"}
          showImage={showImage}
          setShowImage={setShowImage}
        />
        <div className="content-row">{"<Developer/>"}</div>
        <div className="empty-row"></div>
        <LinkRow text={"Striim 2022 → ····"} link={"https://www.striim.com/"} />
        <div className="empty-row"></div>
        <LinkRow text={"Portfolio"} />
        <LinkRow text={"Email"} link={"mailto:ghirihari@gmail.com"} />
        <div className="empty-row"></div>
        <LinkRow text={"Rides"} />
        <LinkRow
          text={"Instagram"}
          link={"https://www.instagram.com/ghirihari7/"}
        />
        <LinkRow
          text={"Linkedin"}
          link={"https://www.linkedin.com/in/ghirihari/"}
        />
        <LinkRow text={"Twitter"} link={"https://x.com/ghirihari7"} />
      </div>
      <DotImage showImage={showImage} />
    </div>
  );
}

export default App;
