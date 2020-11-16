import React, { useEffect } from "react";

const Contact: React.FC<{
  setIsWorksActive: (isWorksActive: boolean) => void;
  setIsContactActive: (isContactActive: boolean) => void;
}> = props => {
  const { setIsContactActive, setIsWorksActive } = props;
  useEffect(() => {
    setIsContactActive(true);
    setIsWorksActive(false);
  }, []);
  return <></>;
};

export default Contact;
