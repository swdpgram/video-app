import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export function Card({ thumbnail, category }) {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const updateImage = () => {
      setBackgroundImage(thumbnail);
    };

    updateImage();
  }, [thumbnail]);

  return (
    <Link to={"/category/" + category} className="no-decoration">
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="card"
      ></div>

      <div className="category-title">
        <span> {category} </span>
      </div>
    </Link>
  );
}
