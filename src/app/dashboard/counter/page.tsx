import { CartCounter } from "./components";

export const metadata = {
    title: "Shopping Cart",
    description: "Un simple contador de productos en el carrito de compras.",
}

export default function CounterPage() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <span>Productos en el Carrito</span>
            <CartCounter />
        </div>
    );
}