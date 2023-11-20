import estilos from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return (
        <nav className={estilos.container}>
            <h1 className={estilos.rojo}>FINAL STORE</h1>
            <section className={estilos.categories}>
                <button>Home</button>
                <button>Productos</button>
                <button>Contacto</button>
            <CartWidget />
            </section>
        </nav>
    )
}

export default NavBar