import './ItemDetailContainer.scss'
import ItemDetail from "../ItemDetail/ItemDetail"
// import productdetail from "../util/productdetailmock"
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import Modal from '../Modal/Modal'
import db from '../../firebaseConfig'
import {doc, getDoc} from "firebase/firestore"

function ItemDetailContainer({}) {
    const [detailProducts, setDetailProducts] = useState([]);
    const [showModal, setShowModal] = useState(false); 
    const { id } = useParams();       
    
    useEffect(() => {                     
        const getProduct = async () => {
                const docRef = doc( db, 'productos', id)
                const docSnapshot = await getDoc(docRef)
                console.log("docSnapshot: ",docSnapshot)
                let product = docSnapshot.data()
                product.id = docSnapshot.id
                return product
        }
        getProduct()
            .then((res) => {
                setDetailProducts(res);
            })
            .catch((bug) => {
                console.log("error capturado: ", bug);
            })
            .finally(() => {
                console.log("detalle ok");
            });
    }, []);


    return (
        <div className={`container-item-detail ${showModal ? 'overlay-black' : ''}`}>
        {showModal && (
            <Modal title="Imagen Producto" close={setShowModal}>
                <img src={`/assets/${detailProducts.image}`} alt="" />
                {/* <img src='/assets/Nano-X1.webp' alt="" />             */}
            </Modal>
        )}
        <ItemDetail dataProducts={detailProducts} setShowModal={setShowModal} />
    </div>
    );
}

export default ItemDetailContainer