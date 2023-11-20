import estilos from "./ItemListContainer.module.css"

const ItemListContainer = ({greeting}) =>{
    return(
        <div className={estilos.centrar}>
            <h1 className={estilos.decoration}> {greeting} </h1>
        </div>
    )
}

export default ItemListContainer