import React from 'react'

const Textimony = () => {
  return (
    <div className="flex lg:flex-col min-w-max gap-8">
        <a className="relative min-w-[310px] max-w-[330px]  transition-colors duration-[1000ms] hover:border-primary-color hover:text-white shadow-low-saturate overflow-hidden rounded-3xl border border-border-color bg-white p-6 before:content-[' '] before:absolute before:top-6 before:right-6 before:h-10 before:w-10 before:rounded-xl before:bg-primary-color before:transition-all before:duration-[300ms] hover:before:top-0 hover:before:right-0 hover:before:w-full hover:before:h-full" href="https://twitter.com/victorfatanmi/status/1551595010012897281" target="_blank" rel="noreferrer">
            <span className=" relative mb-4 flex items-start">
            <span className="transition-colors duration-[300ms] block h-[56px] w-[56px] overflow-hidden rounded-full">
                <span className="transition-colors duration-[300ms] inline-flex overflow-hidden bg-none opacity-100 relative max-w-full" >
                <span >
                    <img alt="" aria-hidden="true" src="/assets/images/logo.png" className='w-10 h-10'  />
                </span>
                </span>
            </span>
            <span className=" mx-2 w-full flex flex-col flex-1 ">
                <span className=" overflow-hidden text-ellipsis whitespace-nowrap font-semibold">Abiodun Abidoye</span>
                <span className=" text-sm text-text-color text-ellipsis whitespace-nowrap">@i_am_habidoye</span>
            </span>
            <span className="transition-colors duration-[300ms] h-10 w-10 flex items-center justify-center bg-inherit text-center text-white">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path></svg>
            </span>
            </span>
            <span className="relative">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            {/* <div className="h-[1px] my-2 bg-[#f2f6ff] w-full"></div> */}
            {/* <span>
            <div className="flex justify-end space-x-2 items-center">
                <div className="flex space-x-1 items-center h-10 w-10 text-inherit absolute bottom-0 right-4">
                    <span id="like" class=" flex items-center justify-center like mr-1 font-light text-inherit" >
                    0
                </span>
                <div className="text-inherit flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/> </svg>
                </div>
                </div>    
            </div>
            </span> */}
        </a>
    </div>
  )
}

export default Textimony