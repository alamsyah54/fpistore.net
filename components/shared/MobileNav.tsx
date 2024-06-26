import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { contactsButton } from "@/constant"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AiOutlineMenu } from "react-icons/ai"
import { Roboto } from "next/font/google"
import Image from "next/image"
import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})

const NavContent = () => {
    const navButtons = [
        {
            title: "Home",
            url: "/",
            LineColor: "bg-fuchsia-500",
        },
        {
            title: "Products",
            url: "/products",
            LineColor: "bg-purple-500",
        },
        {
            title: "Your Order",
            url: "/your-orders",
            LineColor: "bg-sky-500",
        },
    ]

    const pathname = usePathname()
    return (
        <nav className='flex h-screen w-full flex-col pt-10 pb-20 justify-between'>
            <div>
                {navButtons.map((nav) => {
                    const isActivate =
                        (pathname.includes(nav.url) && nav.url.length > 1) ||
                        pathname === nav.url
                    return (
                        <SheetClose asChild key={nav.url} className='flex'>
                            <div className='flex items-start '>
                                <Link
                                    href={nav.url}
                                    className='flex gap-2 text-lg w-full p-4 my-4'
                                >
                                    <div
                                        className={`rounded-full w-1 h-full text-transparent ${
                                            pathname === nav.url
                                                ? nav.LineColor
                                                : ""
                                        }`}
                                    >
                                        .
                                    </div>
                                    <p
                                        className={`${
                                            isActivate
                                                ? "font-conthrax"
                                                : roboto.className
                                        }`}
                                    >
                                        {nav.title}
                                    </p>
                                </Link>
                            </div>
                        </SheetClose>
                    )
                })}
            </div>
            {/* <div className='grid grid-rows-2 grid-flow-col gap-3 pb-16  justify-evenly py-4'>
                {contactsButton.map((cont) => (
                    <Link
                        href={cont.url}
                        target='_blank'
                        className='flex gap-2 w-full py-3'
                        key={cont.url}
                    >
                        {cont.icon}
                    </Link>
                ))}
            </div> */}
        </nav>
    )
}

const MobileNav = () => {
    return (
        // <Drawer>
        //     <DrawerTrigger className='hidden max-md:flex dark:hover:bg-white/10 hover:bg-black/5 rounded-full p-2'>
        //         <AiOutlineMenu className='duration-500 text-dark-800 dark:text-gray-300' />
        //     </DrawerTrigger>
        //     <DrawerContent className='bg-gray-200 dark:bg-dark-600 border-none'>
        //         <DrawerHeader>
        //             <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        //             <DrawerDescription>
        //                 This action cannot be undone.
        //             </DrawerDescription>
        //         </DrawerHeader>
        //         <DrawerFooter>
        //             <Button>Submit</Button>
        //             <DrawerClose>
        //                 <Button variant='outline'>Cancel</Button>
        //             </DrawerClose>
        //         </DrawerFooter>
        //     </DrawerContent>
        // </Drawer>

        // @ts-ignore
        <Sheet className='transition-transform duration-500 '>
            <SheetTrigger className='hidden max-md:flex dark:bg-white/10 bg-black/5 rounded-full p-2'>
                <AiOutlineMenu className='duration-500 text-dark-800 dark:text-gray-300' />
            </SheetTrigger>
            <SheetContent
                side='top'
                className='border-none text-red-500 backdrop-blur-lg bg-white dark:bg-dark-800/50 shadow-lg shadow-black/50'
            >
                <Link
                    href='/'
                    className='flex items-center justify-center gap-1 border-b-[1px] border-dark-500/50 dark:border-gray-500/50 py-2'
                >
                    <Image
                        width={60}
                        height={60}
                        src='/icons/fpistore.netwhite.png'
                        alt='Footer Picture'
                        className='hidden dark:block duration-700'
                    />
                    <Image
                        width={60}
                        height={60}
                        src='/icons/fpistore.netblack.png'
                        alt='Footer Picture'
                        className='dark:hidden duration-700'
                    />
                </Link>
                <div className='text-dark-800 dark:text-gray-300'>
                    <NavContent />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
