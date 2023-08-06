import classnames from "classnames/bind";

// Libs

import styles from "./style.module.scss";

const cx = classnames.bind(styles);

function Message(props) {
  const { className, text } = props;

  return <div className={cx("message", className)}>{text}</div>;
}

export default Message;
