import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export function VideoCard({ _id, thumbnail, category, title, views, creator }) {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const updateImage = () => {
      setBackgroundImage(thumbnail);
    };

    updateImage();
  }, [thumbnail]);

  return (
    <Link to={"/video/" + _id} className="no-decoration">
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="video-card"
      ></div>

      <div className="video-title">
        <div className="video-icon"> </div>
        <div className="video-detail">
          <b> {title} </b>
          <b> {category} </b>
          <span>
            {" "}
            {views} views | {creator}{" "}
          </span>
        </div>
      </div>
    </Link>
  );
}
