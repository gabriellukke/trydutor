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
        <h1>
          Try<span className="title">dutor</span>
        </h1>
        <Form />
        <Translated />
      </main>
    );
  }
}

export default App;
