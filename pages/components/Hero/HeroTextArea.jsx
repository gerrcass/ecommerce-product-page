import { HeroText } from "./HeroText"

const HeroTextArea = (props) => {
    return (
        <div className="desktop:w-1/2 py-5 flex flex-col items-start justify-center px-5 desktop:px-12 desktop:-mt-4">
            <HeroText {...props} />
        </div>
    )
}

export { HeroTextArea }