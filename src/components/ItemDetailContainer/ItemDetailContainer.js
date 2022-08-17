import './ItemDetailContainer.scss'
import ItemDetail from "../ItemDetail/ItemDetail"
import productdetail from "../util/productdetailmock"
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import Modal from '../Modal/Modal'

function ItemDetailContainer({}) {    
    const { id } = useParams();       
    const [detailProducts, setDetailProducts] = useState([]);
    const [showModal, setShowModal] = useState(false); 
    console.log('detailProducts: ', detailProducts)

    useEffect(() => {              
        const filterbyid = productdetail.filter( (product) => product.id === Number(id))
        console.log('filterbyid: ', filterbyid)
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
        // <div>
        //     <h2>{section}</h2>
        //     <div>
        //         <ItemDetail dataProducts={detailProducts} />
        //     </div>
        // </div>
        <div className={`container-item-detail ${showModal ? 'overlay-black' : ''}`}>
        {showModal && (
            <Modal title="Imagen Producto" close={setShowModal}>
                {/* <img src={`/assets/${filterbyid.image}`} alt="" /> */}
                <img src='/assets/Nano-X1.webp' alt="" />            
            </Modal>
        )}
        <ItemDetail dataProducts={detailProducts} setShowModal={setShowModal} />
    </div>
    );
}

export default ItemDetailContainer