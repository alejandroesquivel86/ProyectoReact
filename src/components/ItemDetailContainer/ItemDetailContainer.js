import {useState, useEffect} from "react"
import './ItemDetailContainer.scss'
import productdetail from "../util/productdetailmock"
import ItemDetail from "../ItemDetail/ItemDetail"


function ItemDetailContainer({ section }) {

    const [detailProducts, setDetailProducts] = useState([]);    

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(productdetail)
                resolve(productdetail);
            }, 2000);
        });
        getProducts
            .then((res) => {
                setDetailProducts(res);
            })
            .catch((bug) => {
                console.log("error capturado");
            })
            .finally(() => {
                console.log("detalle ok");
            });
    }, []);

    return (
        <div>
            <h2>{section}</h2>
            <div>
                <ItemDetail dataProducts={detailProducts} />
            </div>
        </div>
    );
}

export default ItemDetailContainer