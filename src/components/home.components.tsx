import { image } from "./dot";

type LinkRowProps = {
  text: string;
  description?: string;
  link?: string;
};

export const LinkRow: React.FC<LinkRowProps> = ({
  text,
  description,
  link = null,
}) => {
  const navigate = (url: string) => window.open(url, "_blank");
  return (
    <div className="content-row link" onClick={() => link && navigate(link)}>
      <label className="link-text">{text}</label>
      {description && (
        <label className="link-description">({description})</label>
      )}
      <label className="link-icon">&nbsp;[{link ? "↗" : "-"}]</label>
    </div>
  );
};

type NameRowProps = {
  text: string;
  showImage: boolean;
  setShowImage: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NameRow: React.FC<NameRowProps> = ({
  text,
  showImage,
  setShowImage,
}) => {
  return (
    <div className="content-row link" onClick={() => setShowImage(!showImage)}>
      <label className="link-text">{text}</label>
      <label className="link-icon">
        &nbsp;[<span className="symbol">{showImage ? "*" : " "}</span>]
      </label>
    </div>
  );
};

type DotImageProps = {
  showImage: boolean;
};

export const DotImage: React.FC<DotImageProps> = ({ showImage }) => {
  return (
    <div className={showImage ? "dotImage show" : "dotImage"}>{image}</div>
  );
};
