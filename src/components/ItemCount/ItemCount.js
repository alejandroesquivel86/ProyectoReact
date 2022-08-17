import {useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from '@mui/material/Button';

  const ItemCount = ({ initial, stock, setQuantitySelected, productData}) => {
      const { addProductToCart } = useContext(CartContext)
      const [ contador, setContador ] = useState(initial);

      const addProduct = (num) => {
        setContador(contador + num);
      };

      const onAdd = () => {
        console.log("Click Agregar: ", productData);  
        console.log("Cantidad: ", contador);     
        addProductToCart ({...productData, contador})
        setQuantitySelected (contador)
      };
    
    return (
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
            AGREGAR AL CARRITO
        </Button>        
      </div>  
    );
};

export default ItemCount;