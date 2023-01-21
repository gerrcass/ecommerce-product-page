import { useState } from "react";

import { Drawer } from "../Drawer/Drawer";
import { MobileNav } from "../Footer/MobileNav";
import { Logo } from './Logo'
import { NavBar } from './NavBar'
import { CartIconWidget } from './CartIconWidget'
import { UserAvatar } from './UserAvatar'


const Header = ({ cartItems, removeFromCard }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-30 bg-white flex justify-between h-[67px] md:h-24 mx-auto min-w-[320px] md:max-w-[66rem] border-b border-neutral-grayishblue border-opacity-20">
            <div className="w-full flex justify-between items-center px-5 md:px-0">
                <div className="flex items-center h-full md:flex-row-reverse">
                    <NavBar openMobileMenu={setIsMobileMenuOpen} />
                    <Logo />
                </div>
                <div className="flex items-center justify-between h-full">
                    <CartIconWidget
                        cartItems={cartItems}
                        removeFromCard={removeFromCard}
                    />
                    <UserAvatar />
                </div>
            </div>
            {isMobileMenuOpen &&
                <Drawer
                    setOpenModal={setIsMobileMenuOpen}
                    render={
                        <MobileNav />
                    }
                />
            }
        </header>
    )
}

export { Header }