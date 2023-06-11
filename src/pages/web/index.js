import classnames from "classnames/bind";
import dynamic from "next/dynamic";

// Libs
import { useSocket } from "@/hooks/useSocket";

// Components
// import RTCPlayer from "@/components/common/RTCPlayer";

import styles from "./style.module.scss";

const RTCPlayer = dynamic(() => import("../../components/common/RTCPlayer"), {
  ssr: false,
});

const cx = classnames.bind(styles);

export default function Web() {
  const { socketRef } = useSocket();

  return (
    <div className={cx("web")}>
      <RTCPlayer socketRef={socketRef} />
    </div>
  );
}
