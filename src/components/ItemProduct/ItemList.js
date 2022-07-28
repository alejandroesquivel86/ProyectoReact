import ItemProduct from "./ItemProduct";

const ItemList = ({dataProducts}) => {
    return(
        <>
        {dataProducts.map((product) => {
            return <ItemProduct key={product.id} data={product}/>
        } )}
        </>
    )
}

export default ItemList