import './ItemProduct.scss'

const ItemProduct = ({title,price,image}) => {
    return(
        <div className="item-product">
            <img id="imgProducto" src={`./assets/${image}`} alt="" />
                <p>{title}</p>
                <span>$ {price}</span>
                <button>Agregar</button>            
        </div>
    )
}

export default ItemProduct
