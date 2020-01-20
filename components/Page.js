import React from 'react';
//import Container from 'react-bootstrap/Container';

import Header from "./Header";

export default function Page({title, children}) {
  return (
    <>
      <style jsx="true">{`
                  .wrap {
                    margin-top: 20px;
                    margin-bottom: 20px;
                  }
                `}</style>
      <Header title={title}/>,
      <div className="wrap">
        {children}
      </div>
    </>
  );
}