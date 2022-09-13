import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './TableCart.scss';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const TableCart = () => {    
  const { cartProducts, clear, removeProductToCart, totalProducts } = useContext(CartContext);
    return (    
      <>
          {cartProducts.map((product) => {
            return(
                    <div className='table' key={product.id}>
                      <img src={`/assets/${product.image}`} alt="" />
                        <div >
                          <p>{product.title}</p>                                        
                        </div>
                        <div >
                            <p>{product.price}</p>
                        </div>
                        <div >
                            <DeleteIcon onClick={() => removeProductToCart(product.id)}/>
                        </div>                                    
                    </div>
            )
          })}
        </>
          )}


export default TableCart
