import "./App.css";

type LinkRowProps = {
  text: string; // The text to display
  link?: string; // Optional link URL
};

const LinkRow: React.FC<LinkRowProps> = ({ text, link = null }) => {
  const navigate = (url: string) => window.open(url, "_blank");
  return (
    <div className="content-row link" onClick={() => link && navigate(link)}>
      <label className="link-text">{text}</label>
      <label className="link-icon">&nbsp;[{link ? "↗" : "-"}]</label>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <div className="content-row">Ghiri Harihaaran</div>
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
  );
}

export default App;
