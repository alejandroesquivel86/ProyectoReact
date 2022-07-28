import {useState} from "react";
import './ItemListContainer.scss';
import products from  "../util/productmock";
import ItemList from "../ItemProduct/ItemList";

const ItemListContainer = ({section}) => {
    // const product1 = {
    //     title:"Presupuesto",
    //     price: 1500,
    //     image: 'presupuesto.png',
    //     stock: 10
    // }
    // const product2 = {
    //     title:"Consulta",
    //     price: 3500,
    //     image: 'presupuesto.png',
    //     stock: 6
    // }

    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise ((resolve,reject) =>{
        setTimeout(() => {
            resolve(products)
        }, 2000);
    });
    
    getProducts
    .then ((res) =>{
        setListProducts(res)    
    })
    .catch ((bug) =>{
        console.log("error capturado")    
    })
    .finally (() =>{
        console.log("termino")    
    })

    return(
        <div>
            <h2>{section}</h2>
                <div className='list-products'>
                <ItemList dataProducts={listProducts}/>
                </div>
        </div>
    )
}

export default ItemListContainer