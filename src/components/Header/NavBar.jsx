import Link from "next/link"

const NavBar = ({ openMobileMenu }) => (
    <nav className="h-full flex items-center">
        <button
            type="button"
            className="block md:hidden outline-none transition active:scale-105"
            onClick={() => openMobileMenu(true)}
            aria-label="Open mobile menu"
        >
            <svg id="menu" className="block md:hidden mr-3" width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd" /></svg>
        </button>
        <div className="hidden md:block h-full">
            <ul className="flex h-full items-center space-x-8 ml-14 text-sm text-neutral-darkgrayishblue">
                <li className="group h-full hover:cursor-pointer border-b-4 border-transparent hover:border-primary-orange"><Link href="#" className="flex items-center h-full group-hover:text-neutral-darkblue group-hover:font-semibold transition">Collections</Link></li>
                <li className="group h-full hover:cursor-pointer border-b-4 border-transparent hover:border-primary-orange"><Link href="#" className="flex items-center h-full group-hover:text-neutral-darkblue group-hover:font-semibold transition">Men</Link></li>
                <li className="group h-full hover:cursor-pointer border-b-4 border-transparent hover:border-primary-orange"><Link href="#" className="flex items-center h-full group-hover:text-neutral-darkblue group-hover:font-semibold transition">Women</Link></li>
                <li className="group h-full hover:cursor-pointer border-b-4 border-transparent hover:border-primary-orange"><Link href="#" className="flex items-center h-full group-hover:text-neutral-darkblue group-hover:font-semibold transition">About</Link></li>
                <li className="group h-full hover:cursor-pointer border-b-4 border-transparent hover:border-primary-orange"><Link href="#" className="flex items-center h-full group-hover:text-neutral-darkblue group-hover:font-semibold transition">Contact</Link></li>
            </ul>
        </div>
    </nav>
)

export { NavBar }