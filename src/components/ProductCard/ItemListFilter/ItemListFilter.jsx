import React from "react";
import { useNavigate} from "react-router-dom";


const ItemListFilter = ({type})=>{
    let selection = ""
    let navigate = useNavigate();
    function handleChange(value) {
        navigate(`/${value}`);
    }
    if(type){
        selection = type
    }
    return(
        <form>
            <label htmlFor="itemListFilter"><b>Categoria: </b></label>
            <select defaultValue={selection} onChange={event => handleChange(event.target.value)} id="itemListFilter">
                <option value="">Todo</option>
                <option value="Medicinal">Medicinal</option>
                <option value="Alimento">Alimento</option>
                <option value="Juguete">Juguete</option>
            </select>
        </form>
    )
}

export default ItemListFilter