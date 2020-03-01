import React from "react";

const Layout: React.FC = (props: any) => (
  <div>
    {props.children}
    <style jsx global>
      {`
        body {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          background: #1d1d1d;
          letter-spacing: 1px;
          width: 100vw;
          min-height: 100vh;
          overflow-x: hidden;
        }
      `}
    </style>
  </div>
);

export default Layout;
