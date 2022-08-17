import ItemProductDetail from "./ItemProductDetail"

const ItemDetail = ({dataProducts, setShowModal}) => {
    return(
        <>
        {dataProducts.map((productdetail) => {
            return <ItemProductDetail key={productdetail.id} data={productdetail} setShowModal={setShowModal}/>
        } )}
        </>
    )
}

export default ItemDetail
