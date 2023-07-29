import { useParams } from "react-router";
import { LeftAside } from "../../Components/LeftAside";
import { useData } from "../../Context/data-context";
import { VideoCard } from "../../Components/VideoCard";
import { useState, useEffect } from "react";

export function IndividualCategory() {
  const { category } = useParams();
  const { videos } = useData();

  const [categoryVideos, setCategoryVideos] = useState([]);

  useEffect(() => {
    //   console.log(videos);
    const videoList = videos?.filter((item) => item.category === category);
    console.log(videoList);
    setCategoryVideos(videoList);
  }, [category]);

  return (
    <div className="home-container">
      <LeftAside />
      
      <div>
      <h1> {category} </h1>

      <div className="video-listing"> 
      {categoryVideos?.map((video) => {
          return (
            <div key={video._id}>
              <VideoCard {...video} />
            </div>
          );
        })}
         </div>
      
      </div>
    </div>
  );
}
