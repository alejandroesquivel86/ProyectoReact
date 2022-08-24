import ItemProductDetail from "./ItemProductDetail"

const ItemDetail = ({dataProducts, setShowModal}) => {
    const productdetail = dataProducts
    console.log("dataProducts: ",dataProducts)
    return(
        <>
            <ItemProductDetail key={productdetail.id} data={productdetail} setShowModal={setShowModal}/>
        </>
    )
}

export default ItemDetail
