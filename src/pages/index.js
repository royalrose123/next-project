import styles from "./style.module.scss";
import classnames from "classnames/bind";

import { useDateOption } from "@/hooks/useDateOption";

const cx = classnames.bind(styles);

export default function Home() {
  const { yearOptions, monthOptions, dayOptions } = useDateOption({
    year: "2021",
    month: "7",
  });

  console.log("yearOptions", yearOptions);
  console.log("monthOptions", monthOptions);
  console.log("dayOptions", dayOptions);

  return <div className={cx("home")}>aaa</div>;
}
