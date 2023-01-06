
const Hero = ({ children }) => {
    return (
        <section className="mx-auto max-w-xs md:max-w-[66rem] flex py-20 mb-20">
            {children}
        </section >
    )
}

export { Hero }