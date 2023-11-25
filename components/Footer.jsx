import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-primary-color px-10 text-primary-text-color sm:px-20'>
        <div class="pt-2">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-center gap-2 lg:mt-10">
                <div class="p-2 mx-auto lg:mx-0 mt-7 lg:mt-0">
                    <Image src='/assets/images/logo.png' width={40} height={40} alt='brand-logo'/>
                </div>
                <div class="p-2 lg:space-x-10 space-x-4 lg:text-xl text-base text-center font-semibold">
                    <Link href="#" class="hover:text-primary-color-light transition ease-out duration-500">How it Works</Link>
                    <Link href="#" class="hover:text-primary-color-light  transition ease-out duration-500">Features</Link>
                    
                </div>
                <div class="p-2 mx-auto items-center space-x-5">
                    <i class="fa-brands fa-x-twitter fa-lg " ></i>
                    <i class="fa-brands fa-facebook-f fa-lg " ></i>
                    <i class="fa-brands fa-instagram fa-lg" ></i>
                    <i class="fa-brands fa-github fa-lg"></i>
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="inherrit" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"/>
                    </svg>
                </div>
            </div>
        </div>
        <div>
            <div class="container mx-auto p-2 mt-5">
                <h1 class=" border"></h1>
            </div>
        </div>
        <div>
        <div class="">
            <div class="flex flex-col md:flex-row md:justify-between items-center ">
                <div class="p-2">
                    <h1 class=" text-center lg:text-start font-semibold">
                        © Copyright 2022, All Rights Reserved
                    </h1>
                </div>
                <div class="p-2 space-x-5 text-center">
                    <Link href="#" class="">Privacy Policy</Link>
                    <Link href="#" class="text-primary-text-color">Terms &amp; Conditions</Link>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer