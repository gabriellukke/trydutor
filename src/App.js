import React from 'react';
import Form from './components/Form';
import Translated from './components/Translated';
import { getLanguages } from './services/API';

class App extends React.Component {
  componentDidMount() {
    getLanguages();
  }

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
