import { HeroText } from "./HeroText"

const HeroTextArea = (props) => {
    return (
        <div className="w-1/2 flex flex-col items-start justify-center px-16">
            <HeroText {...props} />
        </div>
    )
}

export { HeroTextArea }