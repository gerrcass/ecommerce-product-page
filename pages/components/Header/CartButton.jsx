
const CartButton = () => {
    return (
        <div className="px-5 pt-1 pb-6">
            <button
                type="button"
                onClick={() => console.log('Checkout cliked')}
                className="bg-primary-orange p-4 w-full rounded-xl text-primary-pale text-sm font-semibold bg-opacity-90 hover:bg-opacity-100 transition duration-100 ease-in-out active:scale-x-[1.005]"
            >
                Checkout
            </button>
        </div>
    )
}

export { CartButton }