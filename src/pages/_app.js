import { appWithTranslation } from "next-i18next";
import "core-js";
import store from "@/redux/store";
import { Provider } from "react-redux";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
