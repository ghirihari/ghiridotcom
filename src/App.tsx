import { useState } from "react";
import { DotImage, LinkRow, NameRow } from "./components/home.components";
import "./App.css";

function App() {
  const [showImage, setShowImage] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const Projects = [
    {
      name: "VM Architects + Builders",
      description: "A Construction company",
      link: "https://vmab.in/",
    },
    {
      name: "J Vishnu & Associates",
      description: "A Law firm",
      link: "https://jvishnuca.in/",
    },
    {
      name: "A Jayachandran & Associates",
      description: "A Law firm",
      link: "https://ajayachandranassociates.in/",
    },
    {
      name: "Sculpt Fitness",
      description: "A fitness measurements app",
      link: "https://sculptfitness.netlify.app/",
    },
  ];

  const ProjectsList = () => {
    if (!showProjects) return null;
    return (
      <div style={{ marginLeft: "10px" }}>
        {Projects.map((project, index) => (
          <LinkRow
            text={`${index + 1}. ${project.name}`}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
    );
  };

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
        <NameRow
          text={"Projects"}
          showImage={showProjects}
          setShowImage={setShowProjects}
        />
        <ProjectsList />
        <LinkRow text={"Rides"} />
        <LinkRow
          text={"Instagram"}
          link={"https://www.instagram.com/ghirihari7/"}
        />
        <LinkRow text={"Email"} link={"mailto:ghirihari@gmail.com"} />
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
