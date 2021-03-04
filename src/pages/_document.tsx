import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from "next/document";

interface JsonLdParams {
  title: string;
  updated: string;
  url: string;
  imageUrl: string;
  description: string;
}

// @see https://github.com/vercel/next.js/issues/2213#issuecomment-307478160
const jsonLd = ({
  title,
  updated,
  url,
  imageUrl,
  description
}: JsonLdParams) => {
  const json = {
    "@context": "http://schema.org",
    "@type": "Website",
    name: title,
    headline: title,
    datePublished: "2021-02-02T00:00:00.000Z",
    dateModified: updated,
    url: url,
    mainEntityOfPage: url,
    image: [imageUrl],
    description: description
  };
  return JSON.stringify(json);
};

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

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: jsonLd({
                title: "did0es.me",
                description: "Works, Work Histories of DID0ES",
                imageUrl: "https://did0es.me/og-image.png",
                url: "https://did0es.me",
                updated: new Date().toISOString()
              })
            }}
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
