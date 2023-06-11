import { appWithTranslation } from "next-i18next";
import "core-js";
import store from "@/redux/store";
import { Provider } from "react-redux";

import "../styles/globals.scss";

import App from "@/components/App";

function MyApp(props) {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
