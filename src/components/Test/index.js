import classnames from "classnames/bind";

// Components
import MessageList from "./components/MessageList";

import styles from "./style.module.scss";

const cx = classnames.bind(styles);

function Test() {
  return (
    <div className={cx("test")}>
      <MessageList />
    </div>
  );
}

export default Test;
