
import '../styles/App.css';
import * as React from 'react'
import { ChakraProvider,Heading, Text } from '@chakra-ui/react'

import R3calculator from './R3calculator'


function App() {
  return (
    <ChakraProvider>
       <div className="App">
      
      <header className="App-header">
       <Heading><h1>Préparation de transition</h1></Heading>
      </header>
      
        <R3calculator />

      
        <footer> <Text fontSize='xs'>26/06/24 17:17</Text></footer>
    </div>
    </ChakraProvider>
   
  );
}

export default App;
