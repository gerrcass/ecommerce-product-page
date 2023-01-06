
const Hero = ({ children }) => {
    return (
        <section className="flex flex-col desktop:flex-row mx-auto max-w-[375px] desktop:max-w-[66rem] border-2 border-t-0 p-0 desktop:pt-[4.6rem] desktop:pb-12">
            {children}
        </section >
    )
}

export { Hero }