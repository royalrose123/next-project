import styles from "./style.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export default function Home() {
  return <div className={cx("home")}>aaa</div>;
}
