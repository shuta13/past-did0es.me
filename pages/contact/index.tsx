import React, { useEffect } from "react";

const Contact: React.FC<{
  setIsContactClicked: (isContactClicked: boolean) => void;
}> = props => {
  const { setIsContactClicked } = props;
  useEffect(() => {
    setIsContactClicked(true);
  }, []);
  return <></>;
};

export default Contact;
