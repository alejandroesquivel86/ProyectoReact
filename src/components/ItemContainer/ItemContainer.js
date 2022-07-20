import ItemProduct from "../ItemProduct/ItemProduct";

const ItemContainer = () => {
    return(
        <div className='list-products'>
            <ItemProduct title="presupuesto" price={1500} image={'presupuesto.png'}/>
            <ItemProduct title="consulta" price={4500} image={'compu.jpg'}/>
        </div>
    )
}

export default ItemContainer