import classnames from "classnames/bind";

import RtcPlayer from "@/components/common/RTCPlayer";

import styles from "./style.module.scss";

const cx = classnames.bind(styles);

export default function Web() {
  return (
    <div className={cx("web")}>
      <RtcPlayer />
    </div>
  );
}
