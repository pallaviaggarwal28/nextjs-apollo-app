import { ApolloProvider } from "@apollo/react-hooks";
import { StyleProvider, ThemePicker } from "vcc-ui";
import client from "../apollo-client";

function MyApp({ Component, pageProps, renderer }) {
  return (
    <ApolloProvider client={client}>
      <StyleProvider renderer={renderer}>
        <ThemePicker variant="light">
          <Component {...pageProps} />
        </ThemePicker>
      </StyleProvider>
    </ApolloProvider>
  );
}

export default MyApp;
