import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6"
import { MdGroups } from "react-icons/md"

export const menuFooter = [
    {
        url: "/about",
        title: "Tentang FPI Store",
    },
    {
        url: "/faq",
        title: "FAQ",
    },
    {
        url: "/cara-order",
        title: "Cara Order",
    },
    {
        url: "/blacklist",
        title: "Blacklist",
    },
]

export const navButtons = [
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

export const contactsButton = [
    {
        url: "https://chat.whatsapp.com/INXaIq12j2bLch9sVslcfJ",
        icon: (
            <MdGroups className='text-dark-800 dark:text-gray-300 text-2xl lg:text-xl m-1 group-hover:text-primary' />
        ),
    },
    {
        url: "https://wa.me/6289684684684",
        icon: (
            <FaWhatsapp className='text-dark-800 dark:text-gray-300 text-2xl lg:text-xl m-1 group-hover:text-primary' />
        ),
    },
    {
        url: "https://www.facebook.com/groups/2404456753194087",
        icon: (
            <FaFacebookF className='text-dark-800 dark:text-gray-300 text-2xl lg:text-xl m-1 group-hover:text-primary' />
        ),
    },
    {
        url: "https://www.instagram.com/fpistore_net",
        icon: (
            <FaInstagram className='text-dark-800 dark:text-gray-300 text-2xl lg:text-xl m-1 group-hover:text-primary' />
        ),
    },
]

export const supportDevices = [
    {
        title: "SmartTV atau TV",
        description: "yang Terhubung ke Internet",
        device: (
            <svg
                width='118'
                height='79'
                viewBox='0 0 118 79'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <defs>
                    <linearGradient
                        id='grad1'
                        x1='0%'
                        y1='0%'
                        x2='100%'
                        y2='0%'
                    >
                        <stop
                            offset='0%'
                            style={{
                                stopColor:
                                    "rgb(217 70 239 / var(--tw-text-opacity))",
                                stopOpacity: 1,
                            }}
                        />
                        <stop
                            offset='100%'
                            style={{
                                stopColor:
                                    "rgb(14 165 233 / var(--tw-text-opacity))",
                                stopOpacity: 1,
                            }}
                        />
                    </linearGradient>
                </defs>
                <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M111.5 3.5H6.5C4.84314 3.5 3.5 4.84315 3.5 6.5V60.5C3.5 62.1569 4.84315 63.5 6.5 63.5H111.5C113.157 63.5 114.5 62.1569 114.5 60.5V6.5C114.5 4.84315 113.157 3.5 111.5 3.5ZM6.5 0.5C3.18629 0.5 0.5 3.18629 0.5 6.5V60.5C0.5 63.8137 3.18629 66.5 6.5 66.5H57.5V75.5H36.5C35.6716 75.5 35 76.1716 35 77C35 77.8284 35.6716 78.5 36.5 78.5H81.5C82.3284 78.5 83 77.8284 83 77C83 76.1716 82.3284 75.5 81.5 75.5H60.5V66.5H111.5C114.814 66.5 117.5 63.8137 117.5 60.5V6.5C117.5 3.18629 114.814 0.5 111.5 0.5H6.5Z'
                    fill='url(#grad1)'
                />
            </svg>
        ),
    },
    {
        title: "Telepon atau Tablet",
        description: "Unduh aplikasi Netflix untuk pengalaman optimal",
        device: (
            <svg
                width='82'
                height='70'
                viewBox='0 0 82 70'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                focusable='true'
            >
                <defs>
                    <linearGradient
                        id='grad1'
                        x1='0%'
                        y1='0%'
                        x2='100%'
                        y2='0%'
                    >
                        <stop
                            offset='0%'
                            style={{
                                stopColor:
                                    "rgb(217 70 239 / var(--tw-text-opacity))",
                                stopOpacity: 1,
                            }}
                        />
                        <stop
                            offset='100%'
                            style={{
                                stopColor:
                                    "rgb(14 165 233 / var(--tw-text-opacity))",
                                stopOpacity: 1,
                            }}
                        />
                    </linearGradient>
                </defs>
                <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M75.5 3.5H36.5C34.8431 3.5 33.5 4.84315 33.5 6.5V63.5C33.5 65.1569 34.8431 66.5 36.5 66.5H75.5C77.1569 66.5 78.5 65.1569 78.5 63.5V6.5C78.5 4.84315 77.1569 3.5 75.5 3.5ZM81.5 6.5C81.5 3.18629 78.8137 0.5 75.5 0.5H36.5C33.1863 0.5 30.5 3.18629 30.5 6.5V63.5C30.5 66.8137 33.1863 69.5 36.5 69.5H75.5C78.8137 69.5 81.5 66.8137 81.5 63.5V6.5ZM18.5 30.5H6.5C4.84315 30.5 3.5 31.8431 3.5 33.5V63.5C3.5 65.1569 4.84315 66.5 6.5 66.5H18.5C20.1569 66.5 21.5 65.1569 21.5 63.5V33.5C21.5 31.8431 20.1569 30.5 18.5 30.5ZM24.5 33.5C24.5 30.1863 21.8137 27.5 18.5 27.5H6.5C3.18629 27.5 0.5 30.1863 0.5 33.5V63.5C0.5 66.8137 3.18629 69.5 6.5 69.5H18.5C21.8137 69.5 24.5 66.8137 24.5 63.5V33.5ZM56 62C55.1716 62 54.5 61.3284 54.5 60.5C54.5 59.6716 55.1716 59 56 59C56.8284 59 57.5 59.6716 57.5 60.5C57.5 61.3284 56.8284 62 56 62ZM56 63.5C54.3431 63.5 53 62.1569 53 60.5C53 58.8431 54.3431 57.5 56 57.5C57.6569 57.5 59 58.8431 59 60.5C59 62.1569 57.6569 63.5 56 63.5ZM11 60.5C11 61.3284 11.6716 62 12.5 62C13.3284 62 14 61.3284 14 60.5C14 59.6716 13.3284 59 12.5 59C11.6716 59 11 59.6716 11 60.5ZM9.5 60.5C9.5 62.1569 10.8431 63.5 12.5 63.5C14.1568 63.5 15.5 62.1569 15.5 60.5C15.5 58.8431 14.1568 57.5 12.5 57.5C10.8431 57.5 9.5 58.8431 9.5 60.5Z'
                    fill='url(#grad1)'
                ></path>
            </svg>
        ),
    },
    {
        title: "Komputer Desktop atau Laptop",
        description: "",
        device: (
            <svg
                width='114'
                height='64'
                viewBox='0 0 114 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                focusable='true'
            >
                <defs>
                    <linearGradient
                        id='grad1'
                        x1='0%'
                        y1='0%'
                        x2='100%'
                        y2='0%'
                    >
                        <stop
                            offset='0%'
                            style={{
                                stopColor:
                                    "rgb(217 70 239 / var(--tw-text-opacity))",
                                stopOpacity: 1,
                            }}
                        />
                        <stop
                            offset='100%'
                            style={{
                                stopColor:
                                    "rgb(14 165 233 / var(--tw-text-opacity))",
                                stopOpacity: 1,
                            }}
                        />
                    </linearGradient>
                </defs>
                <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M13.5 3.5H100.5C102.157 3.5 103.5 4.84315 103.5 6.5V53H10.5V6.5C10.5 4.84315 11.8431 3.5 13.5 3.5ZM7.5 53V6.5C7.5 3.18629 10.1863 0.5 13.5 0.5H100.5C103.814 0.5 106.5 3.18629 106.5 6.5V53H114V57.5C114 60.8137 111.314 63.5 108 63.5H6C2.68629 63.5 0 60.8137 0 57.5V53H7.5ZM106.5 56H7.5H3V57.5C3 59.1569 4.34315 60.5 6 60.5H108C109.657 60.5 111 59.1569 111 57.5V56H106.5Z'
                    fill='url(#grad1)'
                ></path>
            </svg>
        ),
    },
    {
        title: "Konsol Game",
        description: "Terhubung ke internet",
        device: (
            <svg
                width='94'
                height='89'
                viewBox='0 0 94 89'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                focusable='true'
            >
                <defs>
                    <linearGradient
                        id='grad1'
                        x1='0%'
                        y1='0%'
                        x2='100%'
                        y2='0%'
                    >
                        <stop
                            offset='0%'
                            style={{
                                stopColor:
                                    "rgb(217 70 239 / var(--tw-text-opacity))",
                                stopOpacity: 1,
                            }}
                        />
                        <stop
                            offset='100%'
                            style={{
                                stopColor:
                                    "rgb(14 165 233 / var(--tw-text-opacity))",
                                stopOpacity: 1,
                            }}
                        />
                    </linearGradient>
                </defs>
                <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M75.5 0H78.5V28.5C78.5 33.4706 74.4706 37.5 69.5 37.5C64.5294 37.5 60.5 33.4706 60.5 28.5V19.5C60.5 16.1863 57.8137 13.5 54.5 13.5C51.1863 13.5 48.5 16.1863 48.5 19.5V43.5H71C83.4264 43.5 93.5 53.5736 93.5 66C93.5 78.4264 83.4264 88.5 71 88.5C63.6388 88.5 57.1033 84.965 52.9984 79.5H41.0016C36.8967 84.965 30.3612 88.5 23 88.5C10.5736 88.5 0.5 78.4264 0.5 66C0.5 53.5736 10.5736 43.5 23 43.5H45.5V19.5C45.5 14.5294 49.5294 10.5 54.5 10.5C59.4706 10.5 63.5 14.5294 63.5 19.5V28.5C63.5 31.8137 66.1863 34.5 69.5 34.5C72.8137 34.5 75.5 31.8137 75.5 28.5V0ZM54.497 76.5H39.503L38.603 77.6983C35.0403 82.4414 29.3778 85.5 23 85.5C12.2304 85.5 3.5 76.7696 3.5 66C3.5 55.2304 12.2304 46.5 23 46.5H71C81.7696 46.5 90.5 55.2304 90.5 66C90.5 76.7696 81.7696 85.5 71 85.5C64.6222 85.5 58.9597 82.4414 55.397 77.6983L54.497 76.5ZM28.1213 63H32C32.8284 63 33.5 63.6716 33.5 64.5V67.5C33.5 68.3284 32.8284 69 32 69H28.1213L25.1213 66L28.1213 63ZM27.0607 61.9393C27.342 61.658 27.7235 61.5 28.1213 61.5H32C33.6569 61.5 35 62.8431 35 64.5V67.5C35 69.1569 33.6569 70.5 32 70.5H28.1213C27.7235 70.5 27.342 70.342 27.0607 70.0607L24.0607 67.0607C23.4749 66.4749 23.4749 65.5251 24.0607 64.9393L27.0607 61.9393ZM11 63H14.8787L17.8787 66L14.8787 69H11C10.1716 69 9.5 68.3284 9.5 67.5V64.5C9.5 63.6716 10.1716 63 11 63ZM14.8787 61.5C15.2765 61.5 15.658 61.658 15.9393 61.9393L18.9393 64.9393C19.5251 65.5251 19.5251 66.4749 18.9393 67.0607L15.7197 70.2803C15.579 70.421 15.3883 70.5 15.1893 70.5H11C9.34314 70.5 8 69.1569 8 67.5V64.5C8 62.8431 9.34314 61.5 11 61.5H14.8787ZM18.5 60.8787V57C18.5 56.1716 19.1716 55.5 20 55.5H23C23.8284 55.5 24.5 56.1716 24.5 57V60.8787L21.5 63.8787L18.5 60.8787ZM17.4393 61.9394C17.158 61.6581 17 61.2766 17 60.8787V57C17 55.3432 18.3431 54 20 54H23C24.6569 54 26 55.3432 26 57V60.8787C26 61.2766 25.842 61.6581 25.5607 61.9394L22.5607 64.9394C21.9749 65.5252 21.0251 65.5252 20.4393 64.9394L17.4393 61.9394ZM18.5 75V71.1213L21.5 68.1213L24.5 71.1213V75C24.5 75.8284 23.8284 76.5 23 76.5H20C19.1716 76.5 18.5 75.8284 18.5 75ZM17 71.1213C17 70.7234 17.158 70.3419 17.4393 70.0606L20.4393 67.0606C21.0251 66.4748 21.9749 66.4748 22.5607 67.0606L25.5607 70.0606C25.842 70.3419 26 70.7234 26 71.1213V75C26 76.6568 24.6569 78 23 78H20C18.3431 78 17 76.6568 17 75V71.1213ZM39.9393 67.3181C39.3535 67.9038 39.3535 68.8536 39.9393 69.4394C40.5251 70.0252 41.4749 70.0252 42.0607 69.4394L45.9393 65.5607C46.5251 64.9749 46.5251 64.0252 45.9393 63.4394C45.3535 62.8536 44.4038 62.8536 43.818 63.4394L39.9393 67.3181ZM48.9393 69.4394C48.3535 68.8536 48.3535 67.9038 48.9393 67.3181L52.818 63.4394C53.4038 62.8536 54.3536 62.8536 54.9393 63.4394C55.5251 64.0252 55.5251 64.9749 54.9393 65.5607L51.0607 69.4394C50.4749 70.0252 49.5251 70.0252 48.9393 69.4394ZM75.5 58.5C75.5 60.1569 74.1569 61.5 72.5 61.5C70.8431 61.5 69.5 60.1569 69.5 58.5C69.5 56.8431 70.8431 55.5 72.5 55.5C74.1569 55.5 75.5 56.8431 75.5 58.5ZM77 58.5C77 60.9853 74.9853 63 72.5 63C70.0147 63 68 60.9853 68 58.5C68 56.0147 70.0147 54 72.5 54C74.9853 54 77 56.0147 77 58.5ZM72.5 76.5C74.1569 76.5 75.5 75.1569 75.5 73.5C75.5 71.8431 74.1569 70.5 72.5 70.5C70.8431 70.5 69.5 71.8431 69.5 73.5C69.5 75.1569 70.8431 76.5 72.5 76.5ZM72.5 78C74.9853 78 77 75.9853 77 73.5C77 71.0147 74.9853 69 72.5 69C70.0147 69 68 71.0147 68 73.5C68 75.9853 70.0147 78 72.5 78ZM83 66C83 67.6569 81.6569 69 80 69C78.3431 69 77 67.6569 77 66C77 64.3431 78.3431 63 80 63C81.6569 63 83 64.3431 83 66ZM84.5 66C84.5 68.4853 82.4853 70.5 80 70.5C77.5147 70.5 75.5 68.4853 75.5 66C75.5 63.5147 77.5147 61.5 80 61.5C82.4853 61.5 84.5 63.5147 84.5 66ZM65 69C66.6569 69 68 67.6569 68 66C68 64.3431 66.6569 63 65 63C63.3431 63 62 64.3431 62 66C62 67.6569 63.3431 69 65 69ZM65 70.5C67.4853 70.5 69.5 68.4853 69.5 66C69.5 63.5147 67.4853 61.5 65 61.5C62.5147 61.5 60.5 63.5147 60.5 66C60.5 68.4853 62.5147 70.5 65 70.5Z'
                    fill='url(#grad1)'
                ></path>
            </svg>
        ),
    },
    {
        title: "Alat Streaming",
        description: "Menghubungkan TV Anda ke internet",
        device: (
            <svg
                width='81'
                height='85'
                viewBox='0 0 81 85'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                focusable='true'
            >
                <defs>
                    <linearGradient
                        id='grad1'
                        x1='0%'
                        y1='0%'
                        x2='100%'
                        y2='0%'
                    >
                        <stop
                            offset='0%'
                            style={{
                                stopColor:
                                    "rgb(217 70 239 / var(--tw-text-opacity))",
                                stopOpacity: 1,
                            }}
                        />
                        <stop
                            offset='100%'
                            style={{
                                stopColor:
                                    "rgb(14 165 233 / var(--tw-text-opacity))",
                                stopOpacity: 1,
                            }}
                        />
                    </linearGradient>
                </defs>
                <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M32.7979 11.559L30.9061 9.23059C37.6161 3.77207 46.1759 0.5 55.5 0.5C64.8241 0.5 73.3839 3.77207 80.0939 9.23059L78.2021 11.559C72.0082 6.52037 64.1068 3.5 55.5 3.5C46.8932 3.5 38.9918 6.52037 32.7979 11.559ZM55.5 8C63.031 8 69.9447 10.6428 75.3643 15.0516L73.4725 17.38C68.569 13.3911 62.3137 11 55.5 11C48.6863 11 42.431 13.3911 37.5275 17.38L35.6357 15.0516C41.0553 10.6428 47.969 8 55.5 8ZM55.5 15.5C61.2379 15.5 66.5055 17.5136 70.6347 20.8727L68.7429 23.2011C65.1298 20.2619 60.5207 18.5 55.5 18.5C50.4793 18.5 45.8702 20.2619 42.2571 23.2011L40.3653 20.8727C44.4945 17.5136 49.7621 15.5 55.5 15.5ZM48 33.5C48 31.8431 49.3431 30.5 51 30.5H60C61.6569 30.5 63 31.8431 63 33.5V78.5C63 80.1569 61.6569 81.5 60 81.5H51C49.3431 81.5 48 80.1569 48 78.5V33.5ZM45 33.5C45 30.1863 47.6863 27.5 51 27.5H60C63.3137 27.5 66 30.1863 66 33.5V78.5C66 81.8137 63.3137 84.5 60 84.5H51C47.6863 84.5 45 81.8137 45 78.5V33.5ZM6 59H34.5C36.1569 59 37.5 60.3431 37.5 62V78.5C37.5 80.1569 36.1569 81.5 34.5 81.5H6C4.34315 81.5 3 80.1569 3 78.5V62C3 60.3431 4.34315 59 6 59ZM0 62C0 58.6863 2.68629 56 6 56H34.5C37.8137 56 40.5 58.6863 40.5 62V78.5C40.5 81.8137 37.8137 84.5 34.5 84.5H6C2.68629 84.5 0 81.8137 0 78.5V62ZM55.5 45.5C57.1569 45.5 58.5 44.1569 58.5 42.5C58.5 40.8431 57.1569 39.5 55.5 39.5C53.8431 39.5 52.5 40.8431 52.5 42.5C52.5 44.1569 53.8431 45.5 55.5 45.5ZM55.5 47C57.9853 47 60 44.9853 60 42.5C60 40.0147 57.9853 38 55.5 38C53.0147 38 51 40.0147 51 42.5C51 44.9853 53.0147 47 55.5 47Z'
                    fill='url(#grad1)'
                ></path>
            </svg>
        ),
    },
    {
        title: "Set Top Box Kabel",
        description: "Dari penyedia kabel Anda",
        device: (
            <svg
                width='96'
                height='89'
                viewBox='0 0 96 89'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                focusable='true'
            >
                <defs>
                    <linearGradient
                        id='grad1'
                        x1='0%'
                        y1='0%'
                        x2='100%'
                        y2='0%'
                    >
                        <stop
                            offset='0%'
                            style={{
                                stopColor:
                                    "rgb(217 70 239 / var(--tw-text-opacity))",
                                stopOpacity: 1,
                            }}
                        />
                        <stop
                            offset='100%'
                            style={{
                                stopColor:
                                    "rgb(14 165 233 / var(--tw-text-opacity))",
                                stopOpacity: 1,
                            }}
                        />
                    </linearGradient>
                </defs>
                <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M90 3.5H6C4.34315 3.5 3 4.84315 3 6.5V48.5C3 50.1569 4.34315 51.5 6 51.5H90C91.6569 51.5 93 50.1569 93 48.5V6.5C93 4.84315 91.6569 3.5 90 3.5ZM6 0.5C2.68629 0.5 0 3.18629 0 6.5V48.5C0 51.8137 2.68629 54.5 6 54.5H46.5V62H31.5C30.6716 62 30 62.6716 30 63.5C30 64.3284 30.6716 65 31.5 65H63C63.8284 65 64.5 64.3284 64.5 63.5C64.5 62.6716 63.8284 62 63 62H49.5V54.5H79.488L79.4873 54.5632V54.5636V54.5639V54.5643C79.4766 55.4328 79.4664 56.2623 79.489 56.9844C79.5254 58.1492 79.6463 59.3268 80.0945 60.3512C80.5785 61.4576 81.4022 62.2949 82.6262 62.8172C83.7776 63.3084 85.232 63.5 87 63.5C87.762 63.5 88.451 63.4814 89.0531 63.4651L89.0536 63.4651L89.0545 63.465H89.0546L89.2998 63.4585C89.973 63.4407 90.5033 63.431 90.9506 63.4515C91.8682 63.4937 92.0765 63.6556 92.1755 63.7636C92.3455 63.949 92.6158 64.4606 92.7869 65.9662C92.9518 67.4168 93 69.4921 93 72.5C93 73.9671 92.9048 74.9259 92.7266 75.5673C92.5622 76.1591 92.3585 76.3749 92.1679 76.5019C91.9166 76.6695 91.4657 76.8268 90.5609 76.913C89.9856 76.9678 89.3118 76.9881 88.5 76.9956V74C88.5 70.6863 85.8137 68 82.5 68H13.5C10.1863 68 7.5 70.6863 7.5 74V83C7.5 86.3137 10.1863 89 13.5 89H82.5C85.8137 89 88.5 86.3137 88.5 83V79.9959C89.3672 79.9881 90.154 79.9653 90.8453 79.8995C91.9093 79.7982 92.9584 79.5805 93.832 78.9981C94.7665 78.3751 95.3128 77.4659 95.6171 76.3702C95.9077 75.3241 96 74.0329 96 72.5C96 69.5079 95.9545 67.2707 95.7678 65.6275C95.5873 64.0394 95.2483 62.676 94.387 61.7364C93.4547 60.7194 92.2099 60.5063 91.0884 60.4547C90.5162 60.4284 89.8805 60.4421 89.2207 60.4595L88.9714 60.4662C88.3672 60.4825 87.7193 60.5 87 60.5C85.393 60.5 84.4099 60.3166 83.8035 60.0578C83.2697 59.8301 83.0152 59.5424 82.843 59.1488C82.6349 58.6732 82.5215 57.9758 82.4875 56.8906C82.4666 56.2217 82.4757 55.5146 82.4861 54.7077L82.4887 54.5H90C93.3137 54.5 96 51.8137 96 48.5V6.5C96 3.18629 93.3137 0.5 90 0.5H6ZM13.5 71H82.5C84.1569 71 85.5 72.3431 85.5 74V83C85.5 84.6569 84.1569 86 82.5 86H13.5C11.8431 86 10.5 84.6569 10.5 83V74C10.5 72.3431 11.8431 71 13.5 71ZM81 78.5C81 80.1569 79.6569 81.5 78 81.5C76.3431 81.5 75 80.1569 75 78.5C75 76.8431 76.3431 75.5 78 75.5C79.6569 75.5 81 76.8431 81 78.5ZM82.5 78.5C82.5 80.9853 80.4853 83 78 83C75.5147 83 73.5 80.9853 73.5 78.5C73.5 76.0147 75.5147 74 78 74C80.4853 74 82.5 76.0147 82.5 78.5ZM31.5 75.5H18C17.1716 75.5 16.5 76.1716 16.5 77V80C16.5 80.8284 17.1716 81.5 18 81.5H31.5C32.3284 81.5 33 80.8284 33 80V77C33 76.1716 32.3284 75.5 31.5 75.5ZM18 74C16.3431 74 15 75.3431 15 77V80C15 81.6569 16.3431 83 18 83H31.5C33.1569 83 34.5 81.6569 34.5 80V77C34.5 75.3431 33.1569 74 31.5 74H18Z'
                    fill='url(#grad1)'
                ></path>
            </svg>
        ),
    },
]

export const RulesContent = [
    {
        title: "Shared",
        description:
            "Hanya Untuk 1 Perangkat | Dilarang Mengganti Password & Email | Dilarang Menambahkan Profil Baru | Gunakan 1 Profil Saja | Logout terlebih dahulu jika ingin mengganti device | Dilarang Mengganti PIN Tanpa Sepengetahuan Admin (Wajib Lapor)",
    },
    {
        title: "Private",
        description:
            "Dilarang Mengganti Email | Dilarang Merubah/Merusak Payment Info Atau Subscription | Selalu Lapor Dan Kirim Password Baru Kepada Admin Untuk Pendataan",
    },
    {
        title: "Reseller",
        description:
            "Dilarang Menjual 1 Profile Lebih Dari 1 Device | Dilarang Menipu Seperti Menjual Paket 1 Tahun Lalu Kabur | Wajib Bertanggung Jawab Pada Customer Anda!",
    },
]

export const Products = [
    {
        _id: 1,
        package: "SHARED",
        durations: [
            { title: "1 Bulan", price: 30000, promo: 25000 },
            { title: "3 Bulan", price: 80000, promo: 70000 },
        ],
        features: [
            "Bisa Request Nama Profile",
            "Bebas Request PIN",
            "Bergaransi Full Sesuai Durasi Pembelian",
            "Bisa Perpanjang",
            "Resolusi 4K HDR",
            "Support All Device",
            "Klaim Garansi Maksimal 1x24jam",
            "Bukan Hasil Change Email (Bule)",
            "Bukan Hasil Phishing",
            "Bukan Hasil Crack",
        ],
        description:
            "Akun Shared memungkinkan Anda menikmati langganan Premium Ultra HD Netflix tanpa membayar harga penuh. Layanan ini dirancang untuk individu yang menginginkan kualitas tinggi dengan biaya terjangkau.",
        picture: [
            "/images/SHARED.png",
            "/images/NShared.png",
            "/images/RED.png",
            "/images/BLUE.png",
            "/images/GREEN.png",
            "/images/YELLOW.png",
            "/images/DARKGREEN.png",
        ],
        whatYouGet:
            "Akses ke 1 Profile Maksimal 1 Device, dan boleh request nama Profile dan PIN. jika mau",
        bestSeller: "false",
        rules: RulesContent[0].description,
    },
    {
        _id: 2,
        package: "PRIVATE",
        durations: [
            { title: "1 Bulan", price: 119000, promo: 105000 },
            { title: "3 Bulan", price: 353000, promo: 310000 },
        ],
        features: [
            "Bisa Mengganti Password",
            "Bisa Membuat 5 Profile",
            "Bergaransi Full Sesuai Durasi Pembelian",
            "Bisa Perpanjang",
            "Resolusi 4K HDR",
            "Support All Device",
            "Klaim Garansi Maksimal 1x24jam",
            "Bukan Hasil Change Email (Bule)",
            "Bukan Hasil Phishing",
            "Bukan Hasil Crack",
        ],
        description:
            "Akun Private memberikan akses penuh ke semua fitur Netflix, termasuk lima profil yang dapat diatur sesuai keinginan Anda. Anda bisa mengganti password, mengatur profil, dan merasakan kendali penuh atas akun Anda.",
        picture: [
            "/images/PRIVATE.png",
            "/images/NPrivate.png",
            "/images/Profiles.png",
        ],
        whatYouGet:
            "Full Akses ke seluruh akun, Diperbolehkan Mengganti Password ataupun membuat 5 Profile",
        bestSeller: "true",
        rules: RulesContent[1].description,
    },
    {
        _id: 3,
        package: "RESELLER",
        durations: [{ title: "1 Bulan", price: 349000, promo: 309000 }],
        features: [
            "Mendapatkan 3 Akun Sekaligus",
            "Harga Spesial",
            "Bisa Membuat 5 Profile untuk dijual",
            "Bisa Mengganti Password",
            "Bergaransi Full Sesuai Durasi Pembelian",
            "Bisa Perpanjang",
            "Resolusi 4K HDR",
            "Support All Device",
            "Klaim Garansi Maksimal 1x24jam",
            "Bukan Hasil Change Email (Bule)",
            "Bukan Hasil Phishing",
            "Bukan Hasil Crack",
        ],
        description:
            "Paket RESELLER kami tidak hanya memberi Anda kesempatan untuk menjual akun berbagi premium yang kami tawarkan, tetapi juga memberikan Anda akses eksklusif ke akun pribadi dengan harga khusus. Ini adalah kesempatan emas untuk membangun bisnis streaming Anda sendiri tanpa perlu investasi besar. Dengan harga spesial dan kemampuan untuk menjual kembali, Anda dapat merajut jalan menuju kesuksesan di industri ini. Bergabunglah dengan kami dan buat langkah pertama Anda dalam meraih sukses bersama!",
        picture: ["/images/RESELLER.png"],
        whatYouGet:
            "Mendapatkan 3 Akun Sekaligus dengan durasi yang sama, dan full akses, Diperbolehkan Mengganti Password ataupun membuat 5 Profile",
        bestSeller: "false",
        rules: RulesContent[2].description,
    },
]

export interface Testimonial {
    picture: string
}

export const Testi: Testimonial[] = []

for (let i = 1; i <= 59; i++) {
    Testi.push({
        picture: `/images/testimonial/testimoni_${i}.jpeg`,
    })
}
