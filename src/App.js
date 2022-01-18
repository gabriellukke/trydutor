import React from 'react';
import Form from './components/Form';
import Translated from './components/Translated';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <Form />
        <Translated />
      </main>
    );
  }
}

export default App;
