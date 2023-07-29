import { useParams } from "react-router";
import { useData } from "../../Context/data-context";
import { useEffect, useState } from "react";
import { LeftAside } from "../../Components/LeftAside";

export function VideoPage() {
  const { _id } = useParams();
  const { videos, watchLater, addToWatchLater, removeFromWatchLater } =
    useData();
  const [videoInfo, setVideoInfo] = useState({});

  const isPresentWatchLater = watchLater.findIndex((item) => item._id === _id);
  console.log(isPresentWatchLater)

  // console.log(_id);

  useEffect(() => {
    // console.log(videos)
    const videoInformation = videos.find((video) => video._id === Number(_id));
    // console.log(videoInformation)
    setVideoInfo(videoInformation);
  }, [_id]);

  return (
    <>
      <div className="home-container">
        <LeftAside />

        <div className="videopage-container-main">
          <iframe
            width="700"
            height="500"
            src={videoInfo.src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div className="videopage-info">
            <div className="video-icontitle">
              <div className="video-icon"> </div>
              <b> {videoInfo?.title} </b>
            </div>

            <div className="video-othericons pointer">
              {isPresentWatchLater === -1 ? (
                <i
                  className="material-symbols-outlined"
                  onClick={() => addToWatchLater(videoInfo)}
                >
                  pace
                </i>
              ) : (
                <i
                  className="material-symbols-outlined"
                  id="remove-watch"
                  onClick={() => removeFromWatchLater(videoInfo)}
                >
                  pace
                </i>
              )}

              <i
                className="material-symbols-outlined pointer"
                onClick={() => console.log("clicked")}
              >
                playlist_add
              </i>
              <i className="material-symbols-outlined pointer"> edit_note</i>
            </div>
          </div>

          <hr />

          <div className="notes-container">
            <h2> My Notes </h2>
          </div>
        </div>
      </div>
    </>
  );
}
