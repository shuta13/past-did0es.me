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
          <meta name="description" content="Works, Work Histories of DID0ES" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="did0es.me" />
          <meta name="twitter:image" content="https://did0es.me/og-image.png" />
          <meta
            name="twitter:description"
            content="Works, Work Histories of DID0ES"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://did0es.me" />
          <meta property="og:title" content="did0es.me" />
          <meta property="og:site_name" content="did0es.me" />
          <meta
            property="og:description"
            content="Works, Work Histories of DID0ES"
          />
          <meta property="og:image" content="https://did0es.me/og-image.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
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
