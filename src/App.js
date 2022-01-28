import React from 'react';
import Box from './components/Box';
import Form from './components/Form';
import TranslateProvider from './context/TranslateProvider';

export default function App() {
  return (
    <TranslateProvider>
      <main>
        <h1>
          📗 Try<span className="title">dutor</span>
        </h1>
        <Form />
        <Box />
      </main>
    </TranslateProvider>
  );
}
