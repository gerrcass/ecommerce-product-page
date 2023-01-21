
const Hero = ({ children }) => {
    return (
        <section className="flex flex-col desktop:flex-row mx-auto min-w-[320px] desktop:max-w-[66rem] p-0 desktop:pt-[4.6rem] pb-4 desktop:pb-12 overflow-hidden">
            {children}
        </section >
    )
}

export { Hero }