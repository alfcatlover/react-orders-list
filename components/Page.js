import React from 'react';

import Header from './Header';

export default function Page({title, children}) {
  return (
    <>
      <Header title={title}/>
      <div className="wrap">
        {children}
      </div>
    </>
  );
}