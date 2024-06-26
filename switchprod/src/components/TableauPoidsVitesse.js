import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
  } from '@chakra-ui/react'
  import '../styles/TableauPoidsVitesse.css'
function TableauPoidsVitesse({tableauPoids,vitesseInit})
{
    const thisTableauPoids = [...tableauPoids];
    console.log("tableau poids :"+tableauPoids)
    var tableauVitesse=[]; 
    for(let i=0; i<thisTableauPoids.length ;i++) // tableau de poids 
    {
        if(i==0)
        {
            tableauVitesse.push(vitesseInit);
        }
        else{
            tableauVitesse.push((tableauVitesse[i-1])*(thisTableauPoids[i-1]/tableauPoids[i]))
        }
    }
    tableauVitesse = tableauVitesse.map((v) => Math.round((Number(v) + 0.02) * 10) / 10 )
    
    const tabOjects =[];

    const tabDiffVitesse=[];
    const tabHeure=[]; 
    tabHeure.push(new Date());
    for(let i=0; i<thisTableauPoids.length ;i++) // tableau des heures 
    {
        if(i==0)
        {
            
        }
        else{
            if(i===1)
            {
                tabHeure.push(new Date(tabHeure[i-1].getTime()+45/vitesseInit*60000))
            }
            else{
                tabHeure.push(new Date(tabHeure[i-1].getTime()+60000));
            }
            
        }
    }
    console.log(tabHeure);

    tabDiffVitesse.push(0); // initialisation du premier element du tab 
    for(let i=1;i<tableauVitesse.length;i++)
    {
        const pushVal =(+tableauVitesse[i]-tableauVitesse[i-1])
       
        tabDiffVitesse.push( pushVal);
    }
    





    for(let i =0; i<tableauVitesse.length;i++)
    {
        tabOjects.push({poids:tableauPoids[i],vitesse:tableauVitesse[i],diffVitesse:tabDiffVitesse[i], heure:tabHeure[i]});
    }
    console.log(tabOjects)

    
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal' className='Table'>
            <Thead>
                <Tr>
                    <Th>Poids</Th>
                    <Th>Vitesse</Th>
                    <Th>&#x394; vitesse</Th>
                    <Th>Heure</Th>
                    <Th>Diff.Vitesse</Th>
                    

                </Tr>
            </Thead>
            <Tbody>
                {tabOjects.map((elem,index)=>{//j'ai un peu remixé l'index de la différence de vitesse p/forming pour débug
                    return (
                        <Tr>
                        <td key={`${elem.poids} `+`${index}`}>  {elem.poids}</td> 
                        <td key={`${elem.vitesse} `+`${index}`}>  {Math.round((Number(elem.vitesse) + 0.02) * 10) / 10}</td> 
                        <td key={`${elem.diffVitesse} `+`${index}`}>  {Math.round((Number(elem.diffVitesse)) * 10) / 10}</td>
                        <td key={`${elem.heure} `+`${index}`}>  {elem.heure.getHours()}:{elem.heure.getMinutes().toString().padStart(2, '0')}:{elem.heure.getSeconds().toString().padStart(2, '0')}</td>
                        <td key={`${elem.vitesse} `+`${index*elem.diffVitesse}`}> 
                             {(Math.round((Number(((elem.vitesse*-0.04)+0.65)) + 0.02) * 100) / 100)} 
                        </td> 
                        </Tr>
                    )
                })}
           


            

           
            </Tbody>
        
        
            
        
        </Table>
        </TableContainer>
    );
}
export default TableauPoidsVitesse
