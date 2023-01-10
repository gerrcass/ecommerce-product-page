import { useState } from "react";

import { CartWidget } from './CartWidget'
import { CartIcon } from './CartIcon'


const CartIconWidget = ({ cartItems, removeFromCard }) => {
    const [isCartShown, setIsCartShown] = useState(false);

    return (
        <div className="relative mt-[10px] desktop:mt-2">
            <CartIcon
                cartItems={cartItems}
                isCartShown={isCartShown}
                setIsCartShown={setIsCartShown}
            />
            {
                isCartShown &&
                <CartWidget
                    cartItems={cartItems}
                    removeFromCard={removeFromCard}
                    setIsCartShown={setIsCartShown}
                />
            }
        </div>
    )
}

export { CartIconWidget }