import {useState, useEffect} from "react"
import './ItemListContainer.scss'
import products from "../util/productmock"
import ItemList from "../ItemProduct/ItemList"


function ItemListContainer({ section }) {

    const [listProducts, setListProducts] = useState([]);    

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        getProducts
            .then((res) => {
                setListProducts(res);
            })
            .catch((bug) => {
                console.log("error capturado");
            })
            .finally(() => {
                console.log("termino");
            });
    }, []);

    return (
        <div>
            <h2>{section}</h2>
            <img id="imgCabecera" src={`../assets/Nano-X2.jpg`} alt="" />
            <div className='list-products'>                
                <ItemList dataProducts={listProducts} />
            </div>
        </div>
    );
}

export default ItemListContainer