import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getBg, getCaption, getHeight, getWidth } from "../../store/selectors";
import { StyledCanvas } from "./styles";

const PlaceholderImg = () => {
  const bg = useSelector(getBg);
  const width = useSelector(getWidth);
  const height = useSelector(getHeight);
  const caption = useSelector(getCaption);
  //
  //Why useing of generics solves the problem below?
  //
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext("2d");

    ctx!.fillStyle = bg;
    ctx!.fillRect(0, 0, +width, +height);
    ctx!.fillStyle = "black";
    ctx!.font = "20px Georgia";
    ctx!.textAlign = "center";
    ctx!.textBaseline = "middle";
    const text = caption ? caption : `${width} + ${height}`;
    ctx!.fillText(text, +width / 2, +height / 2);
  }, [bg, width, height, caption]);

  const download = () => {
    const link = document.createElement("a");
    link.download = "download.png";
    const canvas = canvasRef.current;
    link.href = canvas!.toDataURL();
    link.click();
  };

  return (
    <div className="img">
      <StyledCanvas
        width={width}
        height={height}
        className="canvas-settings"
        ref={canvasRef}
      />
      <button onClick={download}>Download</button>
    </div>
  );
};

export default PlaceholderImg;
