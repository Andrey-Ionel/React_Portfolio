import React from 'react';

export const App = (): JSX.Element => {
  return <h1>{new Date().toLocaleDateString()}</h1>;
};
