import * as React from 'react'
import './ItemProductDetail.scss'
import StarIcon from '@mui/icons-material/Star';
import ItemCount from '../ItemProduct/ItemCount';

const ItemProductDetail = ({data}) => {
const {title, image, price, stock, detailTitle, detailDescription, categoria} = data
const onAdd = (contador) => {
            alert(`Agregaste ${contador} productos`);
        };

    return(
    <>
        <div className="itemProductDetail">            
            <div className='imgContainer'>
                <img id="imgProductoDetail" src={`../assets/${image}`} alt="" />
            </div>
            <div className='sideBar'>
                <div className='detail'>
                    <div className='categoria'>
                        <span>{categoria}</span>
                        <div className='stars'>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                    <h1>{title}</h1>
                    <span className='price'>$ {price}</span>            
                    <span className='stock'>stock: {stock}</span>
                    <ItemCount onAdd={onAdd} initial={1} stock={stock}/>
                </div>
                <div className='ditailDescription'>
                    <h1>{detailTitle}</h1>
                    <h3>{detailDescription}</h3>
                </div>   
            </div>
        </div>     
    </>
    )
}

export default ItemProductDetail