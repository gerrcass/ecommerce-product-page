import { CartHeader } from './CartHeader'
import { CartBody } from './CartBody'

const CartWidget = ({ cartItems, setIsCartShown, removeFromCard }) => {
    return (
        <div
            className="fixed desktop:absolute z-20 top-[86px] scale-110 desktop:scale-100 desktop:top-11 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl rounded-xl h-60 w-80 transition"
            onMouseEnter={() => setIsCartShown(true)}
            onMouseLeave={() => setIsCartShown(false)}
        >
            <CartHeader />
            <CartBody
                cartItems={cartItems}
                removeFromCard={removeFromCard}
            />
        </div>
    )
}

export { CartWidget }