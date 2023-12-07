
import '../styles/App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import {CheckIcon} from '@chakra-ui/icons'

function App() {
  return (
    <ChakraProvider>
       <div className="App">
      <header className="App-header">
       <h1>Préparation de traansition</h1>
      </header>
      <body>
        <div> 
<h3>Prod de départ</h3>
<Input placeholder='Ep' />
<Input placeholder='Type' />
<Input placeholder='Densité' />
<Input placeholder='Largeur' />
<Input placeholder='Poids' />
<Input placeholder='Vitesse' />
<IconButton
  isRound={true}
  variant='solid'
  colorScheme='teal'
  aria-label='Done'
  fontSize='20px'
  icon={<CheckIcon />}
/>
        </div>
        <div> 
<h3>Prod finale</h3>
<Input placeholder='Ep' />
<Input placeholder='Type' />
<Input placeholder='Densité' />
<Input placeholder='Largeur' />
<Input placeholder='Poids' />
<IconButton
  isRound={true}
  variant='solid'
  colorScheme='teal'
  aria-label='Done'
  fontSize='20px'
  icon={<CheckIcon />}
/>
        </div>



      </body>

    </div>
    </ChakraProvider>
   
  );
}

export default App;
