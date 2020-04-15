import "../assets/style/global.scss";
import Header from "../components/common/Header";

const Did0esMe = ({
  Component,
  pageProps
}: {
  Component: any;
  pageProps: any;
}) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default Did0esMe;
