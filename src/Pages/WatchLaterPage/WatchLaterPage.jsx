import { useParams } from "react-router";
import { LeftAside } from "../../Components/LeftAside";
import { useData } from "../../Context/data-context";
import { VideoCard } from "../../Components/VideoCard";
import { useState, useEffect } from "react";

export function WatchLaterPage() {

  const { watchLater } = useData();

 

  return (
    <div className="home-container">
      <LeftAside />
      
      <div>
      <h1> Watch Later </h1>

      <div className="watchlater-listing"> 
      {watchLater?.map((video) => {
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
