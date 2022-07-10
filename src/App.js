import React from 'react';
import Box from './components/Box';
import Form from './components/Form';
import TranslateProvider from './context/TranslateProvider';

export default function App() {
  return (
    <TranslateProvider>
      <main className="flex flex-col items-center h-screen bg-blue-400">
        <h1 className="text-3xl font-bold py-10">
          📗 Try<span className="">dutor</span>
        </h1>
        <div className="flex justify-center min-w-full gap-5">
          <Form />  
          <Box />
        </div>
      </main>
    </TranslateProvider>
  );
}
