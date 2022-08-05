import './ItemDetailContainer.scss'
import ItemDetail from "../ItemDetail/ItemDetail"
import productdetail from "../util/productdetailmock"
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'


function ItemDetailContainer({ section }) {
    
    const { id } = useParams();       
    const [detailProducts, setDetailProducts] = useState([]);    

    useEffect(() => {              
        const filterbyid = productdetail.filter( (product) => product.id === Number(id))
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {                   
                resolve(filterbyid);
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