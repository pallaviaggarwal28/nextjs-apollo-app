import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { renderStyles } from "vcc-ui";

import { getRenderer } from "../vcc-ui.config.js";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const renderer = getRenderer();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => <App {...props} renderer={renderer} />
      });

    const initialProps = await Document.getInitialProps(ctx);
    const styles = renderStyles(renderer);
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...styles]
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
