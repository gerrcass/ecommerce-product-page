import { useState } from "react"

const HeroText = ({ addToCard }) => {
    const [count, setCount] = useState(1)
    const [maxCount, setMaxCount] = useState(10)

    const handleIncrement = () => {
        //some logic here (example using 'maxCount')
        count + 1 <= maxCount && setCount(count + 1)
    }
    const handleDecrement = () => {
        count - 1 >= 0 && setCount(count - 1)
    }

    return (
        <>
            <h2 className="tracking-wider text-primary-orange uppercase text-sm font-semibold mb-4">Sneaker Company</h2>
            <h1 className="text-4xl font-extrabold mb-8 text-black">Fall Limited Edition Sneakers</h1>
            <p className="text-neutral-darkgrayishblue text-sm mb-5">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

            <div className="mb-5">
                <div className="flex items-center">
                    <span className="text-2xl font-bold text-black">$125.00</span>
                    <span className="ml-2 bg-primary-pale text-sm text-primary-orange leading-none py-1 px-2 rounded-lg font-semibold">50%</span>
                </div>
                <span className="text-neutral-grayishblue line-through">$250.00</span>
            </div>
            <div className="flex justify-between">
                <div className="w-32 h-12 flex justify-between items-center rounded-xl bg-neutral-lightgrayishblue">
                    <button onClick={handleDecrement} className={`${count === 0 && 'opacity-40'} p-4 text-primary-orange font-bold text-2xl flex justify-center items-center`} type="button">
                        <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a" /></defs><use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" /></svg>
                    </button>
                    <span className="text-center text-sm font-semibold">{count}</span>
                    <button onClick={handleIncrement} className={`${count === maxCount && 'opacity-40'} p-4 text-primary-orange font-bold text-2xl flex justify-center items-center`} type=" button">
                        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b" /></defs><use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" /></svg>
                    </button>
                </div>
                <button onClick={addToCard} className="flex items-center ml-4 h-12 text-base font-bold bg-primary-orange px-16 rounded-lg" type="button">
                    <svg className="scale-75" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff" fillRule="nonzero" /></svg>
                    <span className="text-white ml-4">Add to cart</span>
                </button>
            </div>
        </>
    )
}

export { HeroText }