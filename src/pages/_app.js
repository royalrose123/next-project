import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { appWithTranslation } from "next-i18next";
import "core-js";
// import "@babel/polyfill";

import App from "@/components/App";

import "../styles/globals.scss";

Sentry.init({
  dsn: "https://f7242f65f6664800b5c502c10f4fe56c@o1189518.ingest.sentry.io/6310267",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  environment: "test",
});

function MyApp(props) {
  return <App {...props} />;
}

export default appWithTranslation(MyApp);
