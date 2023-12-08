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
function TableauPoidsVitesse({tableauPoids})
{
    console.log(tableauPoids);
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
                
                    
                    {tableauPoids.map((poids,index)=>
            {
                return <Tr><td key={`${poids} `+`${index}`}>  {poids}</td></Tr>
            })}

                
            </Tbody>
        
        
            
        
        </Table>
        </TableContainer>
    );
}
export default TableauPoidsVitesse
