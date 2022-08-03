import {useState} from 'react'
import Button from '@mui/material/Button'

const ItemCount = ({ onAdd, initial, stock }) => {

  const [contador, setContador] = useState(initial);

  const addProduct = (num) => {
    setContador(contador + num);
  };

  console.log(initial, stock)
  return (
    <>
    <div className="countProd">
    <Button  onClick={() => addProduct(-1)}
            disabled={contador === initial}
        >
        -
    </Button>
    <span>{contador}</span>
    <Button onClick={() => addProduct(+1)}
            disabled={contador === stock}
        >
        +
    </Button>
    </div>
    <div>
    <Button className="btnAdd" variant="contained"
        onClick={() => {
        onAdd(contador);
        }}
        disabled={stock === 0 ? true : null}
      >
        Agregar
    </Button>  
    </div>
    </>
  );
};

export default ItemCount;