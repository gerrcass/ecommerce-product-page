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
            <h2 className="text-primary-orange uppercase text-sm font-semibold mb-4">Sneaker Company</h2>
            <h1 className="text-4xl font-bold mb-8 text-black">Fall Limited Edition Sneakers</h1>
            <p className="text-neutral-darkgrayishblue text-sm mb-5">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

            <div className="mb-5">
                <div className="flex items-center">
                    <span className="text-2xl font-semibold text-black">$125.00</span>
                    <span className="ml-2 bg-primary-pale text-sm text-primary-orange leading-none py-1 px-2 rounded-lg font-semibold">50%</span>
                </div>
                <span className="text-neutral-grayishblue line-through">$250.00</span>
            </div>
            <div className="flex justify-between">
                <div className="w-32 flex justify-between items-center rounded-xl bg-neutral-lightgrayishblue">
                    <button onClick={handleDecrement} className={`${count === 0 && 'opacity-40'} p-4 -mt-1 text-primary-orange font-bold text-2xl flex justify-center items-center`} type="button">-</button>
                    <span className=" text-center text-base font-semibold">{count}</span>
                    <button onClick={handleIncrement} className={`${count === maxCount && 'opacity-40'} p-4 -mt-1 text-primary-orange font-bold text-2xl flex justify-center items-center`} type=" button">+</button>
                </div>
                <button onClick={addToCard} className="ml-4 flex items-center text-base font-bold bg-primary-orange px-10 py-4 rounded-lg" type="button">
                    <svg className="text-white" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff" fillRule="nonzero" /></svg>
                    <span className="text-white ml-4">Add to cart</span>
                </button>
            </div>
        </>
    )
}

export { HeroText }