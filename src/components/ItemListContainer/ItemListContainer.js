import {useState, useEffect} from "react"
import './ItemListContainer.scss'
// import products from "../util/productmock"
import ItemList from "../ItemProduct/ItemList"
// import {useParams} from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../firebaseConfig";

function ItemListContainer({ section, filtro }) {

    const [listProducts, setListProducts] = useState([]);    
    // const { category } = useParams();
    // const filterbycat = products.filter( (product) => product.category === category);
   
    // const getProducts = new Promise((resolve, reject) => {
    //     setTimeout(() => {    
    //         if (category === "zapatilla" || category === "accesorio"){
    //             resolve(filterbycat);
    //         }
    //         else{
    //             resolve(products);
    //         }                
    //             }, 2000);
    // });

    const getProducts = async () => {
        const productCollection = collection(db, 'productos')
            let prodFil            
            if (filtro===""){
            prodFil = productCollection
            }else{
            const q = query (productCollection, where("category","==", filtro))
            prodFil=q
            }    
        const productSnapshot = await getDocs(prodFil)
        const productList = productSnapshot.docs.map((doc)=> {
            let product = doc.data()
            product.id = doc.id            
            return product             
        })
        return productList
        
    }

    useEffect(() => {       
        getProducts()
            .then((res) => {
                setListProducts(res);
            })
        //     .catch((bug) => {
        //         console.log("error capturado");
        //     })
        //     .finally(() => {
        //         console.log("termino");
        //     });
    }, [filtro]);

    return (
        <div>
            <h2>{section}{filtro}</h2>
            <img id="imgCabecera" src={`../assets/Nano-X2.jpg`} alt="" />
            <div className='list-products'>                
                <ItemList dataProducts={listProducts} />
            </div>
        </div>
    );
}

export default ItemListContainer