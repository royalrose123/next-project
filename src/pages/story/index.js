import { useState } from "react";
import styles from "./style.module.scss";
import classnames from "classnames/bind";

// Components
import Video from "./components/Video";

const cx = classnames.bind(styles);

const videoList = [
  { name: "Robin鄭駱明信", link: "https://www.youtube.com/embed/TonTVHgavtI" },
  { name: "廖苑利醫師", link: "https://www.youtube.com/embed/fh5eiri2DCk" },
  { name: "Lily何麗芳", link: "https://www.youtube.com/embed/5ntukFzpI0s" },
  { name: "學霸男孩Justin", link: "https://www.youtube.com/embed/3SHwHf41-pk" },
];

export default function Story() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleNextClick = () => {
    if (currentVideo < videoList.length - 1) {
      setCurrentVideo((prev) => prev + 1);
    } else {
      setCurrentVideo(0);
    }
  };

  const handlePreviousClick = () => {
    if (currentVideo > 0) {
      setCurrentVideo((prev) => prev - 1);
    } else {
      setCurrentVideo(videoList.length - 1);
    }
  };

  return (
    <div className={cx("story")}>
      <div className={cx("container")}>
        <Video
          {...videoList[currentVideo]}
          videoDada={{
            current: videoList[currentVideo],
            previous:
              videoList[currentVideo - 1] || videoList[videoList.length - 1],
            next: videoList[currentVideo + 1] || videoList[0],
          }}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
        />
      </div>
    </div>
  );
}
