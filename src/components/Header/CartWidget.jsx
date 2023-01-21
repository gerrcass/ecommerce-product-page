import { CartHeader } from './CartHeader'
import { CartBody } from './CartBody'

const CartWidget = ({ cartItems, setIsCartShown, removeFromCard }) => (
    <div
        className="fixed md:absolute text-base z-20 top-20 md:top-16 left-1/2 md:-left-40 lg:left-2 transform -translate-x-1/2 bg-white shadow-2xl rounded-xl h-[67vw] min-h-[16rem] max-h-[17rem] w-[93vw] max-w-[25rem] transition"
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

export { CartWidget }