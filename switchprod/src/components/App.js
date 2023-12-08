
import '../styles/App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import R3calculator from './R3calculator'


function App() {
  return (
    <ChakraProvider>
       <div className="App">
      <header className="App-header">
       <h1>Préparation de traansition</h1>
      </header>
      
        <R3calculator />

      

    </div>
    </ChakraProvider>
   
  );
}

export default App;
