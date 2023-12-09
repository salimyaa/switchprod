import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
function TableauPoidsVitesse({tableauPoids,vitesseInit})
{
    const thisTableauPoids = [...tableauPoids];
    const tableauVitesse=[]; 
    for(let i=0; i<thisTableauPoids.length ;i++)
    {
        if(i==0)
        {
            tableauVitesse.push(vitesseInit);
        }
        else{
            tableauVitesse.push((tableauVitesse[i-1])*(thisTableauPoids[i-1]/tableauPoids[i]))
        }
    }
    const tabOjects =[];

    for(let i =0; i<tableauVitesse.length;i++)
    {
        tabOjects.push({poids:tableauPoids[i],vitesse:tableauVitesse[i]});
    }
    
    return (
        <TableContainer>
            <Table variant='simple'>
            <Thead>
                <Tr>
                    <Th>Poids</Th>
                    <Th>Vitesse</Th>

                </Tr>
            </Thead>
            <Tbody>
                {tabOjects.map((elem,index)=>{
                    return (
                        <Tr>
                        <td key={`${elem.poids} `+`${index}`}>  {elem.poids}</td> 
                        <td key={`${elem.vitesse} `+`${index}`}>  {Number(elem.vitesse).toFixed(2)}</td> 
                        </Tr>
                    )
                })}
           


            

           
            </Tbody>
        
        
            
        
        </Table>
        </TableContainer>
    );
}
export default TableauPoidsVitesse
