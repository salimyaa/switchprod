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
  import '../styles/TableauPoidsVitesse.css'
function TableauPoidsVitesse({tableauPoids,vitesseInit})
{
    const thisTableauPoids = [...tableauPoids];
    console.log("tableau poids :"+tableauPoids)
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

    const tabDiffVitesse=[];
    tabDiffVitesse.push(0); // initialisation du premier element du tab 
    for(let i=1;i<tableauVitesse.length;i++)
    {
        const pushVal =(+tableauVitesse[i]-tableauVitesse[i-1])
       
        tabDiffVitesse.push( pushVal);
    }






    for(let i =0; i<tableauVitesse.length;i++)
    {
        tabOjects.push({poids:tableauPoids[i],vitesse:tableauVitesse[i],diffVitesse:tabDiffVitesse[i]});
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
                    

                </Tr>
            </Thead>
            <Tbody>
                {tabOjects.map((elem,index)=>{
                    return (
                        <Tr>
                        <td key={`${elem.poids} `+`${index}`}>  {elem.poids}</td> 
                        <td key={`${elem.vitesse} `+`${index}`}>  {Math.round((Number(elem.vitesse) + 0.02) * 10) / 10}</td> 
                        <td key={`${elem.diffVitesse} `+`${index}`}>  {Math.round((Number(elem.diffVitesse)) * 10) / 10}</td>
                        
                        </Tr>
                    )
                })}
           


            

           
            </Tbody>
        
        
            
        
        </Table>
        </TableContainer>
    );
}
export default TableauPoidsVitesse
