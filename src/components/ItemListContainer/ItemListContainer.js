import ItemProduct from "../ItemProduct/ItemProduct";
import './ItemListContainer.scss';

const ItemListContainer = ({section}) => {
    const product1 = {
        title:"Presupuesto",
        price: 1500,
        image: 'presupuesto.png',
        stock: 10
    }
    const product2 = {
        title:"Consulta",
        price: 3500,
        image: 'presupuesto.png',
        stock: 6
    }
    return(
        <div>
            <h2>{section}</h2>
                <div className='list-products'>
                    <ItemProduct data={product1}/>                    
                    <ItemProduct data={product2}/>   
                </div>
        </div>
    )
}

export default ItemListContainer