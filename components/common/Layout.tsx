import React from 'react'

const Layout: React.FC = (props: any) => (
  <div>
    {props.children}
    <style jsx global>
    {`
      body{
        padding: 0;
        margin: 0;
      }
    `}
    </style>
  </div>
)

export default Layout;