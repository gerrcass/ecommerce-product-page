import Image from "next/image"

import { CartButton } from './CartButton'

const CartBody = ({ cartItems, removeFromCard }) => {
    return (
        <>
            {
                cartItems.items && cartItems.items.map(item => (
                    <div key={item.id} className="p-5 flex space-x-4 select-none">
                        <Image className="rounded-md" src={item.thumbnail} alt='Image thumbnail' width={45} height={45} />
                        <div className="flex flex-col justify-center  text-sm text-neutral-darkgrayishblue font-medium">
                            <p className="text-sm font-medium ">{item.name}</p>
                            <div className="flex space-x-2">
                                <span className="">{`${(item.price * item.discount_percent / 100).toFixed(2)} x ${item.quantity}`}</span>
                                <span className="font-bold ">{`$${(item.quantity * (item.price * item.discount_percent / 100)).toFixed(2)}`}</span>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => removeFromCard(cartItems.items[0].id)}
                            className="flex justify-center items-center hover:cursor-pointer">
                            <svg className="scale-90 fill-neutral-darkgrayishblue transition opacity-30 hover:opacity-40" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a" /></defs><use fillRule="nonzero" xlinkHref="#a" /></svg>
                        </button>
                    </div>
                ))
            }
            {
                cartItems.items.length === 0
                    ?
                    <div className="flex justify-center items-center h-40 text-neutral-darkgrayishblue text-sm font-bold">
                        Your cart is empty.
                    </div>
                    :
                    <CartButton />
            }
        </>
    )
}

export { CartBody }