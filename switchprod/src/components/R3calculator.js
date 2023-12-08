
  import { Input,Text } from '@chakra-ui/react'
  import { IconButton } from '@chakra-ui/react'
  import {CheckIcon} from '@chakra-ui/icons'
import { useState, useMemo} from 'react'
import TableauPoidsVitesse from './TableauPoidsVitesse'

function R3Calculator(){
const [poidsInit,updatePoidsInit]=useState(0)
const [vitesseInit,updateVitesseInit]=useState(0)
const [poidsFinal,updatePoidsFinal]=useState(0)
const [vitesseR3,updateVitesseR3] = useState(0)
const diffPoids =useMemo(
    ()=>
    {
        return poidsFinal-poidsInit;
    }
    , [poidsFinal]
)
const diffVitesse =useMemo(
    ()=>
    {
        return (diffPoids?(vitesseR3-vitesseInit)/diffPoids:0);
    },[vitesseR3],[diffPoids]
)
const NbSteps = useMemo(
    ()=>{
        return Math.ceil(diffPoids/1)
    }
    ,[diffPoids]
)
var tableauPoids = useMemo(
    () => {
        var tempTab=[];
        var diffPoidsTemp=diffPoids;
        var poidCourrant= Number(poidsInit);
        for(var i=0 ;i<=NbSteps; i++)
        {
            if(diffPoidsTemp<=-1 || diffPoidsTemp>=1)
            {
                tempTab.push(poidCourrant);
                poidCourrant = Number(poidCourrant) + Math.sign(diffPoidsTemp) ;
                diffPoidsTemp = diffPoidsTemp - Math.sign(diffPoidsTemp);

                
            }
            else{
                tempTab.push(poidCourrant);
                poidCourrant = Number(poidCourrant) + (Math.sign(diffPoids)*diffPoidsTemp);
                diffPoidsTemp=0;
                
                
            }
            
             
            
        }
        
        return tempTab;

    }, [NbSteps]
)




function calculateR3()
{ 
 updateVitesseR3(vitesseInit*(poidsInit/poidsFinal))
  return vitesseR3;
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
  icon={<CheckIcon />} onClick={()=> {calculateR3(vitesseInit*(poidsInit/poidsFinal))}}
  
/>
<Text fontSize='xl'>Vitesse R3: {vitesseR3.toFixed(2)}m/min </Text>
<Text fontSize='l'>Différence de vitesse: {diffVitesse.toFixed(2)}m/min/Kg </Text>
<Text fontSize='l'>Différence de Poids: {diffPoids.toFixed(1)}Kg </Text>
<TableauPoidsVitesse tableauPoids={tableauPoids}/>




</div>
    )
}
export default R3Calculator;