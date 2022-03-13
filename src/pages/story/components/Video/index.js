import styles from "./style.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export default function Video(props) {
  const { videoDada, handleNextClick, handlePreviousClick } = props;

  const { current, next, previous } = videoDada;
  const { name, link } = current;

  return (
    <div className={cx("video")}>
      <div className={cx("video__player")}>
        <iframe
          width="100%"
          height="100%"
          src={link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className={cx("video__content")}>
        <div className={cx("video__content__previous")}>
          <p>{previous.name}</p>
          <button onClick={handlePreviousClick}>上一個</button>
        </div>
        <div className={cx("video__content__info")}>{name}</div>
        <div className={cx("video__content__next")}>
          <p>{next.name}</p>
          <button onClick={handleNextClick}>下一個</button>
        </div>
      </div>
    </div>
  );
}
