
import '../styles/App.css';
import * as React from 'react'
import { ChakraProvider,Heading } from '@chakra-ui/react'

import R3calculator from './R3calculator'


function App() {
  return (
    <ChakraProvider>
       <div className="App">
      <header className="App-header">
       <Heading><h1>Préparation de transition</h1></Heading>
      </header>
      
        <R3calculator />

      

    </div>
    </ChakraProvider>
   
  );
}

export default App;
