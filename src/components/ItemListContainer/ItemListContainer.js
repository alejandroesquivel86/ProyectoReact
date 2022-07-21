import ItemProduct from "../ItemProduct/ItemProduct";
import './ItemListContainer.scss';

const ItemListContainer = ({section}) => {
    return(
        <div>
            <h2>{section}</h2>
                <div className='list-products'>
                    <ItemProduct title="Presupuesto" price={1500} image={'presupuesto.png'}/>                    
                </div>
        </div>
    )
}

export default ItemListContainer