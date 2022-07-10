import React from 'react';
import Box from './components/Box';
import Form from './components/Form';
import TranslateProvider from './context/TranslateProvider';

export default function App() {
  return (
    <TranslateProvider>
      <main className="flex flex-col items-center bg-blue-400">
        <h1 className="text-3xl font-bold py-10">
          📗 Try<span>dutor</span>
        </h1>
        <Form />
        <Box />
      </main>
    </TranslateProvider>
  );
}
