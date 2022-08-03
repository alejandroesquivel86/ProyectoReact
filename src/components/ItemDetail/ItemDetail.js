import ItemProductDetail from "./ItemProductDetail"

const ItemDetail = ({dataProducts}) => {
    return(
        <>
        {dataProducts.map((productdetail) => {
            return <ItemProductDetail key={productdetail.id} data={productdetail}/>
        } )}
        </>
    )
}

export default ItemDetail
