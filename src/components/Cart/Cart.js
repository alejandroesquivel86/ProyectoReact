import TableCart from "./TableCart"
import { Button } from '@mui/material';
import Modal from '../Modal/Modal';
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext"

const Cart = () => {    
    const [showModal, setShowModal] = useState(false)
    const { cartProducts, totalPrice } = useContext(CartContext);
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
    console.log("totalPrice: ",totalPrice)
    console.log("order: ",order)
    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email:''
    })

    const handleChange = (e)=>{
        console.log("FORM DATA: ", formData)
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
    }

    return(
        <>
            <div className="chkCart">Carrito</div>
                <TableCart />
                <Button onClick={()=> setShowModal(true) } >IR A PAGAR</Button>
                    {showModal &&        
                        <Modal title="DATOS DE CONTACTO" close={()=>setShowModal(false)}>
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
                        </Modal>
                    }
        </>
    )
}

export default Cart