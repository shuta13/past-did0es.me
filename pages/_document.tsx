import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />

          <meta name="description" content="APOSTRO" />
          <meta property="og:site_name" content="APOSTRO" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://did0es.me" />
          <meta property="og:title" content="APOSTRO" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:description" content="APOSTRO" />
          <meta
            property="og:image"
            content="https://did0es.me/static/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;