import TableCart from "./TableCart"
import { Button } from '@mui/material';
import Modal from '../Modal/Modal';
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext"
import db from '../../firebaseConfig'
import { collection, addDoc } from "firebase/firestore";

const Cart = () => {    
    const [showModal, setShowModal] = useState(false)
    const { cartProducts, totalPrice } = useContext(CartContext);
    const [success, setSuccess] = useState()
    const [order, setOrder] = useState({
        items:cartProducts.map((product) => {
            return{
                    id: product.id,
                    title: product.title,
                    price: product.price
                }
        }),
        buyer:{},
        total: totalPrice
    })    
    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email:''
    })

    const handleChange = (e)=>{        
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        pushData({...order, buyer: formData })
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection (db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)                
    }

    return(
        <>
            <div className="chkCart">Carrito</div>
            {console.log('ORDER ID: ',success)}
                <TableCart />
                <Button onClick={()=> setShowModal(true) } >IR A PAGAR</Button>
                    {showModal &&        
                        <Modal title="DATOS DE CONTACTO" close={()=>
                        setShowModal(false)
                        }>
                            {success ? (
                                <>
                                {console.log(success)}
                                <h2>Su orden se genero correctamente</h2>
                                <p>ID de Compra: {success} </p>
                                </>
                            ) : (
                                <form onSubmit={submitData}>
                                    <input 
                                        type='text' 
                                        name="name" 
                                        placeholder="Ingrese Nombre"
                                        vale={formData.name}
                                        onChange={handleChange}
                                    />
                                    <input 
                                        type='number' 
                                        name="phone"
                                        placeholder="Ingrese Telefono"
                                        vale={formData.phone}
                                        onChange={handleChange}
                                    />
                                    <input 
                                        type='email' 
                                        name="email"
                                        placeholder="Ingrese Mail"
                                        vale={formData.email}
                                        onChange={handleChange}
                                    />
                                    <button type="submit">Enviar</button>
                                </form>
                            )}
                        </Modal>
                    }
        </>
    )
}

export default Cart