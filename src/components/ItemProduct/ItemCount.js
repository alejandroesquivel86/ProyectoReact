import {useState} from 'react'
import Button from '@mui/material/Button';


const ItemCount = ({stock, initial}) => {
    
    const [contador, setContador] = useState(initial)    
    const addNumber = () =>{
        if (contador< stock){
        setContador(contador + 1)
        }
    }

    const removeNumber = () =>{
        if (contador>= 1){
            setContador(contador - 1)
            }
    }

    return(
        <div className='countProd'>        
        
        <Button onClick={removeNumber}>-</Button>
        <p>{contador}</p>
        <Button onClick={addNumber}>+</Button>
      
    </div>
    )
}

export default ItemCount