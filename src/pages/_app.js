import { withTrans } from "@/i18n/withTrans";
import { useTranslation } from "react-i18next";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withTrans(MyApp);
