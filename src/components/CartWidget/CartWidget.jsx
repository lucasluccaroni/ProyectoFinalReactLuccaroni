import imagenCarrito from './assets/carrito.svg'
import estilos from "./CartWidget.module.css"

const CartWidget = () =>{
    return(
        <>
            <button>
                0
                <img className={estilos.cartImg} src={imagenCarrito} />
            </button>
        </>
    )
}

export default CartWidget