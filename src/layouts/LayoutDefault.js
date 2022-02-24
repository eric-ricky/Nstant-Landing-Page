import React, { useState } from "react";
import Sticky from "react-stickynode";
import { Header, Footer } from "../components/layout";

const LayoutDefault = (props) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };
  return (
    <>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? "sticky" : "unSticky"}`} />
      </Sticky>
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default LayoutDefault;
