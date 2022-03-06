import styles from "./style.module.scss";
import classnames from "classnames/bind";
import { useTranslation, Trans } from "react-i18next";

import { useDateOption } from "@/hooks/useDateOption";

const cx = classnames.bind(styles);

export default function Home() {
  const { t } = useTranslation();

  const { yearOptions, monthOptions, dayOptions } = useDateOption({
    year: "2021",
    month: "7",
  });

  console.log("yearOptions", yearOptions);
  console.log("monthOptions", monthOptions);
  console.log("dayOptions", dayOptions);

  const { i18n } = useTranslation();

  const handleLangleClick = (newValue) => {
    console.log("newValue", newValue);
    i18n.changeLanguage(newValue);
  };

  const score = 30;

  return (
    <div className={cx("home")}>
      <div className={cx("home-header")}>
        <button onClick={() => handleLangleClick("en")}>English</button>
        <button onClick={() => handleLangleClick("zh-Hant")}>中文</button>
      </div>
      <div className={cx("home-content")}>
        <p>{t("User_Name")}</p>
        <Trans i18nKey="Score" score={score}>
          <p>{{ score }}</p>
        </Trans>
      </div>
    </div>
  );
}
