import {useState} from 'react'
import Button from '@mui/material/Button'

const ItemCount = ({ initial, stock, setQuantitySelected}) => {

  const [contador, setContador] = useState(initial);

  const addProduct = (num) => {
    setContador(contador + num);
  };

  const onAdd = () => {
    setQuantitySelected(contador);
  };
  
  return (
  <>
    <div className="countProd">
    <Button  onClick={() => addProduct(-1)}
            disabled={contador === initial}>
          -
    </Button>
    <span>{contador}</span>
    <Button onClick={() => addProduct(+1)}
            disabled={contador === stock}>
          +
    </Button>    
    <Button className="btnAdd" variant="contained" 
        onClick={onAdd}
        disabled={stock === 0 ? true : null}>
        Agregar
    </Button>
        
    </div>
  </>
  );
};

export default ItemCount;