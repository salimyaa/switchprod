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
                tabHeure.push(new Date(tabHeure[i-1].getTime()+Math.round(45/vitesseInit)*1000))
            }
            else{
                tabHeure.push(new Date(tabHeure[i-1].getTime()+6000));
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
                    

                </Tr>
            </Thead>
            <Tbody>
                {tabOjects.map((elem,index)=>{
                    return (
                        <Tr>
                        <td key={`${elem.poids} `+`${index}`}>  {elem.poids}</td> 
                        <td key={`${elem.vitesse} `+`${index}`}>  {Math.round((Number(elem.vitesse) + 0.02) * 10) / 10}</td> 
                        <td key={`${elem.diffVitesse} `+`${index}`}>  {Math.round((Number(elem.diffVitesse)) * 10) / 10}</td>
                        <td key={`${elem.heure} `+`${index}`}>  {elem.heure}</td>
                        
                        </Tr>
                    )
                })}
           


            

           
            </Tbody>
        
        
            
        
        </Table>
        </TableContainer>
    );
}
export default TableauPoidsVitesse
