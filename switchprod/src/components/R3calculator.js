
  import { Input,Text } from '@chakra-ui/react'
  import { IconButton } from '@chakra-ui/react'
  import {CheckIcon} from '@chakra-ui/icons'
import { useState } from 'react'

function R3Calculator(){
const [poidsInit,updatePoidsInit]=useState(0)
const [vitesseInit,updateVitesseInit]=useState(0)
const [poidsFinal,updatePoidsFinal]=useState(0)
const [vitesseR3,updateVitesseR3] = useState(0)
function calculateR3()
{
  updateVitesseR3(vitesseInit*poidsInit/poidsFinal)
  return ;
}
    return (
<div>
        
<h3>Prod de départ</h3>

<Input placeholder='Poids' onChange={ event => updatePoidsInit(event.target.value) }/>
<Input placeholder='Vitesse'onChange={ event => updateVitesseInit(event.target.value) } />
       
       
<h3>Prod finale</h3>
<Input placeholder='Poids' onChange={ event => updatePoidsFinal(event.target.value) }/>
<IconButton
  isRound={true}
  variant='solid'
  colorScheme='teal'
  aria-label='Done'
  fontSize='20px'
  icon={<CheckIcon />} onClick={()=> {calculateR3()}}
  
/>
<Text fontSize='xl'>Vitesse R3: {vitesseR3}m/min </Text>

</div>
    )
}
export default R3Calculator;