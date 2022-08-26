import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

const Category = () => {
    const cat = useParams();
    console.log(cat)
    return(
        <div className="container">
            <section className='main-container'>
                <ItemListContainer section= "" filtro={cat.category}/>
            </section>
        </div>
    )
}

export default Category