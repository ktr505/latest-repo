import React from 'react';
import './App.css';
import Container from './Container';

const App = () => {
  return (
    <>
    <Container title="Parent component" children="child component"/>
    </>
  );
};

export default App;
